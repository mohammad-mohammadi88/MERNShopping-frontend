import { useMutation } from "@tanstack/react-query";
import type { ApiResponse } from "apisauce";
import { useState } from "react";

import { queryClient } from "@/main";
import { AlertModal, Button, Loading, Modal, Select } from "@Components";
import { useModalReducer } from "@Hooks";
import type { SelectOption } from "@Types";
import { capitalize } from "@Utils";

interface Props<E, T extends object> {
    currentStatus: T[keyof T];
    apiCall: (
        newStatus: T[keyof T] | string
    ) => Promise<ApiResponse<E, string>>;
    queryKey: string[];
    collectionStatus: T;
    datumName: string;
}

const collectonStatusOptions = <T extends object>(
    collectionStatus: T
): SelectOption[] =>
    Object.keys(collectionStatus).map((label) => ({
        label: capitalize(label.toLowerCase()),
        value: collectionStatus[label as keyof T] as string,
    }));
const ChangeStatus = <E, T extends object>({
    currentStatus,
    apiCall,
    collectionStatus,
    datumName,
    queryKey,
}: Props<E, T>) => {
    const [editConfirmOpen, setEditConfirmOpen] = useState<boolean>(false);
    const [prevStatus, setPrevStatus] = useState<T[keyof T] | string>(
        currentStatus
    );
    const [newStatus, setNewStatus] = useState<T[keyof T] | string>(
        currentStatus
    );
    const [state, dispatch] = useModalReducer();
    const { mutateAsync, isPending } = useMutation({
        mutationFn: () => apiCall(newStatus),
    });
    return (
        <>
            <div className="flex items-end space-x-3">
                <Select
                    labelClassName="!font-bold !text-xl"
                    options={collectonStatusOptions(collectionStatus)}
                    label={`${capitalize(datumName)} Status`}
                    className={"!mb-0"}
                    onChange={(e) => setNewStatus(e.target.value)}
                    value={String(newStatus)}
                />
                <Button
                    role="edit"
                    title="Status"
                    className="h-auto !-mb-1 -translate-y-0.5"
                    onClick={() => setEditConfirmOpen(true)}
                />
            </div>
            {/* loading modal */}
            <Modal isOpen={isPending} onClose={() => {}}>
                <div className="fixed inset-0 z-2000 bg-white flex justify-center items-center">
                    <Loading loading />
                </div>
            </Modal>

            {/* confirm edit modal */}
            <AlertModal
                role="confirm"
                title="Edit"
                description={`Are you sure want to edit this ${datumName} status`}
                isOpen={editConfirmOpen}
                onClose={() => setEditConfirmOpen(false)}
                onConfirm={async () => {
                    const { ok, data, problem } = await mutateAsync();

                    if (!ok) {
                        // if request fails we will change the status to prevStatus, the one is stable
                        setNewStatus(prevStatus);

                        return dispatch(useModalReducer.error(data ?? problem));
                    }

                    // if request resolves we will update the prevStatus because the newStatus is now stable
                    setPrevStatus(newStatus);

                    queryClient.invalidateQueries({ queryKey });
                    dispatch(useModalReducer.success);
                }}
            />

            {/* show request status modal */}
            <AlertModal
                isOpen={state.isOpen}
                role={state.isSuccess ? "success" : "error"}
                description={
                    state.isSuccess === false
                        ? state.error
                        : `${capitalize(datumName)} status updated successfully`
                }
                onClose={() => dispatch(useModalReducer.close)}
                title={state.isSuccess ? "Success" : "Error"}
            />
        </>
    );
};

export default ChangeStatus;

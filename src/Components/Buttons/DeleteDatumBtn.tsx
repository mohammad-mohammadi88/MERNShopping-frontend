import { useState, type FC } from "react";

import { queryClient } from "@/main";
import { AlertModal, Button, Loading, Modal } from "@Components";
import { useModalReducer } from "@Hooks";
import { useMutation } from "@tanstack/react-query";
import { capitalize } from "@Utils";
import { useNavigate } from "react-router";

interface Props {
    id: string;
    apiCall: (id: string) => Promise<any>;
    datumName: string;
    queryKey: string[];
    navigateUrl: string;
}

const DeleteDatumBtn: FC<Props> = ({
    id,
    apiCall,
    datumName,
    queryKey,
    navigateUrl,
}) => {
    const navigate = useNavigate();
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState<boolean>(false);
    const [state, dispatch] = useModalReducer();
    const { mutateAsync, isPending } = useMutation({
        mutationFn: () => apiCall(id),
    });
    return (
        <>
            <Button
                role="delete"
                title={capitalize(datumName)}
                className="block"
                onClick={() => setDeleteConfirmOpen(true)}
            />
            {/* loading modal */}
            <Modal isOpen={isPending} onClose={() => {}}>
                <div className="fixed inset-0 z-2000 bg-white flex justify-center items-center">
                    <Loading loading />
                </div>
            </Modal>

            {/* confirm delete modal */}
            <AlertModal
                role="confirm"
                title="Delete"
                description={`Are you sure want to delete this ${datumName}`}
                isOpen={deleteConfirmOpen}
                onClose={() => setDeleteConfirmOpen(false)}
                onConfirm={async () => {
                    const { ok, data, problem } = await mutateAsync();

                    if (!ok)
                        return dispatch(useModalReducer.error(data ?? problem));

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
                        : `${capitalize(datumName)} Deleted successfully`
                }
                onClose={() => {
                    dispatch(useModalReducer.close);
                    navigate(navigateUrl);

                    // invalidate user 1 second after nagivation
                    const timer = setTimeout(() => {
                        queryClient.invalidateQueries({
                            queryKey: [datumName, id],
                        });
                        clearTimeout(timer);
                    }, 1000);
                }}
                title={state.isSuccess ? "Success" : "Error"}
            />
        </>
    );
};

export default DeleteDatumBtn;

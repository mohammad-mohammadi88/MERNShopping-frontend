import { useMutation } from "@tanstack/react-query";
import { useState, type FC } from "react";

import { queryClient } from "@/main";
import { capitalize } from "@/utils";
import { ordersApi } from "@Api";
import { AlertModal, Button, Loading, Modal, Select } from "@Components";
import {
    ordersStatus,
    type OrdersStatusKeys,
    type OrdersStatusValues,
} from "@Constants";
import { useModalReducer } from "@Hooks";
import type { SelectOption } from "@Types";

interface Props {
    status: OrdersStatusValues;
    id: string;
}

const orderStatusOptions: SelectOption[] = Object.keys(ordersStatus).map(
    (label) => ({
        label: capitalize(label.toLowerCase()),
        value: ordersStatus[label as OrdersStatusKeys],
    })
);
const ChangeStatus: FC<Props> = ({ status, id }) => {
    const [editConfirmOpen, seteditConfirmOpen] = useState<boolean>(false);
    const [newStatus, setNewStatus] = useState<OrdersStatusValues | string>(
        status
    );
    const [state, dispatch] = useModalReducer();
    const { mutateAsync, isPending } = useMutation({
        mutationFn: () => ordersApi.editOrderStatus(id, newStatus),
    });
    return (
        <>
            <div className="flex items-end space-x-3">
                <Select
                    labelClassName="!font-bold !text-xl !mb-3"
                    options={orderStatusOptions}
                    label="Order Status"
                    onChange={(e) => setNewStatus(e.target.value)}
                    value={newStatus}
                />
                <Button
                    role="edit"
                    title="Order status"
                    className="h-auto -translate-y-0.5"
                    onClick={() => seteditConfirmOpen(true)}
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
                description="Are you sure want to edit this order status"
                isOpen={editConfirmOpen}
                onClose={() => seteditConfirmOpen(false)}
                onConfirm={async () => {
                    const { ok, data, problem } = await mutateAsync();

                    if (!ok)
                        return dispatch(useModalReducer.error(data ?? problem));

                    queryClient.invalidateQueries({
                        queryKey: ["orders", "page"],
                    });
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
                        : "Order status updated successfully"
                }
                onClose={() => dispatch(useModalReducer.close)}
                title={state.isSuccess ? "Success" : "Error"}
            />
        </>
    );
};

export default ChangeStatus;

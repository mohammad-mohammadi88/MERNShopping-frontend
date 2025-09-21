import { useMutation } from "@tanstack/react-query";
import { useState, type FC } from "react";

import { queryClient } from "@/main";
import { productsApi } from "@Api";
import { AlertModal, Button, Loading, Modal } from "@Components";
import { useModalReducer } from "@Hooks";

interface Props {
    id: string;
}

const ProductDeleteBtn: FC<Props> = ({ id }) => {
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState<boolean>(false);
    const [state, dispatch] = useModalReducer();
    const { mutateAsync, isPending } = useMutation({
        mutationFn: () => productsApi.deleteProductById(id),
    });
    return (
        <>
            <Button
                role="delete"
                title="Product"
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
                description="Are you sure want to delete this product"
                isOpen={deleteConfirmOpen}
                onClose={() => setDeleteConfirmOpen(false)}
                onConfirm={async () => {
                    const { ok, data, problem } = await mutateAsync();

                    if (!ok)
                        return dispatch(useModalReducer.error(data ?? problem));

                    queryClient.invalidateQueries({
                        queryKey: ["products", "page"],
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
                        : "Product Deleted successfully"
                }
                onClose={() => dispatch(useModalReducer.close)}
                title={state.isSuccess ? "Success" : "Error"}
            />
        </>
    );
};

export default ProductDeleteBtn;

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type FC } from "react";
import { useNavigate, useParams } from "react-router";

import { queryClient } from "@/main";
import { categoriesApi, productsApi } from "@Api";
import { AlertModal, Loading, ProgressModal } from "@Components";
import { EditProductLogic } from "@Forms";
import { useModalReducer } from "@Hooks";
import type { EditProductValue } from "@Types";
import { setProductBody } from "@Utils";

const EditProduct: FC = () => {
    const productId = useParams().id!;
    const [state, dispatch] = useModalReducer();
    const [progress, setProgress] = useState<number>(0);
    const navigate = useNavigate();

    const { data, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoriesApi.getCategories(),
        // one hour
        staleTime: 3_600_000,
    });

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ["product", productId] });
    }, []);
    const { data: prevProduct, isLoading: isProductLoading } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => productsApi.getProductById(productId),
        // one hour
        staleTime: 3_600_000,
    });
    const handleSubmit = async (values: EditProductValue) => {
        const { ok, data, problem } = await productsApi.editProduct(
            productId,
            setProductBody(values),
            setProgress
        );

        // if ok is true it will be 1 and if false will be 0 and close the progress modal
        setProgress(Number(ok));

        dispatch(
            ok
                ? useModalReducer.success
                : useModalReducer.error(
                      typeof data === "string"
                          ? data
                          : data?.errors
                          ? data?.errors.join("\n")
                          : problem
                  )
        );
    };
    const isReady = !isLoading && !isProductLoading;
    const error = !data?.ok
        ? data?.data || data?.problem
        : !prevProduct?.ok
        ? prevProduct?.data || prevProduct?.problem
        : undefined;
    return (
        <div className="bg-white p-4 rounded border">
            <ProgressModal progress={progress} />
            <AlertModal
                isOpen={state.isOpen}
                onClose={() => {
                    dispatch(useModalReducer.close);
                    if (state.isSuccess) navigate("/");
                }}
                role={state.isSuccess ? "success" : "error"}
                title={
                    state.isSuccess
                        ? "Product edited Successfully"
                        : "There is an Error"
                }
                description={
                    state.isSuccess !== false
                        ? "Edited Product is now available"
                        : state.error
                }
            />
            <h1 className="pb-4">Edit Product</h1>
            <Loading loading={!isReady} />
            {isReady && data?.ok && prevProduct?.ok && (
                <EditProductLogic
                    initialValues={prevProduct}
                    handleSubmit={handleSubmit}
                    categories={data}
                />
            )}
            {isReady && error && (
                <h2 className="w-full h-12 text-red-500 flex justify-center items-center">
                    {error}
                </h2>
            )}
        </div>
    );
};

export default EditProduct;

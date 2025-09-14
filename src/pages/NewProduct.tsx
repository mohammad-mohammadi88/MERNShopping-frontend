import { useQuery } from "@tanstack/react-query";
import { useState, type FC } from "react";
import { useNavigate } from "react-router";

import { categoriesApi, productsApi } from "@/api";
import useModalReducer from "@/hooks/useModalReducer";
import setProductBody from "@/utils/setProductBody";
import { AlertModal, ProgressModal } from "@Components";
import { AddProductLogic } from "@Forms";
import type { FormProductValue } from "@Types";

const NewProduct: FC = () => {
    const [state, dispatch] = useModalReducer();
    const navigate = useNavigate();
    const [progress, setProgress] = useState<number>(0);

    const { data, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoriesApi.getCategories(),
        // one hour
        staleTime: 3_600_000,
    });

    const handleSubmit = async (values: FormProductValue) => {
        const { ok, data, problem } = await productsApi.addProduct(
            setProductBody(values),
            setProgress
        );

        // if ok is true it will be 1 and if false with be 0 and close the progress modal
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
                        ? "New Product added Successfully"
                        : "There is an Error"
                }
                description={
                    state.isSuccess !== false
                        ? "New Product is now available"
                        : state.error
                }
            />
            <h1 className="pb-4">New Product</h1>
            {!isLoading && data?.ok && (
                <AddProductLogic
                    handleSubmit={handleSubmit}
                    categories={data}
                />
            )}
        </div>
    );
};

export default NewProduct;

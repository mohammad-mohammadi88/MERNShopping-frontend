import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { useNavigate } from "react-router";

import { categoriesApi, productsApi } from "@/api";
import useModalReducer from "@/hooks/useModalReducer";
import { AlertModal } from "@Components";
import { AddProductLogic } from "@Forms";
import type { FormProductValue } from "@Types";

const NewProduct: FC = () => {
    const [state, dispatch] = useModalReducer();
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoriesApi.getCategories(),
        // one hour
        staleTime: 3_600_000,
    });

    const handleSubmit = async (values: FormProductValue) => {
        const { ok, data, problem } = await productsApi.addProduct(values);
        dispatch(
            ok
                ? useModalReducer.success
                : useModalReducer.error(
                      typeof data === "string" ? data : problem
                  )
        );
    };
    return (
        <div className="bg-white p-4 rounded border">
            <AlertModal
                isOpen={state.isOpen}
                onClose={() => {
                    dispatch(useModalReducer.close);
                    navigate("/");
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

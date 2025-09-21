import type { FC } from "react";
import { useNavigate } from "react-router";

import { categoriesApi } from "@Api";
import { AlertModal } from "@Components";
import { AddCategoryLogic } from "@Forms";
import { useModalReducer } from "@Hooks";
import type { FormCategoryValues } from "@Types";

const NewCategory: FC = () => {
    const [state, dispatch] = useModalReducer();
    const navigate = useNavigate();

    const handleSubmit = async (values: FormCategoryValues) => {
        const { ok, data, problem } = await categoriesApi.postCategory(values);
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
                        ? "New Category added Successfully"
                        : "There is an Error"
                }
                description={
                    state.isSuccess !== false
                        ? "New Category is now available"
                        : state.error
                }
            />
            <h1 className="pb-4">New Category</h1>
            <AddCategoryLogic handleSubmit={handleSubmit} />
        </div>
    );
};

export default NewCategory;

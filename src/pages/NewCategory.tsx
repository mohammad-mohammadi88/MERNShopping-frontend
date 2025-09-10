import { useReducer, type FC } from "react";
import { useNavigate } from "react-router";

import { categoriesApi } from "@/api";
import { AlertModal } from "@Components";
import { AddCategoryLogic } from "@Forms";
import type { FormCategoryValues } from "@Types";

type AlertModalState =
    | {
          isSuccess: false;
          isOpen: boolean;
          error: string;
      }
    | { isOpen: boolean; isSuccess?: true };

type ActionType = "success" | "close" | "error";
interface Action {
    type: ActionType;
    payload?: string;
}

const initialState: AlertModalState = {
    isOpen: false,
    isSuccess: undefined,
};
const success: Action = { type: "success" };
const close: Action = { type: "close" };
const error: (payload: string) => Action = (payload) => ({
    type: "error",
    payload,
});

const reducer = (state: AlertModalState, action: Action): AlertModalState => {
    switch (action?.type) {
        case "close":
            return initialState;
        case "success":
            return {
                isOpen: true,
                isSuccess: true,
            };
        case "error":
            return {
                isOpen: true,
                isSuccess: false,
                error: action.payload || "",
            };
        default:
            return state;
    }
};
const NewCategory: FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    const handleSubmit = async (values: FormCategoryValues) => {
        const { ok, data, problem } = await categoriesApi.postCategory(values);
        dispatch(
            ok ? success : error(typeof data === "string" ? data : problem)
        );
    };
    return (
        <div className="bg-white p-4 rounded border">
            <AlertModal
                isOpen={state.isOpen}
                onClose={() => {
                    dispatch(close);
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
            <h1 className="text-xl font-bold pb-4">New Category</h1>
            <AddCategoryLogic handleSubmit={handleSubmit} />
        </div>
    );
};

export default NewCategory;

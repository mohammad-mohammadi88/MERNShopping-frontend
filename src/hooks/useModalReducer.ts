import { useEffect, useReducer } from "react";

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

const useModalReducer = () => {
    const state = useReducer(reducer, initialState);
    useEffect(() => {
        state[1](useModalReducer.close);
        return () => state[1](useModalReducer.close);
    }, []);

    return state;
};

useModalReducer.success = success;
useModalReducer.error = error;
useModalReducer.close = close;

export default useModalReducer;

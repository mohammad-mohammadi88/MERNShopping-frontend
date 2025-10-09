import type { ApiResponse } from "apisauce";
import type { FC } from "react";
import { useNavigate } from "react-router";

import { queryClient } from "@/main";
import { AlertModal } from "@Components";
import { useModalReducer } from "@Hooks";

interface NewDatumLogicProps<T> {
    handleSubmit: (values: T) => void;
}

interface Props<T> {
    NewDatumLogic: FC<NewDatumLogicProps<T>>;
    datumName: string;
    apiCall: (values: T) => Promise<ApiResponse<any, string>>;
    queryName: string;
}
const NewDatumPage = <T,>({
    NewDatumLogic,
    apiCall,
    datumName,
    queryName,
}: Props<T>) => {
    const [state, dispatch] = useModalReducer();
    const navigate = useNavigate();

    const handleSubmit = async (values: T) => {
        const { ok, data, problem } = await apiCall(values);
        if (ok) queryClient.invalidateQueries({ queryKey: [queryName] });
        dispatch(
            ok
                ? useModalReducer.success
                : useModalReducer.error(
                      typeof data === "string" ? data : problem
                  )
        );
    };
    return (
        <div className="page-layout border">
            <AlertModal
                isOpen={state.isOpen}
                onClose={() => {
                    dispatch(useModalReducer.close);
                    navigate("/");
                }}
                role={state.isSuccess ? "success" : "error"}
                title={
                    state.isSuccess
                        ? `New ${datumName}  added Successfully`
                        : "There is an Error"
                }
                description={
                    state.isSuccess !== false
                        ? `New ${datumName} is now available`
                        : state.error
                }
            />
            <h1 className="pb-4">New {datumName}</h1>
            <NewDatumLogic handleSubmit={handleSubmit} />
        </div>
    );
};

export default NewDatumPage;

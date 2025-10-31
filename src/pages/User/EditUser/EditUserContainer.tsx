import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import { queryClient } from "@/main";
import { usersApi } from "@Api";
import { AlertModal, Loading } from "@Components";
import { useModalReducer } from "@Hooks";
import type { UpdateUserData, User } from "@Types";
import type { FC } from "react";

export interface EditFormProps<T> {
    handleSubmit: (values: T) => Promise<void>;
    data: User;
    id: string;
}
export type FormatValues<T> = (values: T) => UpdateUserData;
interface Props<T> {
    formatValues: FormatValues<T>;
    EditForm: FC<EditFormProps<T>>;
}

const EditUserContainer = <T,>({ EditForm, formatValues }: Props<T>) => {
    const userId = useParams().id!;
    const [state, dispatch] = useModalReducer();
    const { data, isLoading } = useQuery({
        queryKey: ["customer", userId],
        queryFn: () => usersApi.getUserInfo(userId),
        staleTime: 3_600_000,
    });
    const navigate = useNavigate();

    const handleSubmit = async (values: T) => {
        const { ok, data, problem } = await usersApi.updateUser(
            userId,
            formatValues(values)
        );

        if (ok) {
            queryClient.invalidateQueries({ queryKey: ["customers"] });
            queryClient.invalidateQueries({ queryKey: ["customer", userId] });
        }
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
    const error = !data?.ok ? data?.data || data?.problem : undefined;
    return (
        <>
            <AlertModal
                isOpen={state.isOpen}
                onClose={() => {
                    dispatch(useModalReducer.close);
                    if (state.isSuccess) navigate("/customers");
                }}
                role={state.isSuccess ? "success" : "error"}
                title={
                    state.isSuccess
                        ? "User edited Successfully"
                        : "There is an Error"
                }
                description={
                    state.isSuccess !== false
                        ? "Edited User is now available"
                        : state.error
                }
            />
            <h1 className="mb-4 border-b border-b-gray-400">Edit User</h1>
            <Loading loading={isLoading} />
            {!isLoading && data?.ok && data.data && (
                <EditForm
                    id={userId}
                    data={data.data}
                    handleSubmit={handleSubmit}
                />
            )}
            {!isLoading && error && (
                <h2 className="w-full h-12 text-red-500 flex justify-center items-center">
                    {error}
                </h2>
            )}
        </>
    );
};

export default EditUserContainer;

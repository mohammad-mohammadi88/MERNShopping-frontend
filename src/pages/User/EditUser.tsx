import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import { queryClient } from "@/main";
import { usersApi } from "@Api";
import { AlertModal, Loading } from "@Components";
import { EditUserBasicInfoLogic } from "@Forms";
import { useModalReducer } from "@Hooks";
import type { UpdateUserBasics, UserAddress } from "@Types";

const EditUser = () => {
    const id = useParams().id!;
    const [state, dispatch] = useModalReducer();
    const { data, isLoading } = useQuery({
        queryKey: ["customer", id],
        queryFn: () => usersApi.getUserInfo(id),
        staleTime: 3_600_000,
    });
    const navigate = useNavigate();

    const handleSubmit = async (values: UpdateUserBasics) => {
        values.addresses = values.addresses.map(({ zipCode, ...address }) => {
            const data: UserAddress = { ...address };
            if (zipCode) data.zipCode = zipCode;
            return data;
        });
        const { ok, data, problem } = await usersApi.updateUser(id, values);

        if (ok) {
            queryClient.invalidateQueries({ queryKey: ["customers"] });
            queryClient.invalidateQueries({ queryKey: ["customer", id] });
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
                    if (state.isSuccess) navigate("/");
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
            <h1 className="pb-4">Edit User</h1>
            <Loading loading={isLoading} />
            {!isLoading && data?.ok && data.data && (
                <EditUserBasicInfoLogic
                    initialValues={{ ...data.data }}
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

export default EditUser;

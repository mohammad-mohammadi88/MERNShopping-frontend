import type { LoginData, UpdateUserData, User } from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { addParam } = endpointGenerator("users");

const getSelfInfo = () => apiClient.get<User, string>(addParam("self"));

const logout = () => apiClient.delete<string>(addParam("logout"));

const login = (data: LoginData) =>
    apiClient.post<string, string | { errors: string[] }>(
        addParam("login"),
        data
    );

const deleteUser = (id: string) => apiClient.delete<string>(addParam(id));

const updateUser = (id: string, data: UpdateUserData) =>
    apiClient.patch<string, string | { errors: string[] }>(addParam(id), data);

export default {
    getSelfInfo,
    logout,
    deleteUser,
    updateUser,
    login,
};

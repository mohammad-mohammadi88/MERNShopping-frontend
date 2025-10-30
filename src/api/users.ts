import type {
    ApiListQueries,
    GetDataWithPagination,
    LoginData,
    UpdateUserData,
    User,
} from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint, addParam } = endpointGenerator("users");

const getAllCustomers = (params: ApiListQueries) =>
    apiClient.get<GetDataWithPagination<User>, string>(endpoint, params);

const getSelfInfo = () => apiClient.get<User, string>(addParam("self"));

const getUserInfo = (id: string) => apiClient.get<User, string>(addParam(id));

const login = (data: LoginData) =>
    apiClient.post<string>(addParam("login"), data, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    });

const deleteUser = (id: string) => apiClient.delete<string>(addParam(id));

const updateUser = (id: string, data: UpdateUserData) =>
    apiClient.patch<string>(addParam(id), data);

export default {
    getAllCustomers,
    getSelfInfo,
    getUserInfo,
    deleteUser,
    updateUser,
    login,
};

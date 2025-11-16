import { LoginData, RegisterData } from "@Types";
import apiClient from "./client";

const addParam = (param: string) => "users/" + param;

const logout = () => apiClient.delete<string>(addParam("logout"));

const login = (data: LoginData) =>
    apiClient.post<string, string | { errors: string[] }>(
        addParam("login"),
        data
    );

const register = (data: RegisterData) =>
    apiClient.post<string, string | { errors: string[] }>(
        addParam("login"),
        data
    );

export default {
    register,
    login,
    logout,
};

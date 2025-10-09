import type { GetDataWithPagination, PaginationType, User } from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint } = endpointGenerator("users");

const getAllUsers = (pagination?: PaginationType) =>
    apiClient.get<GetDataWithPagination<User>, string>(endpoint, pagination);

export default {
    getAllUsers,
};

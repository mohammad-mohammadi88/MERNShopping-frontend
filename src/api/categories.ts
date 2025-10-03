import type {
    Category,
    FormCategoryValues,
    GetDataWithPagination,
    PaginationType,
} from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint, addParam } = endpointGenerator("categories");

const postCategory = (values: FormCategoryValues) =>
    apiClient.post<Category, string>(endpoint, values);

const getCategories = (pagination?: PaginationType) =>
    apiClient.get<GetDataWithPagination<Category>, string>(
        endpoint,
        pagination
    );

const getCategoryById = (id: string) =>
    apiClient.get<Category, string>(addParam(id));

export default {
    postCategory,
    getCategories,
    getCategoryById,
};

import type {
    ApiListQueries,
    Category,
    FormCategoryValues,
    GetDataWithPagination,
} from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint, addParam } = endpointGenerator("categories");

const postCategory = (values: FormCategoryValues) =>
    apiClient.post<Category, string>(endpoint, values);

const getCategories = (params?: ApiListQueries) =>
    apiClient.get<GetDataWithPagination<Category>, string>(endpoint, params);

const getCategoryById = (id: string) =>
    apiClient.get<Category, string>(addParam(id));

export default {
    postCategory,
    getCategories,
    getCategoryById,
};

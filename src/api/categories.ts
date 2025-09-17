import type { Category, FormCategoryValues } from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint, addParam } = endpointGenerator("categories");

const postCategory = (values: FormCategoryValues) =>
    apiClient.post<Category, string>(endpoint, values);

const getCategories = () => apiClient.get<Category[], string>(endpoint);

const getCategoryById = (id: string) =>
    apiClient.get<Category, string>(addParam(id));

export default {
    postCategory,
    getCategories,
    getCategoryById,
};

import type { Category, FormCategoryValues } from "@Types";
import apiClient from "./client";

const endpoint = "categories";

const postCategory = (values: FormCategoryValues) =>
    apiClient.post<Category, string>(endpoint, values);

const getCategories = () => apiClient.get<Category[], string>(endpoint);

const getCategoryById = (id: string) =>
    apiClient.get<Category, string>(`${endpoint}/${id}`);

export default {
    postCategory,
    getCategories,
    getCategoryById,
};

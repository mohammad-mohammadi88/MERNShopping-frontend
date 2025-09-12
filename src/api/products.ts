import type {
    FormProductValue,
    Pagination,
    PaginationProducts,
    Product,
} from "@Types";
import apiClient from "./client";

const endpoint = "products";

const addProduct = (data: FormProductValue) =>
    apiClient.post<Product, string>(endpoint, data);

const getProductsWithPagination = (pagination?: Pagination) =>
    apiClient.get<PaginationProducts, string>(endpoint, pagination);

const getProductById = (id: string) =>
    apiClient.get<Product, string>(`${endpoint}/${id}`);

export default {
    addProduct,
    getProductById,
    getProductsWithPagination,
};

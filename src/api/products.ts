import type { Dispatch, SetStateAction } from "react";

import type { Pagination, PaginationProducts, Product } from "@Types";
import apiClient from "./client";

const endpoint = "products/";

const addProduct = (
    data: FormData,
    setProgress: Dispatch<SetStateAction<number>>
) =>
    apiClient.post<Product, string | { errors: string[] }>(endpoint, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress: ({ progress, total, loaded }) =>
            setProgress(
                Math.min(progress || (total ? loaded / total : 0.5), 0.95)
            ),
    });

const editProduct = (
    id: string,
    data: FormData,
    setProgress: Dispatch<SetStateAction<number>>
) =>
    apiClient.put<Product, string | { errors: string[] }>(endpoint + id, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress: ({ progress, total, loaded }) =>
            setProgress(
                Math.min(progress || (total ? loaded / total : 0.5), 0.95)
            ),
    });

const getProductsWithPagination = (pagination?: Pagination) =>
    apiClient.get<PaginationProducts, string>(endpoint, pagination);

const getProductById = (id: string) =>
    apiClient.get<Product, string>(endpoint + id);

export default {
    addProduct,
    editProduct,
    getProductById,
    getProductsWithPagination,
};

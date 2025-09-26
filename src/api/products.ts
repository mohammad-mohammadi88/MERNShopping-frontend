import type { Dispatch, SetStateAction } from "react";

import type { GetDataWithPagination, PaginationType, Product } from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint, addParam } = endpointGenerator("products");

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
    apiClient.put<Product, string | { errors: string[] }>(addParam(id), data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress: ({ progress, total, loaded }) =>
            setProgress(
                Math.min(progress || (total ? loaded / total : 0.5), 0.95)
            ),
    });

const getProductsWithPagination = (pagination?: PaginationType) =>
    apiClient.get<GetDataWithPagination<Product>, string>(endpoint, pagination);

const getProductById = (id: string) =>
    apiClient.get<Product, string>(addParam(id));

const deleteProductById = (id: string) =>
    apiClient.delete<string>(addParam(id));

export default {
    addProduct,
    deleteProductById,
    editProduct,
    getProductById,
    getProductsWithPagination,
};

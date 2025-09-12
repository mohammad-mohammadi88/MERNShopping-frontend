import type { productStatus } from "@/constants/products";
import type { FormAttribute, ID } from "./globals";

export interface FormProductValue {
    title: string;
    thumbnail: string;
    price: number;
    productCategory: string;
    attrs: FormAttribute[];
    gallery: string[];
}

export interface Product extends ID, FormProductValue {
    salePrice?: number;
    gallery: string[];
    status: (typeof productStatus)[keyof typeof productStatus];
}
export interface PaginationProducts {
    pages: number;
    products: Product[];
    perPage: number;
    currentPage: number;
}

import type { productStatus } from "@/constants/products";
import type { FormAttribute, ID } from "./globals";

export interface FormProductValue {
    title: string;
    thumbnail: [File?];
    price: number;
    productCategory: string;
    attrs: FormAttribute[];
    gallery: File[];
}

export interface Product
    extends ID,
        Omit<FormProductValue, "gallery" | "thumbnail"> {
    salePrice?: number;
    thumbnail: string;
    gallery: string[];
    status: (typeof productStatus)[keyof typeof productStatus];
}
export interface PaginationProducts {
    pages: number;
    products: Product[];
    perPage: number;
    currentPage: number;
}

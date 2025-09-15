import type { productStatus } from "@/constants/products";
import type { FormAttribute, ID } from "./globals";

export interface AddProductValue {
    title: string;
    thumbnail: [File?];
    price: number;
    productCategory: string;
    attrs: FormAttribute[];
    gallery: File[];
}
export interface EditProductValue extends AddProductValue {
    salePrice?: number;
    status: (typeof productStatus)[keyof typeof productStatus];
}
export interface Product
    extends ID,
        Omit<EditProductValue, "gallery" | "thumbnail"> {
    thumbnail: string;
    gallery: string[];
}
export interface PaginationProducts {
    pages: number;
    products: Product[];
    perPage: number;
    currentPage: number;
}

import type { productStatus } from "@/constants/products";
import type { ID } from "./globals";

export interface FormProductAttribute {
    title: string;
    description: string;
}
export interface FormProductColor {
    title: string;
    color: `#${string}`;
    priceEffect: number;
}
export type ProductColor = FormProductColor & ID;
export type ProductAttribute = FormProductAttribute & ID;
export interface AddProductValue {
    title: string;
    thumbnail: [File?];
    price: number;
    quantity: number;
    colors: FormProductColor[];
    productCategory: string;
    attrs: FormProductAttribute[];
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

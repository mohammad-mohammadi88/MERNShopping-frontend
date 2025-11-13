import type { productStatus } from "@Constants";
import type { Category, Comment, ID } from "./index";

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
        Omit<EditProductValue, "gallery" | "thumbnail" | "productCategory"> {
    attrs: ProductAttribute[];
    salePrice: number;
    productCategory: Category;
    colors: ProductColor[];
    thumbnail: string;
    gallery: string[];
}

export interface FullProduct extends Product {
    comments: Comment[];
}

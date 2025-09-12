import * as Yup from "yup";

import { attrSchema, string } from "./globals";

const productBaseSchema = {
    title: string.label("Title"),
    thumbnail: string.label("Thumbnail"),
    price: Yup.number().required().label("Price"),
    productCategory: string.label("Product Category"),
    attrs: Yup.array().of(attrSchema).label("Product Attributes"),
    gallery: Yup.array().of(string).label("Gallery"),
};
export const postProductSchema = Yup.object().shape(productBaseSchema);

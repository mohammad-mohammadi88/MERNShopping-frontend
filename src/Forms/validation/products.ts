import { array, mixed, number, object } from "yup";

import constants from "@/constants";
import { productStatus } from "@/constants/products";
import { attrSchema, String } from "./globals";

const fileSchema = mixed().required();
const productBaseSchema = {
    title: String.label("Title"),
    thumbnail: array()
        .of(fileSchema.label("Thumbnail"))
        .min(1, "Thumbnail is required"),
    price: number()
        .typeError("price must be a number")
        .required()
        .positive()
        .label("Price"),
    quantity: number()
        .typeError("quantity must be a number")
        .integer("quantity must be an integer")
        .min(0, "quantity cannot be negative")
        .optional(),
    productCategory: String.label("Product Category"),
    attrs: array().of(attrSchema).label("Product Attributes"),
    gallery: array()
        .of(fileSchema)
        .label("Gallery")
        .max(
            constants.maxGalleryImageCount,
            `gallery can't contain more than ${constants.maxGalleryImageCount} images`
        ),
};
export const postProductSchema = object().shape(productBaseSchema);
export const editProductSchema = object().shape({
    ...productBaseSchema,
    salePrice: number()
        .typeError("Sale Price must be a number")
        .positive()
        .label("Sale Price"),
    status: number()
        .required()
        .test("isValidStatus", "${path} is not valid", (val) =>
            // @ts-ignore
            Object.values(productStatus).includes(val)
        )
        .label("Product status"),
});

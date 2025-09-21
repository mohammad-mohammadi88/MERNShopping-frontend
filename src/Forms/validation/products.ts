import { array, mixed, number, object } from "yup";

import constants, { productStatus } from "@Constants";
import { String } from "./globals";

const productAttrSchema = object().shape({
    title: String.label("Attribute title"),
    description: String.label("Attribute description"),
});
const productColorSchema = object().shape({
    title: String.label("Color name"),
    color: String.label("Color"),
    priceEffect: number()
        .typeError("Price Effect must be a number")
        .optional()
        .min(0, "Price Effect cannot be negative")
        .label("Price Effect"),
});

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
    attrs: array().of(productAttrSchema).label("Product Attributes"),
    productCategory: String.label("Product Category"),
    colors: array().of(productColorSchema).label("Product Colors"),
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

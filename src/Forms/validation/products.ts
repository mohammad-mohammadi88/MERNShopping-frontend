import * as Yup from "yup";

import constants from "@/constants";
import { productStatus } from "@/constants/products";
import { attrSchema, string } from "./globals";

const fileSchema = Yup.mixed().required();
const productBaseSchema = {
    title: string.label("Title"),
    thumbnail: Yup.array()
        .of(fileSchema.label("Thumbnail"))
        .min(1, "Thumbnail is required"),
    price: Yup.number().required().positive().label("Price"),
    productCategory: string.label("Product Category"),
    attrs: Yup.array().of(attrSchema).label("Product Attributes"),
    gallery: Yup.array()
        .of(fileSchema)
        .label("Gallery")
        .max(
            constants.maxGalleryImageCount,
            `gallery can't contain more than ${constants.maxGalleryImageCount} images`
        ),
};
export const postProductSchema = Yup.object().shape(productBaseSchema);
export const editProductSchema = Yup.object().shape({
    ...productBaseSchema,
    salePrice: Yup.number().optional().positive().label("Sale Price"),
    status: Yup.number()
        .required()
        .test("isValidStatus", "${path} status is not valid", (val) =>
            // @ts-ignore
            Object.values(productStatus).includes(val)
        ),
});

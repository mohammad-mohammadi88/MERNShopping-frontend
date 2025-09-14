import * as Yup from "yup";

import constants from "@/constants";
import { attrSchema, string } from "./globals";

const fileSchema = Yup.mixed().required();
const productBaseSchema = {
    title: string.label("Title"),
    thumbnail: Yup.array()
        .of(fileSchema.label("Thumbnail"))
        .min(1, "Thumbnail is required"),
    price: Yup.number().required().min(1).label("Price"),
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

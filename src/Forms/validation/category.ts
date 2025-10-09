import { array, object, type InferType } from "yup";

import { String } from "./globals";

const attrGroupSchema = object().shape({
    title: String.label("Attribute group title"),
    attrs: array()
        .required()
        .of(String.label("Attribute name"))
        .label("Category attributes"),
});
export type FormCategoryGroup = InferType<typeof attrGroupSchema>;

export const postValidationSchema = object().shape({
    title: String.label("Category title"),
    attrGroups: array()
        .required()
        .of(attrGroupSchema)
        .label("Attribute group attributes"),
});
export type FormCategoryValues = InferType<typeof postValidationSchema>;

import { array, object } from "yup";

import { attrSchema, String } from "./globals";

const attrGroupSchema = object().shape({
    title: String.label("Attribute group title"),
    attrs: array().of(attrSchema).label("Category attributes"),
});

export const postValidationSchema = object().shape({
    title: String.label("Category title"),
    attrGroups: array().of(attrGroupSchema).label("Attribute group attributes"),
});

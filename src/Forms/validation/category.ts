import * as Yup from "yup";

import { attrSchema, string } from "./globals";

const attrGroupSchema = Yup.object().shape({
    title: string.label("Attribute group title"),
    attrs: Yup.array().of(attrSchema).label("Category attributes"),
});

export const postValidationSchema = Yup.object().shape({
    title: string.label("Category title"),
    attrGroups: Yup.array()
        .of(attrGroupSchema)
        .label("Attribute group attributes"),
});

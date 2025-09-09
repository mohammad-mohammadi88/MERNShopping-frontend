import * as Yup from "yup";

const booleanSchema = Yup.boolean();
const string = Yup.string().required();

const attrSchema = Yup.object().shape({
    title: string.label("Attribute title"),
    description: string.label("Attribute description"),
    filterable: booleanSchema,
    isMultiple: booleanSchema,
});

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

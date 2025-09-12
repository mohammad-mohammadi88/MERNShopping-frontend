import * as Yup from "yup";

const booleanSchema = Yup.boolean();
export const string = Yup.string().required();

export const attrSchema = Yup.object().shape({
    title: string.label("Attribute title"),
    description: string.label("Attribute description"),
    filterable: booleanSchema,
    hasPrice: booleanSchema,
});

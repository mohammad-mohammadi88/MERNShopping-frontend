import { boolean, object, string } from "yup";

const booleanSchema = boolean();
export const String = string().required();

export const attrSchema = object().shape({
    title: String.label("Attribute title"),
    description: String.label("Attribute description"),
    filterable: booleanSchema,
    hasPrice: booleanSchema,
});

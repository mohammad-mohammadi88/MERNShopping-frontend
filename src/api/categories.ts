import type { FormCategoryValues } from "@Types";
import apiClient from "./client";

const endpoint = "categories";

const postCategory = (values: FormCategoryValues) =>
    apiClient.post(endpoint, values);

export default {
    postCategory,
};

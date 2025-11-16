import type { Category, GetDataWithPagination } from "@Types";
import serverFetch from "./server";

const endpoint = "categories";

const getAllCategories = () =>
    serverFetch<GetDataWithPagination<Category>>(endpoint);

export default {
    getAllCategories,
};

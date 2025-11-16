import type { Category, GetDataWithPagination } from "@Types";
import serverFetch from "./server";

const endpoint = (productId: string) => `comments/product/${productId}`;

const getProductComments = (productId: string) =>
    serverFetch<GetDataWithPagination<Category>>(endpoint(productId));

export default {
    getProductComments,
};

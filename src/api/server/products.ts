import type { ApiListQueries, GetDataWithPagination, Product } from "@Types";
import endpointGenerator from "../endpoint";
import serverFetch from "./server";

const { endpoint, addQueries, addParam } = endpointGenerator("products");

const getProducts = (params?: ApiListQueries) =>
    serverFetch<GetDataWithPagination<Product>>(
        !params ? endpoint : addQueries(params)
    );

const getSingleProduct = (productId: string) =>
    serverFetch<Product>(addParam(productId));

export default {
    getProducts,
    getSingleProduct,
};

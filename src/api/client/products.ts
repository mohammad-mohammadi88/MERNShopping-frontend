import { ApiListQueries, GetDataWithPagination, Product } from "@Types";
import { addQueries } from "../endpoint";
import apiClient from "./client";

const addPagination = addQueries("products");
const getProducts = (params: ApiListQueries) =>
    apiClient.get<GetDataWithPagination<Product>, string>(
        addPagination(params)
    );

export default {
    getProducts,
};

import type { ApiListQueries, GetDataWithPagination, Order } from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { addParam, endpoint } = endpointGenerator("orders");

const getAllOrders = (status: string | null, params?: ApiListQueries) =>
    apiClient.get<GetDataWithPagination<Order>, string>(
        endpoint,
        status ? { status, ...params } : { ...params }
    );

const getOrdersCount = () => apiClient.get<number, string>(addParam("count"));

const editOrderStatus = (id: string, status: number | string) =>
    apiClient.patch<Order, string>(addParam(id), { status: Number(status) });

export default {
    getAllOrders,
    getOrdersCount,
    editOrderStatus,
};

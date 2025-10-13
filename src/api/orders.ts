import type {
    ApiListQueries,
    FullOrder,
    GetDataWithPagination,
    Order,
} from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { addParam, endpoint } = endpointGenerator("orders");

const getAllOrders = (status: string | null, params?: ApiListQueries) =>
    apiClient.get<GetDataWithPagination<Order>, string>(
        endpoint,
        status ? { status, ...params } : { ...params }
    );

const getOrdersCount = () => apiClient.get<number, string>(addParam("count"));

const getSingleOrder = (id: string) =>
    apiClient.get<FullOrder, string>(addParam(id));

const editOrderStatus = (id: string, status: number | string) =>
    apiClient.patch<Order, string>(addParam(id), { status: Number(status) });

export default {
    getAllOrders,
    getOrdersCount,
    getSingleOrder,
    editOrderStatus,
};

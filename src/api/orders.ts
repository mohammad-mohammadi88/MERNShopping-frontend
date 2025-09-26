import type { GetDataWithPagination, Order, PaginationType } from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { addParam, endpoint } = endpointGenerator("orders");

const getAllOrdersWithPagination = (
    status: string | null,
    pagination?: PaginationType
) =>
    apiClient.get<GetDataWithPagination<Order>, string>(
        endpoint,
        status ? { status, ...pagination } : { ...pagination }
    );

const getOrdersCount = () => apiClient.get<number, string>(addParam("count"));

const editOrderStatus = (id: string, status: number) =>
    apiClient.patch<Order, string>(addParam(id), { status });

export default {
    getAllOrdersWithPagination,
    getOrdersCount,
    editOrderStatus,
};

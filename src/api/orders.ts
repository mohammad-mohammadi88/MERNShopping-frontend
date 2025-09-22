import type { Order } from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { addParam, endpoint } = endpointGenerator("orders");

const getAllOrders = (status: number | null) =>
    apiClient.get<Order[], string>(endpoint, status ? { status } : {});

const getOrdersCount = () => apiClient.get<number, string>(addParam("count"));

const editOrderStatus = (id: string, status: number) =>
    apiClient.patch<Order, string>(addParam(id), { status });

export default {
    getAllOrders,
    getOrdersCount,
    editOrderStatus,
};

import type { Order } from "@Types";
import serverFetch from "./server";

const endpoint = (id: string) => "orders/" + id;

const getSingleOrder = (id: string) => serverFetch<Order>(endpoint(id));

const getSelfOrders = (id: string) => serverFetch<Order[]>(endpoint("self"));

export default {
    getSingleOrder,
    getSelfOrders,
};

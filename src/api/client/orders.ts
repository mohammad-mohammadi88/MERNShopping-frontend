"use client";

import { Comment, UserAddress } from "@Types";
import apiClient from "./client";

const endpoint = "orders";
interface OrderProduct {
    product: string;
    color?:
        | {
              title: string;
              color: string;
              priceEffect: any;
          }
        | undefined;
    count?: number | undefined;
}
interface NewOrder {
    products: OrderProduct[];
    couponCode?: string | undefined;
    deliveryAddress?: UserAddress;
}

const addOrder = (data: NewOrder) =>
    apiClient.post<Comment, string>(endpoint, data);

export default {
    addOrder,
};

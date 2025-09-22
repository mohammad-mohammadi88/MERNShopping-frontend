import type { OrdersStatusValues } from "@/constants/orders";
import type { Product } from "./products";
import type { User, UserAddress } from "./users";

export type OrderProduct = {
    productID: Product;
    color?:
        | {
              title: string;
              color: string;
              priceEffect: any;
          }
        | undefined;
    count?: number | undefined;
};

export type Order = {
    products: OrderProduct[];
    userId: User;
    couponCode?: string | undefined;
    deliveryAddress?: UserAddress | undefined;
    status: OrdersStatusValues;
    finalPrice: number;
    totalPrice: number;
};

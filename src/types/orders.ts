import type { OrdersStatusValues } from "@Constants";
import type { Product } from "./products";
import type { User, UserAddress } from "./users";

export type OrderProduct = {
    product: Product;
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
    user: User;
    couponCode?: string | undefined;
    deliveryAddress: UserAddress;
    status: OrdersStatusValues;
    finalPrice: number;
    totalPrice: number;
};

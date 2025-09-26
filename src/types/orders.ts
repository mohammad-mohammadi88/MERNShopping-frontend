import type { OrdersStatusValues } from "@Constants";
import type { ID } from "./globals";
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

export interface Order extends ID {
    products: OrderProduct[];
    user: User;
    couponCode: string | null;
    deliveryAddress: UserAddress;
    status: OrdersStatusValues;
    finalPrice: number;
    totalPrice: number;
}

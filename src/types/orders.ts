import type { OrdersStatusValues } from "@Constants";
import type { ID, Product, User, UserAddress } from ".";

export interface OrderProduct extends ID {
    product: Product;
    color?:
        | {
              title: string;
              color: string;
              priceEffect: any;
          }
        | undefined;
    count: number;
}

export interface Order extends ID {
    products: OrderProduct[];
    user: User;
    couponCode: string | null;
    deliveryAddress: UserAddress;
    status: OrdersStatusValues;
    finalPrice: number;
    totalPrice: number;
}

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

export interface CartOrderProduct
    extends Pick<OrderProduct, "color" | "count"> {
    product: string;
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
export interface CartOrder {
    products: CartOrderProduct[];
    couponCode: string | null;
    deliveryAddress?: UserAddress;
}

export interface FullOrder extends Omit<Order, "user"> {
    user: string;
}

export const ordersStatus = {
    INIT: 0,
    PAID: 1,
    PROCESSING: 2,
    READY: 3,
    SHIPPING: 4,
    RECEIVED: 5,
    CANCELED: 6,
} as const;
export type OrdersStatus = typeof ordersStatus;
export type OrdersStatusKeys = keyof OrdersStatus;
export type OrdersStatusValues = OrdersStatus[OrdersStatusKeys];
export const ordersStatusColors: Record<OrdersStatusKeys, `#${string}`> = {
    CANCELED: "#f00",
    INIT: "#f90",
    PAID: "#2eba43",
    PROCESSING: "#8b2eba",
    READY: "#00c51e",
    SHIPPING: "#8b2eba",
    RECEIVED: "#008414",
};

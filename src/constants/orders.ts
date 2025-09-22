export const ordersStatus = {
    INIT: 0,
    PAID: 1,
    PROCESSING: 2,
    READY: 3,
    SHIPPING: 4,
    RECEIVED: 5,
    CANCELED: 6,
} as const;

export type OrdersStatusKeys = keyof typeof ordersStatus;
export type OrdersStatusValues = (typeof ordersStatus)[OrdersStatusKeys];

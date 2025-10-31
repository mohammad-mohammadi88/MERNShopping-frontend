export const shipmentStatus = {
    PENDING: 0,
    SHIPPING: 1,
    DELIVERED: 2,
    ABSENT: 3,
} as const;
export type ShipmentStatus = typeof shipmentStatus;
export type ShipmentStatusKey = keyof ShipmentStatus;
export type ShipmentStatusValue = ShipmentStatus[ShipmentStatusKey];
export const shipmentsStatusColors: Record<ShipmentStatusKey, `#${string}`> = {
    ABSENT: "#f00",
    PENDING: "#f90",
    SHIPPING: "#8b2eba",
    DELIVERED: "#008414",
};

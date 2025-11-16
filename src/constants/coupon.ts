export const couponsStatus = {
    ACTIVE: 0,
    INACTIVE: 1,
} as const;
export type CouponsStatus = typeof couponsStatus;
export type CouponsStatusKeys = keyof CouponsStatus;
export type CouponsStatusValues = CouponsStatus[CouponsStatusKeys];
export const couponsStatusColors: Record<CouponsStatusKeys, `#${string}`> = {
    INACTIVE: "#f00",
    ACTIVE: "#00c51e",
};

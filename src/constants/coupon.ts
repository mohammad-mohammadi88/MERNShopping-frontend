export const couponStatus = {
    ACTIVE: 0,
    INACTIVE: 1,
} as const;
export type CouponStatus = typeof couponStatus;
export type CouponStatusKey = keyof CouponStatus;
export type CouponStatusValue = CouponStatus[CouponStatusKey];

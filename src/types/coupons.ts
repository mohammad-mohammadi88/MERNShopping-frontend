import type { CouponStatusValues } from "@Constants";
import type { ID, TimeStamp, User } from ".";

export interface Constraints {
    user: User;
}
export interface Discount {
    role: "number" | "percent";
    amount: number;
}
export interface Coupon extends ID, TimeStamp {
    code: string;
    discount: Discount;
    limit: number;
    used: number;
    expiresAt: Date;
    constraints: Constraints;
    status: CouponStatusValues;
}

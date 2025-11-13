import type { CouponsStatusValues } from "@Constants";
import type { FormCouponValues, ID, TimeStamp, User } from ".";
export type * from "@/Forms/validation";

export interface Coupon extends ID, TimeStamp, FormCouponValues {
    code: string;
    used: number;
    status: CouponsStatusValues;
}

export interface FullCoupon extends Omit<Coupon, "user"> {
    user: User;
}

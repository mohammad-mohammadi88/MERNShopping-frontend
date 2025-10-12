import type { CouponsStatusValues } from "@Constants";
import type { FormCouponValues, ID, TimeStamp, User } from ".";
export type * from "@/Forms/validation";

export interface Coupon extends ID, TimeStamp, Omit<FormCouponValues, "user"> {
    code: string;
    used: number;
    status: CouponsStatusValues;
    user: User;
}

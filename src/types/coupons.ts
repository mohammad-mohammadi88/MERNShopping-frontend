import type { CouponsStatusValues } from "@Constants";
import type { FormCouponValues, ID, TimeStamp, User } from ".";
export type * from "@/Forms/validation";

export interface Constraints {
    user: User;
}
export interface Coupon
    extends ID,
        TimeStamp,
        Omit<FormCouponValues, "constraints"> {
    code: string;
    used: number;
    status: CouponsStatusValues;
    constraints: Constraints;
}

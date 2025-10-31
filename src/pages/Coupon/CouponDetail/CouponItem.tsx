import type { FC } from "react";

import { ChangeStatus, UserDetails } from "@/pages/Shared";
import { couponsApi } from "@Api";
import { couponsStatus, type CouponsStatusValues } from "@Constants";
import type { Coupon } from "@Types";
import CouponBasics from "./CouponBasics";

const CouponItem: FC<Coupon> = ({ _id, status, user, ...props }) => (
    <>
        <CouponBasics {...props} />

        <ChangeStatus
            apiCall={(newStatus) =>
                couponsApi.updateCoupon(
                    props.code,
                    newStatus as CouponsStatusValues
                )
            }
            datumName="coupon"
            queryKey={["coupons", "page"]}
            collectionStatus={couponsStatus}
            currentStatus={status}
        />

        <UserDetails id={user} />
    </>
);

export default CouponItem;

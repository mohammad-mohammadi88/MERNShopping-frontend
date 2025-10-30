import type { FC } from "react";

import { RowItem, Status } from "@Components";
import {
    couponsStatus,
    couponsStatusColors,
    type CouponsStatus,
    type CouponsStatusKeys,
} from "@Constants";
import type { Coupon } from "@Types";

const statusName = (status: number) =>
    Object.keys(couponsStatus).find(
        (c) => couponsStatus[c as CouponsStatusKeys] === status
    ) as CouponsStatusKeys;
const CouponItem: FC<Coupon> = ({
    code,
    discount: { amount, role },
    status,
    limit,
    used,
    user,
}) => (
    <tr className="data-item">
        <RowItem children={code} />
        <RowItem children={`${amount}${role === "number" ? "$" : "%"}`} />
        <RowItem hidden MD>
            <Status<CouponsStatus>
                currentStatus={statusName(status)}
                statusColors={couponsStatusColors}
            />
        </RowItem>
        <RowItem hidden LG children={`${limit} / ${used}`} />
        <RowItem hidden XL children={`${user.firstName} ${user.lastName}`} />
    </tr>
);

export default CouponItem;

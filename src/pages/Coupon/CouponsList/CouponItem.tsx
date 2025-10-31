import type { FC } from "react";
import { useNavigate } from "react-router";

import { RowItem, Status } from "@Components";
import {
    couponsStatus,
    couponsStatusColors,
    type CouponsStatus,
} from "@Constants";
import type { FullCoupon } from "@Types";
import { getStatusName } from "@Utils";

const CouponItem: FC<FullCoupon> = ({
    code,
    discount: { amount, role },
    status,
    limit,
    used,
    user,
}) => {
    const navigate = useNavigate();
    return (
        <tr className="data-item" onClick={() => navigate(`/coupon/` + code)}>
            <RowItem children={code} />
            <RowItem children={`${amount}${role === "number" ? "$" : "%"}`} />
            <RowItem hidden MD>
                <Status<CouponsStatus>
                    currentStatus={getStatusName(couponsStatus, status)}
                    statusColors={couponsStatusColors}
                />
            </RowItem>
            <RowItem hidden LG children={`${limit} / ${used}`} />
            <RowItem
                hidden
                XL
                children={`${user.firstName} ${user.lastName}`}
            />
        </tr>
    );
};

export default CouponItem;

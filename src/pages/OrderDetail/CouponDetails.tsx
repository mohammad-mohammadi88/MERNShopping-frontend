import type { FC } from "react";

import type { Coupon } from "@Types";

const CouponDetails: FC<Coupon> = ({
    code,
    discount: { amount, role },
    expiresAt,
    limit,
    used,
}) => (
    <div className="flex flex-col">
        <h2 className="font-semibold text-xl truncate pt-5 pb-2">Coupon</h2>
        <div className="flex flex-col pl-2 space-y-1">
            <p className="truncate">
                <strong>Code:</strong> {code}
            </p>
            <p className="truncate">
                <strong>Discount:</strong>{" "}
                {amount + (role === "number" ? "$" : "%")}
            </p>
            <p className="truncate">
                <strong>Limit / Used:</strong> {limit} / {used}
            </p>
            <p className="truncate">
                <strong>Expires At:</strong> {new Date(expiresAt).toString()}
            </p>
        </div>
    </div>
);

export default CouponDetails;

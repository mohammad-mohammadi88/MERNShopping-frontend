import type { FC } from "react";

import type { Coupon } from "@Types";

const CouponBasics: FC<Omit<Coupon, "status" | "user" | "_id">> = ({
    code,
    discount: { amount, role },
    expiresAt,
    limit,
    used,
    updatedAt,
    createdAt,
}) => (
    <div className="flex flex-col">
        <h2 className="font-semibold text-xl truncate pb-2">Coupon</h2>
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
            <p className="truncate">
                <strong>Updated At:</strong> {new Date(updatedAt).toString()}
            </p>
            <p className="truncate">
                <strong>Created At:</strong> {new Date(createdAt).toString()}
            </p>
        </div>
    </div>
);

export default CouponBasics;

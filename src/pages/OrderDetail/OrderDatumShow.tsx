import type { FC } from "react";

import type { FullOrder } from "@Types";
import { UserDetails } from "../Shared";
import {
    ChangeStatus,
    CouponDetails,
    OrderProductDetails,
    ShowAddress,
    ShowPrices,
} from "./Order";

const OrderDatumShow: FC<FullOrder> = ({
    couponCode,
    deliveryAddress,
    finalPrice,
    products,
    _id,
    status,
    totalPrice,
    user,
}) => (
    <div>
        <h1 className="pb-2 mb-4 border-b">Order Details</h1>
        <div className="pl-2 space-y-4">
            <ShowPrices finalPrice={finalPrice} totalPrice={totalPrice} />

            <ChangeStatus id={_id} status={status} />

            <UserDetails {...user} />

            {couponCode && <CouponDetails {...couponCode} />}

            <OrderProductDetails products={products} />

            <ShowAddress {...deliveryAddress} />
        </div>
    </div>
);

export default OrderDatumShow;

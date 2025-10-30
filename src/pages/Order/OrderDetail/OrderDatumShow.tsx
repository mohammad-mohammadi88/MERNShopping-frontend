import type { FC } from "react";

import { UserDetails } from "@/pages/Shared";
import type { FullOrder } from "@Types";
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
    <>
        <ShowPrices finalPrice={finalPrice} totalPrice={totalPrice} />

        <ChangeStatus id={_id} status={status} />

        <UserDetails {...user} />

        {couponCode && <CouponDetails {...couponCode} />}

        <OrderProductDetails products={products} />

        <ShowAddress {...deliveryAddress} />
    </>
);

export default OrderDatumShow;

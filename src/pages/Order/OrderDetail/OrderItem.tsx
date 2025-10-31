import type { FC } from "react";

import { ChangeStatus, UserDetails } from "@/pages/Shared";
import { ordersApi } from "@Api";
import { ordersStatus } from "@Constants";
import type { FullOrder } from "@Types";
import {
    CouponDetails,
    OrderProductDetails,
    ShowAddress,
    ShowPrices,
} from "./Order";

const OrderItem: FC<FullOrder> = ({
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

        <ChangeStatus
            apiCall={(newStatus) => ordersApi.editOrderStatus(_id, newStatus)}
            collectionStatus={ordersStatus}
            currentStatus={status}
            datumName="order"
            queryKey={["orders", "page"]}
        />

        {couponCode && <CouponDetails code={couponCode} />}

        <OrderProductDetails products={products} />

        <UserDetails id={user} />

        <ShowAddress {...deliveryAddress} />
    </>
);

export default OrderItem;

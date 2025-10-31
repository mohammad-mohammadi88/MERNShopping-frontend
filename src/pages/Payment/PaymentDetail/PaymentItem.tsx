import type { FC } from "react";

import { UserDetails } from "@/pages/Shared";
import { ShowCurrentStatus } from "@Components";
import { paymentStatus, paymentStatusColors } from "@Constants";
import type { SinglePayment } from "@Types";
import OrderDetailts from "./OrderDetails";
import ShowPricing from "./ShowPricing";

const PaymentItem: FC<SinglePayment> = ({
    amount,
    currency,
    order: orderId,
    status,
    user,
    paidAmount,
}) => (
    <div className="mt-7">
        <div className="pl-2 space-y-4 mt-6">
            <ShowPricing
                amount={amount}
                currency={currency}
                paidAmount={paidAmount}
            />

            <ShowCurrentStatus
                statusColors={paymentStatusColors}
                statuses={paymentStatus}
                status={status}
            />

            <UserDetails id={user} />
            <OrderDetailts id={orderId} />
        </div>
    </div>
);
export default PaymentItem;

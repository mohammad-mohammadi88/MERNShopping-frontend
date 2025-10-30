import type { FC } from "react";

import { ShowCurrentStatus } from "@Components";
import { paymentStatus, paymentStatusColors } from "@Constants";
import type { Payment } from "@Types";
import { UserDetails } from "../../Shared";
import { RedirectToOrderBtn, ShowPricing } from "./Payment";

const PaymentDatumShow: FC<Payment> = ({
    amount,
    currency,
    order: orderId,
    status,
    user,
    paidAmount,
}) => (
    <div className="mt-7">
        <RedirectToOrderBtn id={orderId} />

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

            <UserDetails {...user} />
        </div>
    </div>
);
export default PaymentDatumShow;

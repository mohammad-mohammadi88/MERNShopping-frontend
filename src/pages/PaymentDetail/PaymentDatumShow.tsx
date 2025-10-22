import type { FC } from "react";

import type { Payment } from "@Types";
import { UserDetails } from "../Shared";
import { RedirectToOrderBtn, ShowPricing, ShowStatus } from "./Payment";

const PaymentDatumShow: FC<Payment> = ({
    amount,
    currency,
    order: orderId,
    status,
    user,
    paidAmount,
}) => (
    <div>
        <h1 className="pb-2 mb-6 border-b">Payment Details</h1>
        <RedirectToOrderBtn id={orderId} />

        <div className="pl-2 space-y-4 mt-6">
            <ShowPricing
                amount={amount}
                currency={currency}
                paidAmount={paidAmount}
            />

            <ShowStatus status={status} />

            <UserDetails {...user} />
        </div>
    </div>
);
export default PaymentDatumShow;

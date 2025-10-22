import type { FC } from "react";
import { useNavigate } from "react-router";

import { RowItem, Status } from "@Components";
import {
    paymentStatus,
    paymentStatusColors,
    type PaymentStatus,
    type PaymentStatusKeys,
} from "@Constants";
import type { Payment } from "@Types";
import { capitalize } from "@Utils";

interface Props extends Payment {
    isLast: boolean;
}
const PaymentItem: FC<Props> = ({
    amount,
    _id,
    user: { firstName, lastName, mobile },
    status,
    currency,
}) => {
    const navigate = useNavigate();
    const statusName = Object.keys(paymentStatus).find(
        (c) => paymentStatus[c as PaymentStatusKeys] === status
    ) as PaymentStatusKeys;

    const fullname = `${capitalize(firstName)} ${capitalize(lastName)}`;
    return (
        <tr
            onClick={() => navigate(`/payment/${_id}`)}
            className="border-y h-16 group cursor-pointer hover:bg-gray-200 duration-300 border-gray-300 max-w-full"
        >
            <RowItem children={amount} />
            <RowItem hidden MD children={mobile} />

            <RowItem hidden XL children={fullname} />
            <RowItem hidden LG children={currency} />
            <RowItem>
                <Status<PaymentStatus>
                    currentStatus={statusName}
                    statusColors={paymentStatusColors}
                />
            </RowItem>
        </tr>
    );
};

export default PaymentItem;

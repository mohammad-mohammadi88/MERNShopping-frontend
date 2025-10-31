import type { FC } from "react";
import { useNavigate } from "react-router";

import { RowItem, Status } from "@Components";
import {
    paymentStatus,
    paymentStatusColors,
    type PaymentStatus,
} from "@Constants";
import type { Payment } from "@Types";
import { capitalize, getStatusName } from "@Utils";

const PaymentItem: FC<Payment> = ({
    amount,
    _id,
    user: { firstName, lastName, mobile },
    status,
    currency,
}) => {
    const navigate = useNavigate();
    const statusName = getStatusName(paymentStatus, status);
    const fullname = `${capitalize(firstName)} ${capitalize(lastName)}`;
    return (
        <tr onClick={() => navigate(`/payment/${_id}`)} className="data-item">
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

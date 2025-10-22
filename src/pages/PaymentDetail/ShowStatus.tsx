import type { FC } from "react";

import { Status } from "@Components";
import {
    type PaymentStatusKeys,
    type PaymentStatusValues,
    paymentStatus,
    paymentStatusColors,
} from "@Constants";

interface Props {
    status: PaymentStatusValues;
}
const statusName = (status: PaymentStatusValues) =>
    Object.keys(paymentStatus).find(
        (c) => paymentStatus[c as PaymentStatusKeys] === status
    ) as PaymentStatusKeys;

const ShowStatus: FC<Props> = ({ status }) => (
    <p className="text-lg mt-2">
        <strong>Current Status:</strong>{" "}
        <Status
            statusColors={paymentStatusColors}
            currentStatus={statusName(status)}
        />
    </p>
);

export default ShowStatus;

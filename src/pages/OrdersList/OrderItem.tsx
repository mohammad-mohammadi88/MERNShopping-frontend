import type { FC } from "react";
import { useNavigate } from "react-router";

import { RowItem, Status } from "@Components";
import {
    ordersStatus,
    ordersStatusColors,
    type OrdersStatus,
    type OrdersStatusKeys,
} from "@Constants";
import type { Order } from "@Types";
import { capitalize } from "@Utils";

interface Props extends Order {
    isLast: boolean;
}
const OrderItem: FC<Props> = ({
    finalPrice,
    _id,
    user: { firstName, lastName, mobile },
    status,
    totalPrice,
}) => {
    const navigate = useNavigate();
    const statusName = Object.keys(ordersStatus).find(
        (c) => ordersStatus[c as OrdersStatusKeys] === status
    ) as OrdersStatusKeys;

    const fullname = `${capitalize(firstName)} ${capitalize(lastName)}`;
    return (
        <tr
            onClick={() => navigate(`/order/${_id}`)}
            className="border-y h-16 group cursor-pointer hover:bg-gray-200 duration-300 border-gray-300 max-w-full"
        >
            <RowItem children={finalPrice} />
            <RowItem hidden MD children={mobile} />

            <RowItem hidden LG children={fullname} />
            <RowItem hidden XL children={totalPrice} />
            <RowItem>
                <Status<OrdersStatus>
                    currentStatus={statusName}
                    statusColors={ordersStatusColors}
                />
            </RowItem>
        </tr>
    );
};

export default OrderItem;

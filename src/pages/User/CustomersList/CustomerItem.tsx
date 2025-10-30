import type { FC } from "react";
import { useNavigate } from "react-router";

import { RowItem } from "@Components";
import type { User } from "@Types";

const CustomerItem: FC<User> = ({
    _id,
    email,
    firstName,
    lastName,
    mobile,
    totalOrders,
}) => {
    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate(`/customer/${_id}`)} className="data-item">
            <RowItem children={firstName} />
            <RowItem children={lastName} />
            <RowItem hidden MD children={mobile} />
            <RowItem hidden LG children={email} />
            <RowItem hidden XL children={totalOrders} />
        </tr>
    );
};

export default CustomerItem;

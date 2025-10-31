import type { FC } from "react";
import { useNavigate } from "react-router";

import { RowItem, Status } from "@Components";
import {
    shipmentsStatusColors,
    shipmentStatus,
    type ShipmentStatus,
} from "@Constants";
import type { Shipment } from "@Types";
import { getStatusName } from "@Utils";

const dateToString = (date: Date) => new Date(date).toLocaleDateString();

const ShipmentItem: FC<Shipment> = ({
    deliveredAt,
    selectedDate,
    status,
    note,
    _id,
    user,
}) => {
    const navigate = useNavigate();
    return (
        <tr className="data-item" onClick={() => navigate(`/shipment/` + _id)}>
            <RowItem children={dateToString(deliveredAt)} />
            <RowItem>
                <Status<ShipmentStatus>
                    currentStatus={getStatusName(shipmentStatus, status)}
                    statusColors={shipmentsStatusColors}
                />
            </RowItem>
            <RowItem
                hidden
                MD
                children={`${user.firstName} ${user.lastName}`}
            />
            <RowItem hidden LG children={dateToString(selectedDate)} />

            <RowItem hidden XL children={note ?? "-"} />
        </tr>
    );
};

export default ShipmentItem;

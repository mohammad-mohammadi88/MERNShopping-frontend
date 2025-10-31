import { shipmentsApi } from "@Api";
import { PaginatedPage, RowItem, type RowItemProps } from "@Components";
import { shipmentStatus } from "@Constants";
import type { Shipment } from "@Types";
import { convertTime } from "@Utils";
import ShipmentsLoading from "./Loading";
import ShipmentItem from "./ShipmentItem";

const rowItems: RowItemProps[] = [
    { children: "Delivered At" },
    { children: "Status" },
    { children: "Customer", hidden: true, MD: true },
    { children: "Selected Date", hidden: true, LG: true },
    { children: "Note", hidden: true, XL: true },
];
const ShipmentsList = () => (
    <PaginatedPage<Shipment, {}>
        LoadingComponent={ShipmentsLoading}
        fields={["user info"]}
        staleTime={convertTime(120)}
        collectionStatus={shipmentStatus}
        label="shipments"
        DatumItemComponent={ShipmentItem}
        apiCall={({ status, ...params }) =>
            shipmentsApi.getShipments(status === "null" ? null : status, params)
        }
    >
        {rowItems.map((props, i) => (
            <RowItem isHeading key={i} {...props} />
        ))}
    </PaginatedPage>
);

export default ShipmentsList;

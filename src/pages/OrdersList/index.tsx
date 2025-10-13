import { ordersApi } from "@Api";
import { PaginatedPage, RowItem, type RowItemProps } from "@Components";
import { ordersStatus, type OrdersStatus } from "@Constants";
import type { Order } from "@Types";
import { convertTime } from "@Utils";
import OrdersLoader from "./Loading";
import OrderItem from "./OrderItem";

const rowItems: RowItemProps[] = [
    { children: "Final Price" },
    { children: "User Mobile", hidden: true, MD: true },
    { children: "Customer", hidden: true, LG: true },
    { children: "Total Price", hidden: true, XL: true },
    { children: "Status" },
];
const searchFields: string[] = ["user info", "coupon"];
const Orders = () => (
    <PaginatedPage<Order, OrdersStatus>
        label="order"
        fields={searchFields}
        staleTime={convertTime(5)}
        LoadingComponent={OrdersLoader}
        collectionStatus={ordersStatus}
        DatumItemComponent={OrderItem}
        apiCall={({ status, ...params }) =>
            ordersApi.getAllOrders(status === "null" ? null : status, params)
        }
    >
        {rowItems.map((props, i) => (
            <RowItem {...props} key={i} isHeading />
        ))}
    </PaginatedPage>
);
export default Orders;

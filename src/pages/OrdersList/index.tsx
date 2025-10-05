import { ordersApi } from "@Api";
import { PaginatedPage } from "@Components";
import { ordersStatus, type OrdersStatus } from "@Constants";
import type { Order } from "@Types";
import { convertTime } from "@Utils";
import OrdersLoader from "./Loading";
import OrderItem from "./OrderItem";

const Orders = () => (
    <PaginatedPage<Order, OrdersStatus>
        label="order"
        // 5 minutes
        staleTime={convertTime(5)}
        LoadingComponent={OrdersLoader}
        collectionStatus={ordersStatus}
        DatumItemComponent={OrderItem}
        apiCall={({ page, perPage, status }) =>
            ordersApi.getAllOrders(status === "null" ? null : status, {
                page,
                perPage,
            })
        }
    >
        <th className="flex-1 table-row-item">Final Price</th>

        <th className="flex-1 hidden md:table-cell table-row-item">
            User Mobile
        </th>
        <th className="flex-1 hidden lg:table-cell table-row-item">Customer</th>
        <th className="flex-1 hidden xl:table-cell table-row-item">
            Total Price
        </th>
        <th className="flex-1 table-row-item">Status</th>
        <th className="max-w-10 table-row-item invisible" aria-hidden="true">
            open
        </th>
    </PaginatedPage>
);
export default Orders;

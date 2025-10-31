import { ordersApi } from "@Api";
import { DatumDetailPage } from "@Components";
import OrderItem from "./OrderItem";

const OrderDetail = () => (
    <DatumDetailPage
        navigateUrl="/orders"
        DatumItem={OrderItem}
        apiCall={ordersApi.getSingleOrder}
        datumName="order"
    />
);
export default OrderDetail;

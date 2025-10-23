import { ordersApi } from "@Api";
import { DatumDetailPage } from "@Components";
import OrderDatumShow from "./OrderDatumShow";

const OrderDetail = () => (
    <DatumDetailPage
        navigateUrl="/orders"
        DatumItem={OrderDatumShow}
        apiCall={ordersApi.getSingleOrder}
        datumName="order"
    />
);
export default OrderDetail;

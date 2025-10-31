import { paymentApi } from "@Api";
import { DatumDetailPage } from "@Components";
import PaymentItem from "./PaymentItem";

const PaymentDetail = () => (
    <DatumDetailPage
        navigateUrl="/payments"
        datumName="payment"
        apiCall={paymentApi.getSinglePayment}
        DatumItem={PaymentItem}
    />
);

export default PaymentDetail;

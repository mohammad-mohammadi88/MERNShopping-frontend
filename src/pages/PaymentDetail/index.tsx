import { paymentApi } from "@Api";
import { DatumDetailPage } from "@Components";
import PaymentDatumShow from "./PaymentDatumShow";

const PaymentDetail = () => (
    <DatumDetailPage
        navigateUrl="/payments"
        datumName="payment"
        apiCall={paymentApi.getSinglePayment}
        DatumItem={PaymentDatumShow}
    />
);

export default PaymentDetail;

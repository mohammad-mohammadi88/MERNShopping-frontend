import { usersApi } from "@Api";
import { DatumDetailPage } from "@Components";
import CustomerDatumShow from "./CustomerDatumShow";

const CustomerDetail = () => (
    <DatumDetailPage
        DatumItem={CustomerDatumShow}
        apiCall={usersApi.getUserInfo}
        navigateUrl="/customers"
        datumName="customer"
    />
);

export default CustomerDetail;

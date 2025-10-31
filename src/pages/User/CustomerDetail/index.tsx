import { usersApi } from "@Api";
import { DatumDetailPage } from "@Components";
import CustomerItem from "./CustomerItem";

const CustomerDetail = () => (
    <DatumDetailPage
        DatumItem={CustomerItem}
        apiCall={usersApi.getUserInfo}
        navigateUrl="/customers"
        datumName="customer"
    />
);

export default CustomerDetail;

import { paymentApi } from "@Api";
import { PaginatedPage, RowItem, type RowItemProps } from "@Components";
import { paymentStatus, type PaymentStatus } from "@Constants";
import type { Payment } from "@Types";
import { convertTime } from "@Utils";
import PaymentLoading from "./Loading";
import PaymentItem from "./PaymentItem";

const searchFields: string[] = ["user info", "currency"];

const rowItems: RowItemProps[] = [
    { children: "Amount" },
    { children: "User Mobile", hidden: true, MD: true },
    { children: "User Name", hidden: true, XL: true },
    { children: "Currency", hidden: true, LG: true },
    { children: "Status" },
];
const Payments = () => (
    <PaginatedPage<Payment, PaymentStatus>
        LoadingComponent={PaymentLoading}
        apiCall={({ status, ...params }) =>
            paymentApi.getAllPayments(status === "null" ? null : status, params)
        }
        DatumItemComponent={PaymentItem}
        fields={searchFields}
        label="payments"
        collectionStatus={paymentStatus}
        staleTime={convertTime(60)}
    >
        {rowItems.map((props, i) => (
            <RowItem {...props} key={i} isHeading />
        ))}
    </PaginatedPage>
);

export default Payments;

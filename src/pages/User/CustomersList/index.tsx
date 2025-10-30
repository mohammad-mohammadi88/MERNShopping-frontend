import { usersApi } from "@Api";
import { PaginatedPage, RowItem, type RowItemProps } from "@Components";
import { convertTime } from "@Utils";
import CustomerItem from "./CustomerItem";
import CustomerLoading from "./Loading";

const rowItems: RowItemProps[] = [
    { children: "First Name" },
    { children: "Last Name" },
    { children: "Mobile", hidden: true, MD: true },
    { children: "Email", hidden: true, LG: true },
    { children: "Total Orders", hidden: true, XL: true },
];
const index = () => (
    <PaginatedPage
        DatumItemComponent={CustomerItem}
        LoadingComponent={CustomerLoading}
        apiCall={({ status, ...params }) => usersApi.getAllCustomers(params)}
        fields={["first name", "lastname", "mobile", "email"]}
        label="customers"
        staleTime={convertTime(60)}
    >
        {rowItems.map((item, i) => (
            <RowItem isHeading key={i} {...item} />
        ))}
    </PaginatedPage>
);
export default index;

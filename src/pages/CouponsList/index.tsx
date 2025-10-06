import { couponsApi } from "@Api";
import { PaginatedPage, RowItem, type RowItemProps } from "@Components";
import type { Coupon } from "@Types";
import { convertTime } from "@Utils";
import CouponItem from "./CouponItem";
import CouponsLoading from "./Loading";

const rowItems: RowItemProps[] = [
    { children: "Code" },
    { children: "Discount" },
    { children: "Status", hidden: true, MD: true },
    { children: "Limit/Used", hidden: true, LG: true },
    { children: "Username", hidden: true, XL: true },
];
const index = () => (
    <PaginatedPage<Coupon, {}>
        LoadingComponent={CouponsLoading}
        staleTime={convertTime(120)}
        label="coupon"
        DatumItemComponent={CouponItem}
        apiCall={({ page, perPage, status }) =>
            couponsApi.getCoupons(status === "null" ? null : status, {
                page,
                perPage,
            })
        }
    >
        {rowItems.map((props, i) => (
            <RowItem isHeading key={i} {...props} />
        ))}
    </PaginatedPage>
);

export default index;

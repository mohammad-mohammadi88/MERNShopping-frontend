import { couponsApi } from "@Api";
import { PaginatedPage, RowItem, type RowItemProps } from "@Components";
import type { FullCoupon } from "@Types";
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
const searchFields: string[] = ["user info", "code"];
const CouponsList = () => (
    <PaginatedPage<FullCoupon, {}>
        LoadingComponent={CouponsLoading}
        fields={searchFields}
        staleTime={convertTime(120)}
        label="coupons"
        DatumItemComponent={CouponItem}
        apiCall={({ status, ...params }) =>
            couponsApi.getCoupons(status === "null" ? null : status, params)
        }
    >
        {rowItems.map((props, i) => (
            <RowItem isHeading key={i} {...props} />
        ))}
    </PaginatedPage>
);

export default CouponsList;

import { couponsApi } from "@/api";
import { DatumDetailPage } from "@Components";
import CouponItem from "./CouponItem";

const CouponDetail = () => (
    <DatumDetailPage
        DatumItem={CouponItem}
        datumName="coupon"
        navigateUrl="/coupons"
        apiCall={couponsApi.getSingleCoupon}
    />
);
export default CouponDetail;

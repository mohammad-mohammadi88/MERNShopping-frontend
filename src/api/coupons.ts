import type {
    Coupon,
    FormCouponValues,
    GetDataWithPagination,
    PaginationType,
} from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint } = endpointGenerator("coupons");

const getCoupons = (status: string | null, pagination?: PaginationType) =>
    apiClient.get<GetDataWithPagination<Coupon>, string>(
        endpoint,
        status ? { status, ...pagination } : { ...pagination }
    );

const postCoupon = (data: FormCouponValues) =>
    apiClient.post<Coupon, string>(endpoint, data);

export default {
    getCoupons,
    postCoupon,
};

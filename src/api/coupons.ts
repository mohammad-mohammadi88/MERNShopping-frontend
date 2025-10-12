import type {
    ApiListQueries,
    Coupon,
    FormCouponValues,
    GetDataWithPagination,
} from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint } = endpointGenerator("coupons");

const getCoupons = (status: string | null, params?: ApiListQueries) =>
    apiClient.get<GetDataWithPagination<Coupon>, string>(
        endpoint,
        status ? { status, ...params } : { ...params }
    );

const postCoupon = (data: FormCouponValues) =>
    apiClient.post<Coupon, string>(endpoint, data);

export default {
    getCoupons,
    postCoupon,
};

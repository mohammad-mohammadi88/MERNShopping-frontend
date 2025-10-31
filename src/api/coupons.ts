import type { CouponsStatusValues } from "@Constants";
import type {
    ApiListQueries,
    Coupon,
    FormCouponValues,
    FullCoupon,
    GetDataWithPagination,
} from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint, addParam } = endpointGenerator("coupons");

const getCoupons = (status: string | null, params?: ApiListQueries) =>
    apiClient.get<GetDataWithPagination<FullCoupon>, string>(
        endpoint,
        status ? { status, ...params } : { ...params }
    );

const getSingleCoupon = (code: string) =>
    apiClient.get<Coupon, string>(addParam(code));

const postCoupon = (data: FormCouponValues) =>
    apiClient.post<Coupon, string>(endpoint, data);

const updateCoupon = (code: string, status: CouponsStatusValues) =>
    apiClient.get<Coupon, string>(addParam(code), { status });

export default {
    getCoupons,
    updateCoupon,
    getSingleCoupon,
    postCoupon,
};

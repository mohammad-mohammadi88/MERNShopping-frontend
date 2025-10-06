import type { Coupon, GetDataWithPagination, PaginationType } from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint } = endpointGenerator("coupons");

const getCoupons = (status: string | null, pagination?: PaginationType) =>
    apiClient.get<GetDataWithPagination<Coupon>, string>(
        endpoint,
        status ? { status, ...pagination } : { ...pagination }
    );
export default {
    getCoupons,
};

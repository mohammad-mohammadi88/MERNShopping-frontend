import type {
    ApiListQueries,
    GetDataWithPagination,
    Payment,
    SinglePayment,
} from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint, addParam } = endpointGenerator("payments");

const getAllPayments = (status: string | null, params?: ApiListQueries) =>
    apiClient.get<GetDataWithPagination<Payment>, string>(
        endpoint,
        status ? { status, ...params } : { ...params }
    );

const getSinglePayment = (id: string) =>
    apiClient.get<SinglePayment, string>(addParam(id));

export default {
    getAllPayments,
    getSinglePayment,
};

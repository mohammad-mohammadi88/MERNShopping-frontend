import type { Payment } from "@Types";
import serverFetch from "./server";

const endpoint = (id: string) => "payments/" + id;

const getSinglePayment = (id: string) => serverFetch<Payment>(endpoint(id));

export default {
    getSinglePayment,
};

"use client";

import apiClient from "./client";

const endpoint = (code: string) => "coupons/" + code;

const getCoupon = (code: string) => apiClient.get(endpoint(code));

export default {
    getCoupon,
};

"use client";

import { create } from "apisauce";

import { serverUrl as baseURL } from "@/constants";

const apiClient = create({
    baseURL,
    withCredentials: true,
});

export default apiClient;

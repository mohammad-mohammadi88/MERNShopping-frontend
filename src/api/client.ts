"use client";
import { create } from "apisauce";

import { serverUrl as baseURL } from "@/constants";

const apiClient = create({
    baseURL,
    withCredentials: true,
});

type AddParam = (param: string) => string;

type Endpoint = {
    endpoint: string;
    addParam: AddParam;
};

export type NewDatumError = { errors: string[] } | string;

type EndpointGenerator = (endpoint: string) => Endpoint;
export const endpointGenerator: EndpointGenerator = (endpoint) => ({
    endpoint,
    addParam: (param: string) => `${endpoint}/${param}`,
});

export default apiClient;

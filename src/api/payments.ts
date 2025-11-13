"use client";

import apiClient, { endpointGenerator } from "./client";

const { endpoint } = endpointGenerator("payments");

const createSession = (orderId: string) =>
    apiClient.post<string>(endpoint, { orderId });

export default { createSession };

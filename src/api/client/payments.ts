"use client";

import apiClient from "./client";

const endpoint = "payments";

const createSession = (orderId: string) =>
    apiClient.post<undefined, string>(endpoint, { orderId });

export default { createSession };

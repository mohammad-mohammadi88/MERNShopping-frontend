"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { FC, PropsWithChildren } from "react";

export const queryClient = new QueryClient();
const Provider: FC<Required<PropsWithChildren>> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
    </QueryClientProvider>
);

export default Provider;

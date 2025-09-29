import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { ordersStatus, type OrdersStatusKeys } from "@/constants";
import { ordersApi } from "@Api";
import { AlertModal, Pagination, Select } from "@Components";
import type { SelectOption } from "@Types";
import { capitalize } from "@Utils";
import OrdersLoader from "./Loading";
import OrderItem from "./OrderItem";

const orderStatusOptions: SelectOption[] = [
    { value: "null", label: "All" },
    ...Object.keys(ordersStatus).map((label) => ({
        label: capitalize(label.toLowerCase()),
        value: ordersStatus[label as OrdersStatusKeys],
    })),
];
const convertStatusToString = (status: number): string =>
    capitalize(
        (
            Object.keys(ordersStatus).find(
                (v) => ordersStatus[v as OrdersStatusKeys] === status
            ) as string
        ).toLowerCase()
    );
const Orders = () => {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const [status, setStatus] = useState<string>("null");

    const [perPage, setPerPage] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [
            "orders",
            "page",
            page,
            "perPage",
            perPage,
            "status",
            status === "null" ? "All" : status,
        ],
        queryFn: () =>
            ordersApi.getAllOrdersWithPagination(
                status === "null" ? null : status,
                { page, perPage }
            ),
    });

    const isOrdersReady = data?.ok && data.data;
    const isOrdersExists = isOrdersReady && data.data?.data.length !== 0;

    useEffect(() => {
        if (isSuccess && !data.ok) setIsErrorModalOpen(true);
        return () => setIsErrorModalOpen(false);
    }, [isSuccess, data?.ok]);

    const errorDescription =
        !data?.ok &&
        (data?.data ||
            data?.problem ||
            "Unexpected error happend while getting data");
    return (
        <div className="bg-white rounded p-8">
            <h1 className="mb-3">Orders List</h1>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="flex-1 table-row-item-no-border">
                            Final Price
                        </th>

                        <th className="flex-1 hidden md:table-cell table-row-item-no-border">
                            User Mobile
                        </th>
                        <th className="flex-1 hidden lg:table-cell table-row-item-no-border">
                            Customer
                        </th>
                        <th className="flex-1 hidden xl:table-cell table-row-item-no-border">
                            Total Price
                        </th>
                        <th className="flex-1 table-row-item-no-border">
                            Status
                        </th>
                        <th
                            className="max-w-10 table-row-item-no-border invisible"
                            aria-hidden="true"
                        >
                            open
                        </th>
                    </tr>
                </thead>
                {isLoading && <OrdersLoader />}

                <tbody className="w-full">
                    {isOrdersExists &&
                        data.data?.data.map((order, i, array) => (
                            <OrderItem
                                key={order._id}
                                isLast={i === array.length - 1}
                                {...order}
                            />
                        ))}
                </tbody>
            </table>
            <AlertModal
                isOpen={isErrorModalOpen}
                title="Error"
                // it will always have error text and "" is just for typescript
                description={errorDescription || ""}
                role="error"
                onClose={() => {
                    setIsErrorModalOpen(false);
                    navigate("/");
                }}
            />
            {isOrdersReady && (
                <>
                    {data.data?.data.length === 0 && (
                        <p className="text-red-500 py-4 text-xl font-bold">
                            There is no order exists{" "}
                            {status !== "null" &&
                                `with status "${convertStatusToString(
                                    Number(status)
                                )}"`}
                        </p>
                    )}
                    <Pagination
                        page={page}
                        setPerPage={setPerPage}
                        perPage={perPage}
                        setPage={setPage}
                        totalPages={data.data?.pages || 1}
                    >
                        <Select
                            label="Orders Status"
                            containerClassName="w-auto mb-4 md:mb-0 items-center space-x-2 flex-row"
                            className={"border border-gray-400"}
                            value={status}
                            options={orderStatusOptions}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </Pagination>
                </>
            )}
        </div>
    );
};

export default Orders;

import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "apisauce";
import { useEffect, useState, type FC, type JSX, type ReactNode } from "react";
import { useNavigate } from "react-router";

import type { GetDataWithPagination, ID } from "@Types";
import { capitalize } from "@Utils";
import { AlertModal } from "../Modal";
import Pagination from "./Pagination";

type Obj = Record<string, number>;
interface ApiParams {
    page: number;
    perPage: number;
    status: string;
}
interface DatumItemProps {
    isLast: boolean;
    key: string;
}
export interface PaginatedPageProps<T, E extends Obj> {
    LoadingComponent: JSX.ElementType;
    apiCall: (
        params: ApiParams
    ) => Promise<ApiResponse<GetDataWithPagination<T>, string>>;
    label: string;
    staleTime?: number;
    children: ReactNode;
    collectionStatus?: E;
    DatumItemComponent: FC<DatumItemProps & T>;
}

const convertStatusToString = <T extends Obj>(
    status: number,
    collectionStatus: T
): string =>
    capitalize(
        (
            (Object.keys(collectionStatus).find(
                (v) =>
                    collectionStatus[v as keyof typeof collectionStatus] ===
                    status
            ) as string) || "unknown"
        ).toLowerCase()
    );
const PaginatedPage = <T, E extends Obj>({
    apiCall,
    LoadingComponent,
    label,
    children,
    DatumItemComponent,
    staleTime,
    collectionStatus,
}: PaginatedPageProps<T, E>) => {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const [status, setStatus] = useState<string>("null");

    const [perPage, setPerPage] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const statusQueryKeys = collectionStatus
        ? ["status", status === "null" ? "All" : status]
        : [];
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [
            label + "s",
            "page",
            page,
            "perPage",
            perPage,
            ...statusQueryKeys,
        ],
        queryFn: () => apiCall({ page, perPage, status }),
        staleTime,
    });

    const isDataReady = data?.ok && data.data;
    const isDataExists = isDataReady && data.data?.data.length !== 0;

    useEffect(() => {
        if (
            isSuccess &&
            (!data.ok || (isDataReady && data.data?.data.length === 0))
        )
            setIsErrorModalOpen(true);
        return () => setIsErrorModalOpen(false);
    }, [isSuccess, data?.ok]);

    const errorDescription =
        !data?.ok &&
        (data?.data ||
            data?.problem ||
            "Unexpected error happend while getting data");

    const totalPages = isDataReady ? data?.data?.pages || 1 : 0;

    const statusProps = collectionStatus && {
        collectionStatus,
        setStatus,
        status,
    };
    return (
        <div className="bg-white rounded p-8">
            <h1 className="mb-3">{capitalize(label)}s List</h1>
            <table className="w-full">
                {(isLoading ||
                    !data?.ok ||
                    (data.ok && data.data?.data.length !== 0)) && (
                    <thead>
                        <tr>{children}</tr>
                    </thead>
                )}
                {isLoading && <LoadingComponent />}

                <tbody className="w-full">
                    {isDataExists &&
                        data.data?.data.map((datum, i, array) => (
                            <DatumItemComponent
                                key={(datum as ID)._id}
                                isLast={i === array.length - 1}
                                {...datum}
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
            {isDataReady && (
                <>
                    {data.data?.data.length === 0 && (
                        <p className="text-red-500 py-4 text-xl font-bold">
                            There is no {label} exists{" "}
                            {collectionStatus &&
                                status !== "null" &&
                                `with status "${convertStatusToString(
                                    Number(status),
                                    collectionStatus
                                )}"`}
                        </p>
                    )}
                    <Pagination
                        pageProps={{ page, setPage, totalPages }}
                        perPageProps={{ perPage, setPerPage }}
                        statusProps={statusProps}
                    />
                </>
            )}
        </div>
    );
};

export default PaginatedPage;

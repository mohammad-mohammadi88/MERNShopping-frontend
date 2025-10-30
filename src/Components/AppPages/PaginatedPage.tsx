import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "apisauce";
import { useEffect, useState, type FC, type JSX, type ReactNode } from "react";
import { useNavigate } from "react-router";

import type { ApiListQueries, GetDataWithPagination, ID } from "@Types";
import { capitalize } from "@Utils";
import { AlertModal } from "../Modal";
import Pagination from "../Pagination/Pagination";
import SearchInput from "../SearchInput";

type Obj = Record<string, number>;
interface ApiParams extends ApiListQueries {
    status: string;
}
interface DatumItemProps {
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
    fields: string[];
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
    fields,
    children,
    DatumItemComponent,
    staleTime,
    collectionStatus,
}: PaginatedPageProps<T, E>) => {
    const navigate = useNavigate();

    // states
    const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);

    // status
    const [status, setStatus] = useState<string>("null");

    // search query
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [debouncedSearchQuery, setDebouncedSearchQuery] =
        useState<string>("");

    // pagination
    const [perPage, setPerPage] = useState<number>(10);
    const [page, setPage] = useState<number>(1);

    // to debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery.toLowerCase().trim());
            clearTimeout(timer);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    // api query keys and query center
    const searchQueryKeys = debouncedSearchQuery
        ? ["query", debouncedSearchQuery]
        : [];
    const statusQueryKeys = collectionStatus
        ? ["status", status === "null" ? "All" : status]
        : [];
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [
            label,
            "page",
            page,
            "perPage",
            perPage,
            ...searchQueryKeys,
            ...statusQueryKeys,
        ],
        queryFn: () =>
            apiCall({
                page,
                perPage,
                status,
                query: debouncedSearchQuery,
            }),
        staleTime,
    });

    // data status constants
    const isDataReady = data?.ok && data.data;
    const isDataExists = isDataReady && data.data?.data.length !== 0;
    const isStatusExists = collectionStatus && status !== "null";
    const isSearchQueryExists = !!debouncedSearchQuery;
    const totalPages = isDataReady ? data?.data?.pages || 1 : 0;

    // checking for error
    useEffect(() => {
        if (isSuccess && !data.ok) setIsErrorModalOpen(true);
        return () => setIsErrorModalOpen(false);
    }, [isSuccess, data?.ok]);

    // handling api error to show in modal
    const errorDescription = !data?.ok
        ? data?.data ||
          data?.problem ||
          "Unexpected error happend while getting data"
        : "";

    // if status collection exists, create status props for status pagination
    const statusProps = collectionStatus && {
        collectionStatus,
        setStatus,
        status,
    };

    // message for not data existence message
    const noDataMessage = `There is no ${label} exists ${
        isStatusExists
            ? `with status "${convertStatusToString(
                  Number(status),
                  collectionStatus
              )}"`
            : ""
    } ${
        isSearchQueryExists
            ? `${
                  isStatusExists ? "and" : "with"
              } search query "${debouncedSearchQuery}"`
            : ""
    }`.trim();
    return (
        <div className="w-full p-4">
            <div className="flex pb-4 !space-y-4 flex-col md:flow-row justify-between">
                <h1 className="mb-3">{capitalize(label)} List</h1>
                <SearchInput
                    fields={fields}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <table className="w-full">
                {(isLoading || isDataExists) && (
                    <thead>
                        <tr>{children}</tr>
                    </thead>
                )}
                {isLoading && <LoadingComponent />}

                <tbody className="w-full">
                    {isDataExists &&
                        data.data?.data.map((datum) => (
                            <DatumItemComponent
                                key={(datum as ID)._id}
                                {...datum}
                            />
                        ))}
                </tbody>
            </table>
            <AlertModal
                isOpen={isErrorModalOpen}
                title="Error"
                description={errorDescription}
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
                            {noDataMessage}
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

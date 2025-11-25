"use client";

import {
    useInfiniteQuery,
    type GetNextPageParamFunction,
} from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useCallback, useRef, type FC } from "react";

import { clientProducts } from "@ClientApi";
import { GetDataWithPagination, Product } from "@Types";
import Cart from "./Cart";
import Loading from "./Loading";

type ProductsList = GetDataWithPagination<Product>;
interface Props {
    initialProducts: ProductsList;
}

const perPage = 2;
const getNextPageParam: GetNextPageParamFunction<any, ProductsList | string> = (
    data
) =>
    typeof data !== "string" && data.currentPage < data.pages
        ? data.currentPage + 1
        : undefined;

const InfiniteScroll: FC<Props> = ({ initialProducts }) => {
    const query = useSearchParams().get("q")?.trim() || "";

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery({
            initialData: {
                pageParams: [1],
                pages: [initialProducts],
            },
            queryKey: ["products", "query", query],
            queryFn: ({ pageParam: page }): Promise<any> =>
                clientProducts
                    .getProducts({ query, page, perPage })
                    .then(({ data }) =>
                        typeof data === "string" ? undefined : data
                    ) as Promise<ProductsList | undefined>,
            initialPageParam: 1,
            getNextPageParam,
        });

    const observer = useRef<IntersectionObserver>(undefined);
    const lastItemRef = useCallback(
        (node: any) => {
            if (isFetchingNextPage) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });

            if (node) observer.current.observe(node);
        },
        [isFetchingNextPage, hasNextPage]
    );

    const filteredPages = data.pages.filter((page) => typeof page === "object");
    return (
        <>
            {filteredPages[0].data.length === 0 && (
                <p className="py-4 text-center text-red-500 font-bold text-3xl">{`There is not product ${
                    query === "" ? "available" : "with this query"
                }`}</p>
            )}
            {filteredPages.map(
                ({ data }, i, pages) =>
                    typeof data === "object" &&
                    data?.map((product, j, products) => (
                        <Cart
                            {...product}
                            key={product._id}
                            ref={
                                i === pages.length - 1 &&
                                j === products.length - 1
                                    ? lastItemRef
                                    : null
                            }
                        />
                    ))
            )}
            {isFetchingNextPage && <Loading />}
        </>
    );
};

export default InfiniteScroll;

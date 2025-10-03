import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { productsApi } from "@Api";
import { AlertModal, Pagination } from "@Components";
import ProductsLoader from "./Loading";
import ProductItem from "./ProductItem";

const Products = () => {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const [perPage, setPerPage] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["products", "page", page, "perPage", perPage],
        queryFn: () => productsApi.getProducts({ page, perPage }),
    });

    const isProductsReady = data?.ok && data.data;
    const isProductsExists = isProductsReady && data.data?.data.length !== 0;

    useEffect(() => {
        if (
            isSuccess &&
            (!data.ok || (isProductsReady && data.data?.data.length === 0))
        )
            setIsErrorModalOpen(true);
        return () => setIsErrorModalOpen(false);
    }, [isSuccess, data?.ok]);

    const errorDescription =
        !data?.ok &&
        (data?.data ||
            data?.problem ||
            "Unexpected error happend while getting data");

    const totalPages = isProductsReady ? data?.data?.pages || 1 : 0;

    return (
        <div className="bg-white rounded p-8">
            <h1 className="mb-3">Products List</h1>
            <table className="w-full">
                {(isLoading ||
                    !data?.ok ||
                    (data.ok && data.data?.data.length !== 0)) && (
                    <thead>
                        <tr>
                            <th
                                className="flex-1 !w-10 sm:hidden md:table-cell table-row-item invisible"
                                aria-hidden="true"
                            />
                            <th className="flex-1 table-row-item">Title</th>

                            <th className="flex-1 hidden lg:table-cell table-row-item">
                                Quantity
                            </th>
                            <th className="flex-1 hidden lg:table-cell table-row-item">
                                Status
                            </th>
                            <th className="flex-1 hidden xl:table-cell table-row-item">
                                Exact Price
                            </th>
                            <th className="flex-1 sm:hidden md:table-cell table-row-item">
                                Sale Price
                            </th>
                            <th
                                className="max-w-10 table-row-item invisible"
                                aria-hidden="true"
                            >
                                open
                            </th>
                        </tr>
                    </thead>
                )}
                {isLoading && <ProductsLoader />}

                <tbody className="w-full">
                    {isProductsExists &&
                        data.data?.data.map((product, i, array) => (
                            <ProductItem
                                key={product._id}
                                isLast={i === array.length - 1}
                                {...product}
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
            {isProductsReady &&
                (data.data?.data.length === 0 ? (
                    <p className="text-red-500 py-4 text-xl font-bold">
                        There is no product exists
                    </p>
                ) : (
                    <Pagination
                        pageProps={{ page, setPage, totalPages }}
                        perPageProps={{ perPage, setPerPage }}
                    />
                ))}
        </div>
    );
};

export default Products;

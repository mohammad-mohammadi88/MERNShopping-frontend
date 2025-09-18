import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { productsApi } from "@/api";
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
        queryFn: () => productsApi.getProductsWithPagination({ page, perPage }),
    });

    const isProductsReady = data?.ok && data.data;
    const isProductsExists =
        isProductsReady && data.data?.products.length !== 0;

    useEffect(() => {
        if (
            isSuccess &&
            (!data.ok || (isProductsReady && data.data?.products.length === 0))
        )
            setIsErrorModalOpen(true);
        return () => setIsErrorModalOpen(false);
    }, [isSuccess, data?.ok]);

    const errorDescription = !data?.ok
        ? data?.data ||
          data?.problem ||
          "Unexpected error happend while getting data"
        : data.data?.products.length === 0 && "There is no product exists";
    return (
        <div className="bg-white rounded p-8">
            <h1 className="mb-3">Products List</h1>
            <table className="w-full">
                <thead>
                    <tr>
                        <th
                            className="flex-1 !w-10 sm:hidden md:table-cell table-row-item-no-border invisible"
                            aria-hidden="true"
                        />
                        <th className="flex-1 table-row-item-no-border">
                            Title
                        </th>

                        <th className="flex-1 hidden lg:table-cell table-row-item-no-border">
                            Quantity
                        </th>
                        <th className="flex-1 hidden lg:table-cell table-row-item-no-border">
                            Status
                        </th>
                        <th className="flex-1 hidden xl:table-cell table-row-item-no-border">
                            Exact Price
                        </th>
                        <th className="flex-1 sm:hidden md:table-cell table-row-item-no-border">
                            Sale Price
                        </th>
                        <th
                            className="max-w-10 table-row-item-no-border invisible"
                            aria-hidden="true"
                        >
                            open
                        </th>
                    </tr>
                </thead>
                {isLoading && <ProductsLoader />}
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
                <tbody className="w-full">
                    {isProductsExists &&
                        data.data?.products.map((product, i, array) => (
                            <ProductItem
                                key={product._id}
                                isLast={i === array.length - 1}
                                {...product}
                            />
                        ))}
                </tbody>
            </table>
            {isProductsExists && (
                <Pagination
                    page={page}
                    setPerPage={setPerPage}
                    perPage={perPage}
                    setPage={setPage}
                    totalPages={data.data?.pages || 1}
                />
            )}
        </div>
    );
};

export default Products;

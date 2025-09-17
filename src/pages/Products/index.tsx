import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { productsApi } from "@/api";
import { AlertModal } from "@/Components";
import { useNavigate } from "react-router";
import ProductsLoader from "./Loading";

const Products = () => {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["products", "page", page],
        queryFn: () =>
            productsApi.getProductsWithPagination({ page, perPage: 10 }),
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
    /**
     * title
     * thumbnail
     * salePrice
     * quantity
     * status
     * price
     */
    return (
        <div className="bg-white rounded p-8">
            <h1 className="mb-3">Products List</h1>
            <table className="w-full">
                <thead>
                    <tr>
                        <th
                            className="flex-1 !w-10 truncate table-row-item invisible"
                            aria-hidden="true"
                        />
                        <th className="flex-1 truncate table-row-item">
                            Title
                        </th>

                        <th className="flex-1 hidden lg:table-cell truncate table-row-item">
                            Quantity
                        </th>
                        <th className="flex-1 hidden lg:table-cell truncate table-row-item">
                            Status
                        </th>
                        <th className="flex-1 hidden xl:table-cell truncate table-row-item">
                            Exact Price
                        </th>
                        <th className="flex-1 sm:hidden md:table-cell truncate table-row-item">
                            Sale Price
                        </th>
                        <th
                            className="max-w-10 truncate table-row-item invisible"
                            aria-hidden="true"
                        >
                            open
                        </th>
                    </tr>
                </thead>
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

                <ProductsLoader />
            </table>
        </div>
    );
};

export default Products;

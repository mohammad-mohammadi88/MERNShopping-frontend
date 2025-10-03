import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type FC } from "react";
import { useNavigate } from "react-router";

import { categoriesApi } from "@Api";
import { AlertModal, Pagination } from "@Components";
import CategoryItem from "./CategoryItem";
import CategoriesListLoading from "./Loading";

const CategoriesList: FC = () => {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const [perPage, setPerPage] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["categories", "page", page, "perPage", perPage],
        queryFn: () => categoriesApi.getCategories({ page, perPage }),
        // one hour
        staleTime: 3_600_000,
    });
    const isCategoriesReady = data?.ok && data.data;
    const isCategoriesExists =
        isCategoriesReady && data.data?.data?.length !== 0;

    useEffect(() => {
        if (
            isSuccess &&
            (!data.ok || (isCategoriesReady && data.data?.data?.length === 0))
        )
            setIsErrorModalOpen(true);
        return () => setIsErrorModalOpen(false);
    }, [isSuccess, data?.ok]);

    const errorDescription =
        !data?.ok &&
        (data?.data ||
            data?.problem ||
            "Unexpected error happend while getting data");

    const totalPages = isCategoriesReady ? data?.data?.pages || 1 : 0;

    return (
        <div className="bg-white overflow-hidden w-full rounded p-8">
            <h1>Categories List</h1>
            <table className="w-full space-y-4 mt-8">
                {isCategoriesExists && (
                    <thead className="w-full">
                        <tr className="w-full">
                            <th className="flex-1 pb-3 table-row-item">
                                Product title
                            </th>
                            <th className="flex-1 hidden md:table-cell pb-3 table-row-item">
                                Product Count
                            </th>
                            <th
                                className="flex-1 table-row-item invisible"
                                aria-hidden="true"
                            >
                                open btn col
                            </th>
                        </tr>
                    </thead>
                )}
                {isLoading && <CategoriesListLoading />}
                <tbody>
                    {isCategoriesExists &&
                        data?.data?.data?.map((category, i, array) => (
                            <CategoryItem
                                key={category._id}
                                isLast={i === array.length - 1}
                                {...category}
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
            {isCategoriesReady &&
                (data.data?.data.length === 0 ? (
                    <p className="text-red-500 py-4 text-xl font-bold">
                        There is no product category exists
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

export default CategoriesList;

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type FC } from "react";
import { useNavigate } from "react-router";

import { categoriesApi } from "@Api";
import { AlertModal } from "@Components";
import CategoryItem from "./CategoryItem";
import CategoriesListLoading from "./Loading";

const CategoriesList: FC = () => {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoriesApi.getCategories(),
        // one hour
        staleTime: 3_600_000,
    });
    const isCategoriesReady = data?.ok && data.data;
    const isCategoriesExists = isCategoriesReady && data.data?.length !== 0;

    useEffect(() => {
        if (
            isSuccess &&
            (!data.ok || (isCategoriesReady && data.data?.length === 0))
        )
            setIsErrorModalOpen(true);
        return () => setIsErrorModalOpen(false);
    }, [isSuccess, data?.ok]);

    const errorDescription = !data?.ok
        ? data?.data ||
          data?.problem ||
          "Unexpected error happend while getting data"
        : data.data?.length === 0 && "There is no category exists";

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
                <tbody>
                    {isCategoriesExists &&
                        data?.data?.map((category, i, array) => (
                            <CategoryItem
                                key={category._id}
                                isLast={i === array.length - 1}
                                {...category}
                            />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoriesList;

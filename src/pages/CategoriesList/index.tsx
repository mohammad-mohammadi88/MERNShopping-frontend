import { useEffect, useState, type FC } from "react";

import { categoriesApi } from "@/api";
import { AlertModal } from "@/Components";
import { useQuery } from "@tanstack/react-query";
import CategoryItem from "./CategoryItem";
import CategoriesListLoading from "./Loading";

const CategoriesList: FC = () => {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoriesApi.getCategories(),
        // one hour
        staleTime: 3_600_000,
    });

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
        <div className="bg-white overflow-hidden w-full rounded p-8">
            <h1>Categories List</h1>
            <table className="w-full space-y-4 mt-8">
                <thead className="w-full">
                    <tr className="w-full">
                        <th className="flex-1 truncate pb-3 table-row-item">
                            Product title
                        </th>
                        <th className="flex-1 hidden md:table-cell truncate pb-3 table-row-item">
                            Product Count
                        </th>
                        <th
                            className="flex-1 truncate table-row-item invisible"
                            aria-hidden="true"
                        >
                            open btn col
                        </th>
                    </tr>
                </thead>
                {isLoading && <CategoriesListLoading />}
                <AlertModal
                    isOpen={isErrorModalOpen}
                    title="Error"
                    // it will always have error text and "" is just for typescript
                    description={errorDescription || ""}
                    role="error"
                    onClose={() => setIsErrorModalOpen(false)}
                />
                <tbody>
                    {data?.ok &&
                        data.data?.map((category) => (
                            <CategoryItem key={category._id} {...category} />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoriesList;

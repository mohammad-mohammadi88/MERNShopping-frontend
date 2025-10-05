import { type FC } from "react";

import { categoriesApi } from "@Api";
import { Loading, PaginatedPage } from "@Components";
import type { Category } from "@Types";
import { convertTime } from "@Utils";
import CategoryItem from "./CategoryItem";

const CategoriesList: FC = () => (
    <PaginatedPage<Category, {}>
        LoadingComponent={Loading}
        staleTime={convertTime(120)}
        label="category"
        DatumItemComponent={CategoryItem}
        apiCall={({ page, perPage }) =>
            categoriesApi.getCategories({ page, perPage })
        }
    >
        <th className="flex-1 pb-3 table-row-item">Product title</th>
        <th className="flex-1 hidden md:table-cell pb-3 table-row-item">
            Product Count
        </th>
        <th className="flex-1 table-row-item invisible" aria-hidden="true">
            open btn col
        </th>
    </PaginatedPage>
);
export default CategoriesList;

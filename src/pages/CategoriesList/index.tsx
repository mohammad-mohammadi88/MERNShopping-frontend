import { type FC } from "react";

import { categoriesApi } from "@Api";
import { PaginatedPage } from "@Components";
import { RowItem } from "@TableComponents";
import type { Category } from "@Types";
import { convertTime } from "@Utils";
import CategoryItem from "./CategoryItem";
import CategoriesLoading from "./Loading";

const CategoriesList: FC = () => (
    <PaginatedPage<Category, {}>
        LoadingComponent={CategoriesLoading}
        staleTime={convertTime(120)}
        label="category"
        DatumItemComponent={CategoryItem}
        apiCall={({ page, perPage }) =>
            categoriesApi.getCategories({ page, perPage })
        }
    >
        <RowItem children="Product Title" isHeading />
        <RowItem children="Product Count" isHeading hidden MD />
        <RowItem children="open" inVisible isHeading />
    </PaginatedPage>
);
export default CategoriesList;

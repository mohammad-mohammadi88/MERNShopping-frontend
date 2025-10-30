import { type FC } from "react";

import { categoriesApi } from "@Api";
import { PaginatedPage } from "@Components";
import { RowItem } from "@TableComponents";
import type { Category } from "@Types";
import { convertTime } from "@Utils";
import CategoryItem from "./CategoryItem";
import CategoriesLoading from "./Loading";

const searchFields: string[] = ["title", "attributes"];
const CategoriesList: FC = () => (
    <PaginatedPage<Category, {}>
        LoadingComponent={CategoriesLoading}
        fields={searchFields}
        staleTime={convertTime(120)}
        label="categorys"
        DatumItemComponent={CategoryItem}
        apiCall={({ status, ...params }) => categoriesApi.getCategories(params)}
    >
        <RowItem children="Product Title" isHeading />
        <RowItem children="Product Count" isHeading hidden MD />
        <RowItem children="open" inVisible isHeading />
    </PaginatedPage>
);
export default CategoriesList;

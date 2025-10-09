import type { FC } from "react";

import { categoriesApi } from "@Api";
import { NewDatumPage } from "@Components";
import { AddCategoryLogic } from "@Forms";

const NewCategory: FC = () => (
    <NewDatumPage
        NewDatumLogic={AddCategoryLogic}
        apiCall={categoriesApi.postCategory}
        datumName="Category"
        queryName="categories"
    />
);

export default NewCategory;

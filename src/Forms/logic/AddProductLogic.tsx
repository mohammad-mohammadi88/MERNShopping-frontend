import type { ApiOkResponse } from "apisauce";
import type { FC } from "react";

import type { AddProductValue, Category, GetDataWithPagination } from "@Types";
import ProductLogic from "../contracts/ProductLogic";

interface Props {
    handleSubmit: (values: AddProductValue) => void;
    categories: ApiOkResponse<GetDataWithPagination<Category>>;
}

const initialValues: AddProductValue = {
    attrs: [],
    gallery: [],
    // to show an empty field
    quantity: "" as unknown as number,
    price: "" as unknown as number,
    productCategory: "",
    thumbnail: [],
    title: "",
    colors: [],
};

const AddProductLogic: FC<Props> = (props) => (
    <ProductLogic {...props} initialValues={initialValues} />
);

export default AddProductLogic;

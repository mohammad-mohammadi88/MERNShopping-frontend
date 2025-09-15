import type { ApiOkResponse } from "apisauce";
import type { FC } from "react";

import type { AddProductValue, Category } from "@Types";
import ProductLogic from "../contracts/ProductLogic";

interface Props {
    handleSubmit: (values: AddProductValue) => void;
    categories: ApiOkResponse<Category[]>;
}

const initialValues: AddProductValue = {
    attrs: [],
    gallery: [],
    // to show an empty field
    price: "" as unknown as number,
    productCategory: "",
    thumbnail: [],
    title: "",
};

const AddProductLogic: FC<Props> = (props) => (
    <ProductLogic {...props} initialValues={initialValues} />
);

export default AddProductLogic;

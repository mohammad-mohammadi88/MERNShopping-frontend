import type { ApiOkResponse } from "apisauce";
import type { FC } from "react";

import type { AddProductValue, Category, EditProductValue } from "@Types";
import Product from "../contracts/Product";

interface Props {
    handleSubmit: (values: AddProductValue) => void;
    categories: ApiOkResponse<Category[]>;
    initialValues: EditProductValue;
}

const AddProductLogic: FC<Props> = (props) => (
    <Product {...props} role="edit" />
);

export default AddProductLogic;

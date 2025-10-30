import type { FC } from "react";

import { productsApi } from "@Api";
import { DeleteDatumBtn } from "@Components";
import type { ID } from "@Types";
import ProductEditBtn from "./ProductEditBtn";

const ShowActionBtns: FC<ID> = ({ _id }) => (
    <div className="mt-4 block">
        <DeleteDatumBtn
            navigateUrl="/products"
            apiCall={productsApi.deleteProductById}
            queryKey={["products", "page"]}
            datumName="product"
            id={_id}
        />
        <ProductEditBtn id={_id} />
    </div>
);

export default ShowActionBtns;

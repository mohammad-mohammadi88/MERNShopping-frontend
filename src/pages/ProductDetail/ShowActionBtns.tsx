import type { FC } from "react";

import type { ID } from "@Types";
import ProductDeleteBtn from "./ProductDeleteBtn";
import ProductEditBtn from "./ProductEditBtn";

const ShowActionBtns: FC<ID> = ({ _id }) => (
    <div className="mt-4 block">
        <ProductDeleteBtn id={_id} />
        <ProductEditBtn id={_id} />
    </div>
);

export default ShowActionBtns;

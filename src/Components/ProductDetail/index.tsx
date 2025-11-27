import type { FC } from "react";

import { Product } from "@Types";
import AddToOrder from "./AddToOrder";
import ShowAttrs from "./ShowAttrs";
import ShowImages from "./ShowImages";
import ShowProductBasics from "./ShowProductBasics";

const ProductDetail: FC<Product> = ({
    thumbnail,
    gallery,
    _id,
    colors,
    attrs,
    ...info
}) => (
    <div className="flex flex-col space-y-4">
        <div className="flex font-bold text-lg flex-col md:flex-row space-x-4 space-y-4">
            <div className="w-full md:w-1/2 lg:w-1/3">
                <ShowImages images={[thumbnail, ...gallery]} />
            </div>
            <div className="w-full space-y-2 md:w-1/2 lg:w-2/3">
                <ShowProductBasics {...info} />
                <AddToOrder _id={_id} colors={colors} />
            </div>
        </div>
        <ShowAttrs attrs={attrs} />
    </div>
);

export default ProductDetail;

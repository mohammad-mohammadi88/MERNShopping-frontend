import type { FC } from "react";

import { type RowItemProps, ListArrayField, RowItem } from "@Components";
import type { FullOrder } from "@Types";
import { ShowOrderProduct } from "./Order";

interface Props {
    products: FullOrder["products"];
}
const ProductItemsHeading: RowItemProps[] = [
    { inVisible: true, className: "w-16", hidden: true, MD: true },
    { children: "Title" },
    { children: "Color (Hex)", SM: false, MD: true },
    { children: "Count" },
];
const OrderProductDetails: FC<Props> = ({ products }) => (
    <ListArrayField arrayLength={products.length} title="Ordered Products">
        <table className="w-full">
            <thead>
                <tr>
                    {ProductItemsHeading.map((props, i) => (
                        <RowItem key={i} isHeading {...props} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ShowOrderProduct {...product} key={product._id} />
                ))}
            </tbody>
        </table>
    </ListArrayField>
);

export default OrderProductDetails;

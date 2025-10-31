import type { FC } from "react";

import { ShowCurrentStatus } from "@Components";
import { productStatus, productStatusColors } from "@Constants";
import type { Product } from "@Types";
import {
    ShowActionBtns,
    ShowAttrs,
    ShowColors,
    ShowGalleryImages,
    ShowPrices,
    ShowThumbnail,
} from "./Product";

const ProductItem: FC<Product> = ({
    gallery,
    attrs,
    colors,
    _id,
    productCategory,
    quantity,
    thumbnail,
    title,
    price,
    salePrice,
    status,
}) => (
    <>
        <div className="space-y-4">
            <ShowThumbnail thumbnail={thumbnail} />
            <div className="text-lg space-y-0.5">
                <p>
                    <strong>Title: </strong> {title}
                </p>
                <p>
                    <strong>Category: </strong> {productCategory.title}
                </p>
                <p>
                    <strong>Quantity: </strong> {quantity}
                </p>
            </div>
            <ShowCurrentStatus
                status={status}
                statusColors={productStatusColors}
                statuses={productStatus}
            />

            <ShowPrices price={price} salePrice={salePrice} />
        </div>

        <ShowActionBtns _id={_id} />

        <ShowGalleryImages gallery={gallery} />

        <ShowColors colors={colors} />

        <ShowAttrs attrs={attrs} />
    </>
);

export default ProductItem;

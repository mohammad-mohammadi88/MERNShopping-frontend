import type { FC } from "react";

import { Product } from "@Types";
import { ShowPrice } from "..";

type Props = Pick<Product, "price" | "productCategory" | "salePrice" | "title">;
const ShowProductBasics: FC<Props> = ({
    price,
    productCategory,
    salePrice,
    title,
}) => (
    <>
        <h1>{title}</h1>
        <p>Category: {productCategory.title}</p>
        <ShowPrice price={price} salePrice={salePrice} />
    </>
);

export default ShowProductBasics;

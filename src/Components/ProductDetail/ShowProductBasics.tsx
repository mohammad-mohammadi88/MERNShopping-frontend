import { Product } from "@/types";
import type { FC } from "react";

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
        <div className="flex space-x-2">
            <div>Price: </div>
            {salePrice !== price && (
                <div className="flex space-x-2 items-center">
                    <del>{price}$</del>
                    <strong>-&gt;</strong>
                </div>
            )}
            <p>{salePrice}$</p>
        </div>
    </>
);

export default ShowProductBasics;

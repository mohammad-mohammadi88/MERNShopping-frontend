"use client";

import Image from "next/image";
import type { FC } from "react";

import { CartOrderProduct } from "@Types";
import { ShowColor, ShowPrice } from "..";
import RemoveProduct from "./RemoveProduct";

interface Props extends CartOrderProduct {
    index: number;
}
const CardProduct: FC<Props> = ({
    count,
    product: { _id, title, thumbnail, productCategory, ...pricing },
    color,
    index,
}) => (
    <div className="card-product">
        <Image
            height={1000}
            width={1000}
            className="h-auto rounded-lg md:h-full! w-full md:w-1/3 xl:w-1/4"
            alt={title + " image"}
            src={thumbnail}
        />
        <div className="flex mt-2 md:mt-0 flex-col justify-between h-full w-full md:w-2/3 xl:w-3/4 font-bold text-xl">
            <div className="space-y-1 pl-2">
                <h3 className="text-2xl">{title}</h3>
                <p>Category: {productCategory}</p>
                <div className="flex space-x-2">
                    <span>Price: </span>
                    <ShowPrice {...pricing} />
                </div>
                <p>Count: {count}</p>
                {color && (
                    <div className="flex items-center space-x-1">
                        <span>Color:</span> <ShowColor backgroundColor={color.color} />
                    </div>
                )}
            </div>
	    {/*<div className="flex justify-between">
                <div />
                <RemoveProduct index={index} />
            </div>*/}
        </div>
    </div>
);

export default CardProduct;

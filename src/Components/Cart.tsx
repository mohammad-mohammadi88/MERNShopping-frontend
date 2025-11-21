import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import { Product } from "@Types";

interface ColorProps {
    backgroundColor: `#${string}`;
}
const Color = ({ backgroundColor }: ColorProps) => (
    <div style={{ backgroundColor }} className="size-5 rounded-full" />
);

const Cart: FC<Product> = ({
    _id,
    price,
    salePrice,
    productCategory: { title: categoryTitle },
    title,
    thumbnail,
    colors,
}) => (
    <Link href={`/product/${_id}`} className="cart">
        <div className="cart-inner">
            <Image
                width={300}
                height={200}
                src={thumbnail}
                className="w-full rounded-xl h-72"
                alt={title + " image"}
            />
            <div className="space-y-2 text-lg text-gray-900 font-semibold">
                <p>{title}</p>
                <p>Category: {categoryTitle}</p>
                <div className="flex justify-between">
                    <div className="flex space-x-2">
                        {salePrice !== price && (
                            <div className="flex space-x-2 items-center">
                                <del>{price}$</del>
                                <strong>-&gt;</strong>
                            </div>
                        )}
                        <p>{salePrice}$</p>
                    </div>
                    <div className="flex space-x-1">
                        {colors.slice(0, 3).map(({ color, _id }) => (
                            <Color key={_id} backgroundColor={color} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Link>
);
export default Cart;

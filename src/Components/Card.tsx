import Image from "next/image";
import Link from "next/link";
import type { FC, Ref } from "react";

import { Product } from "@Types";
import { ShowColor, ShowPrice } from ".";

interface Props extends Product {
    ref: Ref<HTMLDivElement> | null;
}
const Card: FC<Props> = ({
    _id,
    productCategory: { title: categoryTitle },
    title,
    thumbnail,
    colors,
    ref,
    ...pricing
}) => (
    <Link href={`/product/${_id}`} className="card">
        <div className="card-inner" ref={ref}>
            <Image
                width={300}
                height={200}
                src={thumbnail}
                className="w-full rounded-xl h-72 sm:h-60"
                alt={title + " image"}
            />
            <div className="space-y-2 text-lg text-gray-900 font-semibold">
                <p>{title}</p>
                <p>Category: {categoryTitle}</p>
                <div className="flex justify-between">
                    <ShowPrice {...pricing} />
                    <div className="flex space-x-1">
                        {colors.slice(0, 3).map(({ color, _id }) => (
                            <ShowColor key={_id} backgroundColor={color} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Link>
);
export default Card;

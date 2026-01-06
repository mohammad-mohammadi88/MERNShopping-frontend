"use client";

import { TrashIcon } from "@heroicons/react/20/solid";
import type { FC } from "react";

import orderCart from "@/utils/cart";

interface Props {
    index: number;
}

const RemoveProduct: FC<Props> = ({ index }) => (
    <button
        className="bg-red-500 flex items-center space-x-1 rounded-xl px-3 py-3 text-white"
        onClick={() => orderCart.removeProduct(index)}
    >
        <TrashIcon height={20} />
        <span>Remove</span>
    </button>
);

export default RemoveProduct;

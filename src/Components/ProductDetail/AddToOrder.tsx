"use client";

import clsx from "clsx";
import { useState, type FC } from "react";

import orderCart from "@/utils/cart";
import { CartOrderProduct, ProductColor, type Product } from "@Types";

interface ColorProps {
    isSelected: boolean;
    selectColor: () => void;
    backgroundColor: string;
}
const ShowColor: FC<ColorProps> = ({
    isSelected,
    selectColor,
    backgroundColor,
}) => (
    <div className={clsx(isSelected && "-pb-1 border-b-2")}>
        <button
            style={{ backgroundColor }}
            className="size-5 cursor-pointer rounded-full"
            onClick={selectColor}
            type="button"
        />
    </div>
);

type Props = Pick<Product, "_id" | "colors"> & CartOrderProduct["product"];

const AddToOrder: FC<Props> = ({ colors, ...product }) => {
    const [selectedColor, setSelectedColor] = useState<
        ProductColor | undefined
    >(colors[0]);
    const [count, setCount] = useState<number | null>(null);

    const isValidCount =
        typeof count === "number" && count > 0 && Number.isInteger(count);
    const handleNewOrder = () => {
        if (!isValidCount)
            return alert("Product count should be valid integer");
        orderCart.addProduct({ count, color: selectedColor, product });
        alert("Your product added to Cart");
    };

    return (
        <div>
            {colors.length > 0 && (
                <div className="flex space-x-2">
                    <h3>Colors: </h3>
                    <div className="flex space-x-2">
                        {colors.map((color) => (
                            <ShowColor
                                key={color._id}
                                selectColor={() => setSelectedColor(color)}
                                isSelected={selectedColor?._id === color._id}
                                backgroundColor={color.color}
                            />
                        ))}
                    </div>
                </div>
            )}
            <div className="my-4">
                <div className="flex items-center space-x-2">
                    <strong>Count: </strong>
                    <input
                        className="border rounded-lg w-20 px-2 py-1"
                        type="number"
                        onChange={(e) => setCount(Number(e.target.value))}
                        value={count ?? ""}
                    />
                </div>
                {count !== null && count <= 0 && (
                    <p className="text-red-500">
                        Product count should be positive
                    </p>
                )}
                {count !== null && !Number.isInteger(count) && (
                    <p className="text-red-500">
                        Product count cannot be float
                    </p>
                )}
            </div>
            <button
                onClick={handleNewOrder}
                className="bg-red-600 px-3 rounded-lg text-white py-1.5 font-semibold text-xl cursor-pointer hover:bg-red-700 duration-150"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default AddToOrder;

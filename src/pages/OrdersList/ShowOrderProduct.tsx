import { getContrastColor } from "@/utils";
import type { OrderProduct } from "@Types";
import type { FC } from "react";

const ShowOrderProduct: FC<OrderProduct> = ({
    product: { thumbnail, title },
    color,
    count,
}) => (
    <tr className="border border-gray-300">
        <td className="!size-16 sm:hidden md:flex items-center flex justify-center">
            <img
                src={thumbnail}
                className="!size-12 rounded-full"
                alt="product image"
            />
        </td>
        <td className="table-row-item">{title}</td>
        <td className="table-row-item sm:hidden md:table-cell">
            {color ? (
                <div
                    className="p-2"
                    style={{
                        backgroundColor: color.color,
                        color: getContrastColor(color.color),
                    }}
                >
                    {color.title}
                </div>
            ) : (
                "--"
            )}
        </td>
        <td className="table-row-item">{count}</td>
    </tr>
);

export default ShowOrderProduct;

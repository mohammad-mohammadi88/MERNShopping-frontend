import { getContrastColor } from "@/utils";
import { RowItem } from "@Components";
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
        <RowItem children={title} />
        <RowItem SM={false} MD>
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
        </RowItem>
        <RowItem children={count} />
    </tr>
);

export default ShowOrderProduct;

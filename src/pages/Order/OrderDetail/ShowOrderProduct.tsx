import type { FC } from "react";
import { useNavigate } from "react-router";

import { RowItem } from "@Components";
import type { OrderProduct } from "@Types";
import { getContrastColor } from "@Utils";

const ShowOrderProduct: FC<OrderProduct> = ({
    product: { thumbnail, title, _id },
    color,
    count,
}) => {
    const navigate = useNavigate();
    return (
        <tr
            onClick={() => navigate(`/product/${_id}`)}
            className="border cursor-pointer hover:bg-gray-200 duration-200 h-16 border-gray-300"
        >
            <td className="!size-16 hidden md:flex items-center justify-center">
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
};

export default ShowOrderProduct;

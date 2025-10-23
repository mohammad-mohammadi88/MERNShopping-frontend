import type { FC } from "react";
import { useNavigate } from "react-router";

import { RowItem, Status } from "@Components";
import {
    productStatus,
    productStatusColors,
    type ProductStatus,
} from "@Constants";
import type { Product } from "@Types";
import { getStatusName } from "@Utils";

interface Props extends Product {
    isLast: boolean;
}
const ProductItem: FC<Props> = ({
    salePrice,
    thumbnail,
    _id,
    price,
    quantity,
    status,
    productCategory: { title: categoryTitle },
    title,
}) => {
    const navigate = useNavigate();
    const statusName = getStatusName(productStatus, status);
    return (
        <tr
            onClick={() => navigate(`/product/${_id}`)}
            className="border-y border-gray-300 cursor-pointer hover:bg-gray-200 duration-300 max-w-full"
        >
            <td className="size-16 sm:hidden md:flex items-center flex justify-center">
                <img
                    src={thumbnail}
                    className="size-12 rounded-full"
                    alt="product image"
                />
            </td>
            <RowItem children={title} />
            <RowItem children={quantity} hidden LG />
            <RowItem hidden LG>
                <Status<ProductStatus>
                    currentStatus={statusName}
                    statusColors={productStatusColors}
                />
            </RowItem>
            <RowItem children={categoryTitle} hidden XL />
            <RowItem children={price} hidden XXL />
            <RowItem children={salePrice} hidden MD />
        </tr>
    );
};

export default ProductItem;

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";
import type { FC } from "react";

import { RowChevron, RowItem, Status, type RowItemProps } from "@Components";
import {
    productStatus,
    productStatusColors,
    type ProductStatus,
    type ProductStatusKeys,
} from "@Constants";
import type { Product } from "@Types";
import ProductExtraField from "./ProductExtraField";

interface Props extends Product {
    isLast: boolean;
}
const ProductItem: FC<Props> = ({
    salePrice,
    thumbnail,
    gallery,
    colors,
    price,
    attrs,
    quantity,
    status,
    productCategory: { title: categoryTitle },
    _id,
    title,
    isLast,
}) => {
    const statusName = Object.keys(productStatus).find(
        (c) => productStatus[c as ProductStatusKeys] === status
    ) as ProductStatusKeys;

    const productItemHeading: RowItemProps[] = [
        { children: title },
        { children: quantity, hidden: true, LG: true },
        {
            children: (
                <Status<ProductStatus>
                    currentStatus={statusName}
                    statusColors={productStatusColors}
                />
            ),
            hidden: true,
            LG: true,
        },
        { children: categoryTitle, hidden: true, XL: true },
        { children: price, hidden: true, XXL: true },
        { children: salePrice, SM: false, MD: true },
        { children: <RowChevron />, className: "!h-16" },
    ];
    return (
        <Disclosure>
            <DisclosureButton
                as={"tr"}
                className="border-y group cursor-pointer hover:bg-gray-200 duration-300 border-gray-300 ax-w-full"
            >
                <td className="size-16 sm:hidden md:flex items-center flex justify-center">
                    <img
                        src={thumbnail}
                        className="size-12 rounded-full"
                        alt="product image"
                    />
                </td>
                {productItemHeading.map((props, i) => (
                    <RowItem key={i} {...props} />
                ))}
            </DisclosureButton>
            <DisclosurePanel
                as="tr"
                transition
                className={
                    "transition overflow-hidden duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 w-full max-h-auto"
                }
            >
                <td
                    colSpan={8}
                    className={clsx(
                        "pl-4 sm:pl-1 md:pl-4",
                        isLast ? "pb-0" : "pb-8"
                    )}
                >
                    <ProductExtraField
                        id={_id}
                        attrs={attrs}
                        gallery={gallery}
                        colors={colors}
                    />
                </td>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default ProductItem;

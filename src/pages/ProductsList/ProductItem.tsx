import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import type { FC } from "react";

import { productStatus, type ProductStatusKeys } from "@Constants";
import type { Product } from "@Types";
import { capitalize } from "@Utils";
import ProductExtraField from "./ProductExtraField";

interface Props extends Product {
    isLast: boolean;
}
const ProductItem: FC<Props> = ({
    price,
    salePrice,
    thumbnail,
    gallery,
    colors,
    attrs,
    quantity,
    status,
    _id,
    title,
    isLast,
}) => {
    const statusName = capitalize(
        Object.keys(productStatus)
            .find((c) => productStatus[c as ProductStatusKeys] === status)
            ?.toLowerCase() as string
    );
    return (
        <Disclosure>
            <DisclosureButton
                as={"tr"}
                className="border group cursor-pointer hover:bg-gray-200 duration-300 border-gray-300 ax-w-full"
            >
                <td className="size-16 sm:hidden md:flex items-center flex justify-center">
                    <img
                        src={thumbnail}
                        className="size-12 rounded-full"
                        alt="product image"
                    />
                </td>
                <td className="table-row-item">{title}</td>

                <td className="hidden lg:table-cell table-row-item">
                    {quantity}
                </td>
                <td className="hidden lg:table-cell table-row-item">
                    {statusName}
                </td>
                <td className="hidden xl:table-cell table-row-item">{price}</td>
                <td className="table-row-item sm:hidden md:table-cell !border-r-0">
                    {salePrice}
                </td>
                <td className="table-row-item-no-border !h-16 relative">
                    <ChevronDownIcon
                        height={26}
                        className="duration-200 absolute right-2 top-1/2 -translate-y-1/2 ease-out group-data-open:-rotate-180"
                    />
                </td>
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

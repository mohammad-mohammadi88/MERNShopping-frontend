import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import type { FC } from "react";

import { productStatus, type ProductStatusKeys } from "@/constants";
import useWindowWidth from "@/hooks";
import capitalize from "@/utils/capitalize";
import type { Product } from "@Types";

interface Props extends Product {
    isLast: boolean;
}
const ProductItem: FC<Props> = ({
    price,
    salePrice,
    thumbnail,
    quantity,
    status,
    title,
    isLast,
}) => {
    const windowWidth = useWindowWidth();
    const statusName = capitalize(
        Object.keys(productStatus)
            .find((c) => productStatus[c as ProductStatusKeys] === status)
            ?.toLowerCase() as string
    );
    return (
        <Disclosure>
            <DisclosureButton
                as={"tr"}
                className="border group cursor-pointer hover:bg-gray-200 duration-300 border-gray-300 w-full"
            >
                <td className="size-16 items-center flex justify-center">
                    <img src={thumbnail} className="size-12 rounded-full" />
                </td>
                <td className="border border-gray-300 truncate table-row-item">
                    {title}
                </td>

                <td className="border border-gray-300 hidden lg:table-cell truncate table-row-item">
                    {quantity}
                </td>
                <td className="border border-gray-300 hidden lg:table-cell truncate table-row-item">
                    {statusName}
                </td>
                <td className="border border-gray-300 hidden xl:table-cell truncate table-row-item">
                    {price}
                </td>
                <td className="table-row-item sm:hidden md:table-cell border border-r-0 border-gray-300">
                    {salePrice}
                </td>
                <td className="table-row-item !h-16 relative">
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
                    "transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 w-full max-h-auto"
                }
            >
                <td
                    colSpan={windowWidth < 768 ? 2 : 3}
                    className={clsx("pl-4", isLast ? "pb-0" : "pb-8")}
                >
                    {/* {attrGroups.map((group, index) => (
                        <CategoryGroupItem
                            key={group._id}
                            isLast={index >= attrGroups.length - 1}
                            {...group}
                        />
                    ))} */}
                </td>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default ProductItem;

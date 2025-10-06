import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";
import type { FC } from "react";

import { useWindowWidth } from "@Hooks";
import { RowChevron, RowItem } from "@TableComponents";
import type { Category } from "@Types";
import CategoryGroupItem from "./CategoryGroupItem";

interface Props extends Category {
    isLast: boolean;
}
const CategoryItem: FC<Props> = ({
    attrGroups,
    title,
    isLast,
    totalProducts,
}) => {
    const windowWidth = useWindowWidth();
    return (
        <Disclosure>
            <DisclosureButton
                as={"tr"}
                className="border-y group cursor-pointer hover:bg-gray-200 duration-300 border-gray-300 w-full"
            >
                <RowItem children={title} />
                <RowItem hidden MD children={totalProducts} />
                <RowItem children={<RowChevron />} />
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
                    {attrGroups.map((group, index) => (
                        <CategoryGroupItem
                            key={group._id}
                            isLast={index >= attrGroups.length - 1}
                            {...group}
                        />
                    ))}
                </td>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default CategoryItem;

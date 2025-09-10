import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { FC } from "react";

import type { Category } from "@Types";
import CategoryGroupItem from "./CategoryGroupItem";

const CategoryItem: FC<Category> = ({ attrGroups, title, totalProducts }) => (
    <Disclosure>
        <DisclosureButton
            as={"tr"}
            className="border cursor-pointer border-gray-300 w-full"
        >
            <td className="table-row-item">{title}</td>
            <td className="table-row-item hidden md:table-cell">
                {totalProducts}
            </td>
            <td className="table-row-item flex items-center justify-end pr-2">
                <ChevronDownIcon height={26} />
            </td>
        </DisclosureButton>
        <DisclosurePanel
            as="tr"
            transition
            className={
                "transition flex flex-col duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 w-full origin-top max-h-auto"
            }
        >
            {attrGroups.map((group, index) => (
                <CategoryGroupItem
                    key={group._id}
                    isLast={index < attrGroups.length - 1}
                    {...group}
                />
            ))}
            {attrGroups.map((group, index) => (
                <CategoryGroupItem
                    key={group._id}
                    isLast={index < attrGroups.length - 1}
                    {...group}
                />
            ))}
            {attrGroups.map((group, index) => (
                <CategoryGroupItem
                    key={group._id}
                    isLast={index < attrGroups.length - 1}
                    {...group}
                />
            ))}
        </DisclosurePanel>
    </Disclosure>
);

export default CategoryItem;

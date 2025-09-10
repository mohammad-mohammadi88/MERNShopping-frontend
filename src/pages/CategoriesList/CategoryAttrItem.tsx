import type { FC } from "react";

import type { CategoryAttr } from "@Types";

const iconGenerator = (value: boolean): string => (value ? "✔️" : "❌");
const CategoryAttrItem: FC<CategoryAttr> = ({
    description,
    hasPrice,
    filterable,
    title,
}) => {
    return (
        <tr className="w-full flex-1">
            <td className="border border-gray-300 table-row-item">{title}</td>
            <td className="border border-gray-300 table-row-item hidden md:table-cell">
                {description}
            </td>
            <td className="border border-gray-300 table-row-item text-center hidden lg:table-cell">
                {iconGenerator(!!filterable)}
            </td>
            <td className="border border-gray-300 table-row-item text-center hidden xl:table-cell">
                {iconGenerator(!!hasPrice)}
            </td>
        </tr>
    );
};

export default CategoryAttrItem;

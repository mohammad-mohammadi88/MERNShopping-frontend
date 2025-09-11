import clsx from "clsx";
import type { FC } from "react";

import type { CategoryGroup } from "@Types";
import CategoryAttrItem from "./CategoryAttrItem";

const CategoryGroupItem: FC<CategoryGroup & { isLast: boolean }> = ({
    attrs,
    title,
    isLast,
}) => (
    <div className={clsx(!isLast && "border-b pb-4 border-b-gray-500")}>
        <h2 className="font-semibold text-xltruncate pt-5 pb-3">{title}</h2>
        <table className="pl-3 w-full">
            <thead>
                <tr>
                    <th className="border border-gray-300 table-row-item">
                        Title
                    </th>
                    <th className="border border-gray-300 table-row-item hidden md:table-cell">
                        Description
                    </th>
                    <th className="border border-gray-300 pr-2 table-row-item hidden lg:table-cell">
                        Filterable
                    </th>
                    <th className="border border-gray-300 pr-2 table-row-item hidden xl:table-cell">
                        Has Price
                    </th>
                </tr>
            </thead>
            <tbody>
                {attrs.map((attr) => (
                    <CategoryAttrItem key={attr._id} {...attr} />
                ))}
            </tbody>
        </table>
    </div>
);

export default CategoryGroupItem;

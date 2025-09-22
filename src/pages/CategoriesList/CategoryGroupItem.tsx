import clsx from "clsx";
import type { FC } from "react";

import type { CategoryGroup } from "@Types";

const CategoryGroupItem: FC<CategoryGroup & { isLast: boolean }> = ({
    attrs,
    title,
    isLast,
}) => (
    <div className={clsx(!isLast && "border-b pb-4 border-b-gray-500")}>
        <h2 className="font-semibold text-xltruncate pt-5 pb-3">{title}</h2>
        <div className="pl-2 space-y-1">
            {attrs.map((attr) => (
                <div className="w-full">{attr}</div>
            ))}
        </div>
    </div>
);

export default CategoryGroupItem;

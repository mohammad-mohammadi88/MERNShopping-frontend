import type { FC } from "react";

const rowClass = "flex-1 pl-3 h-10 text-end";
const rowItemClass = "w-20 h-2 rounded bg-gray-500";

const Row = (_: any, i: number) => (
    <tr key={i} className="border border-gray-300 w-full">
        <td className={rowClass}>
            <div className={rowItemClass} />
        </td>
        <td className={rowClass}>
            <div className={rowItemClass} />
        </td>
        <td className={rowClass} />
    </tr>
);
const arr = [1, 2, 3, 4, 5, 6];

const CategoriesListLoading: FC = () => (
    <tbody className="animate-pulse w-full" children={arr.map(Row)} />
);

export default CategoriesListLoading;

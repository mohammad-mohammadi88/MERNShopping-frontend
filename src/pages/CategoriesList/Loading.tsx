import type { FC } from "react";

const Row = (_: any, i: number) => (
    <tr key={i} className="border border-gray-300 w-full">
        <td className="table-row-item">
            <div className="loading-table-row-item" />
        </td>
        <td className="table-row-item hidden md:table-cell">
            <div className="loading-table-row-item" />
        </td>
        <td className="table-row-item" />
    </tr>
);
const arr = [1, 2, 3, 4, 5, 6];

const CategoriesListLoading: FC = () => (
    <tbody className="animate-pulse w-full" children={arr.map(Row)} />
);

export default CategoriesListLoading;

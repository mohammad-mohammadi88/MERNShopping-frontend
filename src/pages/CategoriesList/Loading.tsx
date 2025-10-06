import type { FC } from "react";

import { RowItem } from "@TableComponents";

const Row = (_: any, i: number) => (
    <tr key={i} className="border border-gray-300 w-full">
        <RowItem />
        <RowItem />
        <RowItem item={false} />
    </tr>
);
const arr = [1, 2, 3, 4, 5, 6];

const CategoriesLoading: FC = () => (
    <tbody className="animate-pulse w-full" children={arr.map(Row)} />
);

export default CategoriesLoading;

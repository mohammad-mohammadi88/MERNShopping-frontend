import type { FC } from "react";

import { RowItem } from "@TableComponents";
import type { ProductAttribute } from "@Types";

const ShowAttr: FC<ProductAttribute> = ({ title, description }) => (
    <tr className="border-y border-gray-300">
        <RowItem children={title} />
        <RowItem children={description} />
    </tr>
);

export default ShowAttr;

import type { FC } from "react";

import { RowItem } from "@TableComponents";
import type { ProductColor } from "@Types";
import { getContrastColor } from "@Utils";

const ShowColor: FC<ProductColor> = ({ title, color, priceEffect }) => (
    <tr style={{ backgroundColor: color, color: getContrastColor(color) }}>
        <RowItem hidden MD children={title} />
        <RowItem children={color} />
        <RowItem hidden SM children={String(priceEffect)} />
    </tr>
);

export default ShowColor;

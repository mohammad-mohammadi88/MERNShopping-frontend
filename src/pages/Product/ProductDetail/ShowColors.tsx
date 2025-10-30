import type { FC } from "react";

import { ListArrayField, RowItem, type RowItemProps } from "@/Components";
import type { ProductColor } from "@Types";
import { getContrastColor } from "@Utils";

const ShowColor: FC<ProductColor> = ({ title, color, priceEffect }) => (
    <tr style={{ backgroundColor: color, color: getContrastColor(color) }}>
        <RowItem hidden MD children={title} />
        <RowItem children={color} />
        <RowItem hidden SM children={String(priceEffect)} />
    </tr>
);

const colorItems: RowItemProps[] = [
    { children: "Color Name", hidden: true, MD: true },
    { children: "Color (Hex)" },
    { children: "Price Effect", hidden: true, SM: true },
];
const ShowColors: FC<{ colors: ProductColor[] }> = ({ colors }) => (
    <ListArrayField arrayLength={colors.length} title="Colors">
        <table className="w-full">
            <thead>
                <tr>
                    {colorItems.map((props, i) => (
                        <RowItem key={i} isHeading {...props} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {colors.map((color) => (
                    <ShowColor key={color._id} {...color} />
                ))}
            </tbody>
        </table>
    </ListArrayField>
);

export default ShowColors;

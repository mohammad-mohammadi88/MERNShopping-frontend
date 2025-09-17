import type { ProductColor } from "@Types";
import type { FC } from "react";

const ShowColor: FC<ProductColor> = ({ title, color, priceEffect }) => (
    <tr style={{ backgroundColor: color }}>
        <td className="sm:hidden md:table-cell table-row-item">{title}</td>
        <td className="table-row-item">{color}</td>
        <td className="table-row-item">{priceEffect}</td>
    </tr>
);

export default ShowColor;

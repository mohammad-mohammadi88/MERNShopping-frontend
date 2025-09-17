import type { ProductAttribute } from "@Types";
import type { FC } from "react";

const ShowAttr: FC<ProductAttribute> = ({ title, description }) => (
    <tr>
        <td className="border border-gray-300 table-row-item">{title}</td>
        <td className="border border-gray-300 table-row-item">{description}</td>
    </tr>
);

export default ShowAttr;

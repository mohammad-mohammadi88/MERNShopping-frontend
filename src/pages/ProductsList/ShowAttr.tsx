import type { ProductAttribute } from "@Types";
import type { FC } from "react";

const ShowAttr: FC<ProductAttribute> = ({ title, description }) => (
    <tr className="border-y border-gray-300">
        <td className="table-row-item">{title}</td>
        <td className="table-row-item">{description}</td>
    </tr>
);

export default ShowAttr;

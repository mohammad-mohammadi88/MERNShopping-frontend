import type { ProductAttribute } from "@Types";
import type { FC } from "react";

const ShowAttr: FC<ProductAttribute> = ({ title, description }) => (
    <tr>
        <td className="table-row-item">{title}</td>
        <td className="table-row-item">{description}</td>
    </tr>
);

export default ShowAttr;

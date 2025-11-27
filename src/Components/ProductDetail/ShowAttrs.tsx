import type { FC } from "react";

import { ProductAttribute } from "@Types";

interface Props {
    attrs: ProductAttribute[];
}
const ShowAttr: FC<ProductAttribute> = ({ title, description }) => (
    <tr className="border-y border-gray-300">
        <td className="px-3 truncate h-10 text-start" children={title} />
        <td className="px-3 truncate h-10 text-start" children={description} />
    </tr>
);

const ShowAttrs: FC<Props> = ({ attrs }) => (
    <table>
        <thead>
            <tr>
                <td
                    className="px-3 truncate h-10 text-start"
                    children="Title"
                />
                <td
                    className="px-3 truncate h-10 text-start"
                    children="Description"
                />
            </tr>
        </thead>
        <tbody>
            {attrs.map((attr) => (
                <ShowAttr key={attr._id} {...attr} />
            ))}
        </tbody>
    </table>
);

export default ShowAttrs;

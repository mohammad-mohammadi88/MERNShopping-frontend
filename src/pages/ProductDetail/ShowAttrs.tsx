import type { FC } from "react";

import { ListArrayField, RowItem } from "@Components";
import type { ProductAttribute } from "@Types";

const ShowAttr: FC<ProductAttribute> = ({ title, description }) => (
    <tr className="border-y border-gray-300">
        <RowItem children={title} />
        <RowItem children={description} />
    </tr>
);

const ShowAttrs: FC<{ attrs: ProductAttribute[] }> = ({ attrs }) => (
    <ListArrayField arrayLength={attrs.length} title="Attributes">
        <table className="w-full">
            <thead>
                <tr>
                    <RowItem children="Title" />
                    <RowItem children="Description" />
                </tr>
            </thead>
            <tbody>
                {attrs.map((attr) => (
                    <ShowAttr key={attr._id} {...attr} />
                ))}
            </tbody>
        </table>
    </ListArrayField>
);

export default ShowAttrs;

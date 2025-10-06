import type { FC } from "react";

import { ListArrayField, RowItem, type RowItemProps } from "@Components";
import type { ProductAttribute, ProductColor } from "@Types";
import {
    ProductDeleteBtn,
    ProductEditBtn,
    ShowAttr,
    ShowColor,
    ShowGalleryImage,
} from "./Product";

interface Props {
    gallery: string[];
    colors: ProductColor[];
    id: string;
    attrs: ProductAttribute[];
}

const colorItems: RowItemProps[] = [
    { children: "Color Name", SM: false, MD: true },
    { children: "Color (Hex)" },
    { children: "Price Effect" },
];
const ProductExtraField: FC<Props> = ({ gallery, attrs, colors, id }) => (
    <>
        <div className="mt-4 block">
            <ProductDeleteBtn id={id} />
            <ProductEditBtn id={id} />
        </div>
        <ListArrayField arrayLength={gallery.length} title="Gallery">
            <div className="flex overflow-x-scroll w-full sm:w-56 md:w-full space-x-2.5 pb-3 snap-x snap-mandatory scroll-container scrollbar-hide">
                {gallery.map((image) => (
                    <ShowGalleryImage url={image} key={image} />
                ))}
            </div>
        </ListArrayField>
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
    </>
);

export default ProductExtraField;

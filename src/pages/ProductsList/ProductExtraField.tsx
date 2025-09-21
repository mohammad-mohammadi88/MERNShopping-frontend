import type { FC } from "react";

import type { ProductAttribute, ProductColor } from "@Types";
import {
    ProductArrayField,
    ShowAttr,
    ShowColor,
    ShowGalleryImage,
} from "./Product";
import ProductDeleteBtn from "./ProductDeleteBtn";
import ProductEditBtn from "./ProductEditBtn";

interface Props {
    gallery: string[];
    colors: ProductColor[];
    id: string;
    attrs: ProductAttribute[];
}

const ProductExtraField: FC<Props> = ({ gallery, attrs, colors, id }) => (
    <>
        <div className="mt-4 block">
            <ProductDeleteBtn id={id} />
            <ProductEditBtn id={id} />
        </div>
        <ProductArrayField arrayLength={gallery.length} title="Gallery">
            <div className="flex overflow-x-scroll w-full sm:w-56 md:w-full space-x-2.5 pb-3 snap-x snap-mandatory scroll-container scrollbar-hide">
                {gallery.map((image) => (
                    <ShowGalleryImage url={image} key={image} />
                ))}
            </div>
        </ProductArrayField>
        <ProductArrayField arrayLength={colors.length} title="Colors">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="sm:hidden md:table-cell table-row-item">
                            Color Name
                        </th>
                        <th className="table-row-item">Color (Hex)</th>
                        <th className="table-row-item">Price Effect</th>
                    </tr>
                </thead>
                <tbody>
                    {colors.map((color) => (
                        <ShowColor key={color._id} {...color} />
                    ))}
                </tbody>
            </table>
        </ProductArrayField>
        <ProductArrayField arrayLength={attrs.length} title="Attributes">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="table-row-item">Title</th>
                        <th className="table-row-item">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {attrs.map((attr) => (
                        <ShowAttr key={attr._id} {...attr} />
                    ))}
                </tbody>
            </table>
        </ProductArrayField>
    </>
);

export default ProductExtraField;

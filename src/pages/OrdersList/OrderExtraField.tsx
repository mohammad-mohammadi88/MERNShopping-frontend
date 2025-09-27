import type { FC } from "react";

import type { OrdersStatusValues } from "@Constants";
import type { UserAddress } from "@Types";
import { ChangeStatus, ShowAddress } from "./Order";
// import { ListArrayField } from "@Components";
// import type { ProductAttribute, ProductColor } from "@Types";
// import {
//     ProductDeleteBtn,
//     ProductEditBtn,
//     ShowAttr,
//     ShowColor,
//     ShowGalleryImage,
// } from "./Product";

// interface Props {
//     gallery: string[];
//     colors: ProductColor[];
//     id: string;
//     attrs: ProductAttribute[];
// }

interface Props {
    address: UserAddress;
    coupon: string | null;
    status: OrdersStatusValues;
    id: string;
}
const ProductExtraField: FC<Props> = ({ address, coupon, id, status }) => (
    <>
        <ChangeStatus id={id} status={status} />
        <ShowAddress {...address} />
        {coupon && (
            <h3 className="font-bold text-lg mt-2">Coupon Code: {coupon}</h3>
        )}
        {/* <div className="mt-4 block">
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
        </ListArrayField>
        <ListArrayField arrayLength={attrs.length} title="Attributes">
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
        </ListArrayField> */}
    </>
);

export default ProductExtraField;

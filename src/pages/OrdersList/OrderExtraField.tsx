import type { FC } from "react";

import { ListArrayField, RowItem, type RowItemProps } from "@Components";
import type { OrdersStatusValues } from "@Constants";
import type { OrderProduct, UserAddress } from "@Types";
import { ChangeStatus, ShowAddress, ShowOrderProduct } from "./Order";

interface Props {
    address: UserAddress;
    coupon: string | null;
    status: OrdersStatusValues;
    id: string;
    orderProducts: OrderProduct[];
}

const ProductItemsHeading: RowItemProps[] = [
    { inVisible: true, className: "w-16", SM: false, MD: true },
    { children: "Title" },
    { children: "Color (Hex)", SM: false, MD: true },
    { children: "Count" },
];
const ProductExtraField: FC<Props> = ({
    address,
    coupon,
    id,
    status,
    orderProducts,
}) => (
    <>
        <ChangeStatus id={id} status={status} />
        <ShowAddress {...address} />
        {coupon && (
            <h3 className="font-bold text-lg mt-2">Coupon Code: {coupon}</h3>
        )}
        <ListArrayField
            arrayLength={orderProducts.length}
            title="Ordered Products"
        >
            <table className="w-full">
                <thead>
                    <tr>
                        {ProductItemsHeading.map((props, i) => (
                            <RowItem key={i} isHeading {...props} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orderProducts.map((product) => (
                        <ShowOrderProduct {...product} key={product._id} />
                    ))}
                </tbody>
            </table>
        </ListArrayField>
    </>
);

export default ProductExtraField;

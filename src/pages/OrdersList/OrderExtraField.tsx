import type { FC } from "react";

import { ListArrayField } from "@/Components";
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
                        <th
                            className="flex-1 !w-16 sm:hidden md:table-cell table-row-item-no-border invisible"
                            aria-hidden="true"
                        />
                        <th className="table-row-item-no-border">Title</th>
                        <th className="table-row-item-no-border sm:hidden md:table-cell">
                            Color (Hex)
                        </th>
                        <th className="table-row-item-no-border">Count</th>
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

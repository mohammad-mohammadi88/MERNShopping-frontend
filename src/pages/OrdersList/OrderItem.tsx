import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";
import type { FC } from "react";

import { RowChevron, RowItem, Status } from "@Components";
import {
    ordersStatus,
    ordersStatusColors,
    type OrdersStatus,
    type OrdersStatusKeys,
} from "@Constants";
import type { Order } from "@Types";
import { capitalize } from "@Utils";
import OrderExtraField from "./OrderExtraField";

interface Props extends Order {
    isLast: boolean;
}
const OrderItem: FC<Props> = ({
    finalPrice,
    isLast,
    user: { firstName, lastName, mobile },
    status,
    deliveryAddress,
    _id,
    products,
    couponCode,
    totalPrice,
}) => {
    const statusName = Object.keys(ordersStatus).find(
        (c) => ordersStatus[c as OrdersStatusKeys] === status
    ) as OrdersStatusKeys;

    const fullname = `${capitalize(firstName)} ${capitalize(lastName)}`;
    return (
        <Disclosure>
            <DisclosureButton
                as={"tr"}
                className="border-y group cursor-pointer hover:bg-gray-200 duration-300 border-gray-300 max-w-full"
            >
                <RowItem children={finalPrice} />
                <RowItem hidden MD children={mobile} />

                <RowItem hidden LG children={fullname} />
                <RowItem hidden XL children={totalPrice} />
                <RowItem>
                    <Status<OrdersStatus>
                        currentStatus={statusName}
                        statusColors={ordersStatusColors}
                    />
                </RowItem>

                <RowItem className="!h-16">
                    <RowChevron />
                </RowItem>
            </DisclosureButton>
            <DisclosurePanel
                as="tr"
                transition
                className={
                    "transition overflow-hidden duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 w-full max-h-auto"
                }
            >
                <td
                    colSpan={8}
                    className={clsx(
                        "pl-4 sm:pl-1 md:pl-4 space-y-4 pt-4",
                        isLast ? "pb-0" : "pb-8"
                    )}
                >
                    <OrderExtraField
                        address={deliveryAddress}
                        coupon={couponCode}
                        id={_id}
                        orderProducts={products}
                        status={status}
                    />
                </td>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default OrderItem;

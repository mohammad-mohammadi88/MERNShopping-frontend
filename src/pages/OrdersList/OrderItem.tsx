import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import type { FC } from "react";

import { ordersStatus, type OrdersStatusKeys } from "@Constants";
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
    const statusName = capitalize(
        Object.keys(ordersStatus)
            .find((c) => ordersStatus[c as OrdersStatusKeys] === status)
            ?.toLowerCase() as string
    );
    const fullname = `${capitalize(firstName)} ${capitalize(lastName)}`;
    return (
        <Disclosure>
            <DisclosureButton
                as={"tr"}
                className="border group cursor-pointer hover:bg-gray-200 duration-300 border-gray-300 ax-w-full"
            >
                <td className="table-row-item">{finalPrice}</td>

                <td className="hidden md:table-cell table-row-item">
                    {mobile}
                </td>
                <td className="hidden lg:table-cell table-row-item">
                    {fullname}
                </td>
                <td className="hidden xl:table-cell table-row-item">
                    {totalPrice}
                </td>
                <td className="table-row-item !border-r-0">{statusName}</td>
                <td className="table-row-item-no-border !h-16 relative">
                    <ChevronDownIcon
                        height={26}
                        className="duration-200 absolute right-2 top-1/2 -translate-y-1/2 ease-out group-data-open:-rotate-180"
                    />
                </td>
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

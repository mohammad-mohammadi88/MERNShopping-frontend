import type { FC } from "react";

import type { UserAddress } from "@Types";

const ShowAddress: FC<UserAddress> = ({
    address,
    mobile,
    city,
    state,
    zipCode,
}) => (
    <div className="text-lg mt-2 space-y-2">
        <h2 className="font-semibold text-xl truncate pt-5">
            Delivery Address
        </h2>
        <div className="pl-2 space-y-1">
            <p>
                <strong>Full address:</strong> {address}
            </p>
            <p>
                <strong>State:</strong> {state}
            </p>
            <p>
                <strong>City:</strong> {city}
            </p>
            <p>
                <strong>Mobile:</strong> {mobile}
            </p>
            {zipCode && (
                <p>
                    <strong>Zip Code:</strong> {zipCode}
                </p>
            )}
        </div>
    </div>
);

export default ShowAddress;

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
        <h3 className="text-xl font-bold">Delivery Address</h3>
        <div className="pl-2">
            <p>Full address: {address}</p>
            <p>State: {state}</p>
            <p>City: {city}</p>
            <p>Mobile: {mobile}</p>
            {zipCode && <p>Zip Code: {zipCode}</p>}
        </div>
    </div>
);

export default ShowAddress;

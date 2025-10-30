import type { FC } from "react";

import type { UserAddress } from "@Types";

const UserAddressShow: FC<UserAddress> = ({
    address,
    city,
    mobile,
    state,
    zipCode,
}) => (
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
);

export default UserAddressShow;

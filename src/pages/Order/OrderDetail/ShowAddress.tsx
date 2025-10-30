import type { FC } from "react";

import { UserAddressShow } from "@/pages/Shared";
import type { UserAddress } from "@Types";

const ShowAddress: FC<UserAddress> = (props) => (
    <div className="text-lg mt-2 space-y-2">
        <h2 className="font-semibold text-xl truncate pt-5">
            Delivery Address
        </h2>
        <UserAddressShow {...props} />
    </div>
);

export default ShowAddress;

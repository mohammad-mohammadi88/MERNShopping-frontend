import type { FC } from "react";

import { UserAddressShow } from "@/pages/Shared";
import type { UserAddress } from "@Types";

interface Props {
    addresses: UserAddress[];
}

const ShowAddresses: FC<Props> = ({ addresses }) =>
    addresses.length > 0 && (
        <>
            <h2 className="mt-3 mb-2 font-semibold text-xl">Addresses</h2>
            <div className="space-y-4">
                {addresses.map((address, i) => (
                    <>
                        <UserAddressShow {...address} />
                        {i !== addresses.length - 1 && (
                            <div className="max-w-52 h-px bg-gray-800" />
                        )}
                    </>
                ))}
            </div>
        </>
    );

export default ShowAddresses;

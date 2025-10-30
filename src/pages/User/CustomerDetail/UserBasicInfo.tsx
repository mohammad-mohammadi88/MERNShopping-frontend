import type { FC } from "react";

import type { User } from "@Types";

type Props = Omit<User, "_id" | "addresses">;
const UserBasicInfo: FC<Props> = ({
    firstName,
    totalOrders,
    mobile,
    lastName,
    email,
}) => (
    <>
        <h2 className="mt-5 mb-2 font-semibold text-xl">User Info</h2>

        <div className="flex flex-col pl-2 space-y-1">
            <p className="truncate">
                <strong>First Name:</strong> {firstName}
            </p>
            <p className="truncate">
                <strong>Last Name:</strong> {lastName}
            </p>
            <p className="truncate">
                <strong>Email:</strong> {email}
            </p>
            <p className="truncate">
                <strong>Mobile:</strong> {mobile}
            </p>
            <p className="truncate">
                <strong>Total Orders:</strong> {totalOrders}
            </p>
        </div>
    </>
);

export default UserBasicInfo;

import type { FC } from "react";

import type { User } from "@Types";

const UserDetailts: FC<User> = ({ firstName, email, lastName, mobile }) => (
    <div className="flex flex-col">
        <h2 className="font-semibold text-xl truncate py-2">Related User</h2>
        <div className="flex flex-col pl-2 space-y-1">
            <p className="truncate">
                <strong>Full Name:</strong> {firstName} {lastName}
            </p>
            <p className="truncate">
                <strong>Email:</strong> {email}
            </p>
            <p className="truncate">
                <strong>Mobile:</strong> {mobile}
            </p>
        </div>
    </div>
);

export default UserDetailts;

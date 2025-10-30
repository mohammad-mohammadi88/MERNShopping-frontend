import type { FC } from "react";

import { usersApi } from "@Api";
import { DeleteDatumBtn } from "@Components";
import type { ID } from "@Types";
import CustomerEditBtn from "./CustomerEditBtn";

const CustomerActionBtn: FC<ID> = ({ _id }) => (
    <div className="mt-4 block">
        <DeleteDatumBtn
            queryKey={["customers", "page"]}
            navigateUrl="/customers"
            apiCall={usersApi.deleteUser}
            datumName="customer"
            id={_id}
        />
        <CustomerEditBtn id={_id} />
    </div>
);

export default CustomerActionBtn;

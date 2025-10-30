import type { FC } from "react";

import type { User } from "@Types";
import { CustomerActionBtn, ShowAddresses, UserBasicInfo } from "./Customer";

const CustomerDatumShow: FC<User> = ({ _id, addresses, ...basicInfo }) => (
    <>
        <CustomerActionBtn _id={_id} />
        <UserBasicInfo {...basicInfo} />

        <ShowAddresses addresses={addresses} />
    </>
);

export default CustomerDatumShow;

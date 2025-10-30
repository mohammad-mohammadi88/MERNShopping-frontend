import type { FC } from "react";
import { useNavigate } from "react-router";

import { Button } from "@Components";

interface Props {
    id: string;
}

const CustomerEditBtn: FC<Props> = ({ id }) => {
    const navigate = useNavigate();
    return (
        <Button
            role="edit"
            className="block"
            title="Customer"
            onClick={() => navigate("/edit-customer/" + id)}
        />
    );
};

export default CustomerEditBtn;

import type { FC } from "react";
import { useNavigate } from "react-router";

import { Button } from "@Components";

interface Props {
    id: string;
}
const OrderDetailts: FC<Props> = ({ id }) => {
    const navigate = useNavigate();
    return (
        <div className="mt-8">
            <h2 className="font-semibold text-xl truncate pb-2">Order</h2>
            <Button
                role="see"
                className="block"
                title="Order"
                onClick={() => navigate("/order/" + id)}
            />
        </div>
    );
};
export default OrderDetailts;

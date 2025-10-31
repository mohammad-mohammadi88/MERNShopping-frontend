import type { FC } from "react";
import { useNavigate } from "react-router";

import { Button } from "@Components";

interface Props {
    code: string;
}
const CouponDetails: FC<Props> = ({ code }) => {
    const navigate = useNavigate();
    return (
        <div className="mt-8">
            <h2 className="font-semibold text-xl truncate pb-2">Coupon</h2>
            <Button
                role="see"
                className="block"
                title="Coupon"
                onClick={() => navigate("/coupon/" + code)}
            />
        </div>
    );
};
export default CouponDetails;

import type { FC } from "react";

interface Props {
    amount: number;
    currency: string;
    paidAmount: number | undefined;
}

const ShowPricing: FC<Props> = ({ amount, currency, paidAmount }) => (
    <div>
        <h2 className="font-semibold text-xl truncate pb-2">Pricing</h2>
        <div className="pl-2">
            <p className="text-lg">
                <strong>Amount:</strong> {amount}$
            </p>
            {paidAmount && (
                <p className="text-lg">
                    <strong>Paid Amount:</strong> {paidAmount}$
                </p>
            )}
            <p className="text-lg">
                <strong>Currency:</strong> {currency}
            </p>
        </div>
    </div>
);

export default ShowPricing;

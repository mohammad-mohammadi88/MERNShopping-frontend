import type { FC } from "react";

interface Props {
    finalPrice: number;
    totalPrice: number;
}

const ShowPrices: FC<Props> = ({ finalPrice, totalPrice }) => (
    <div>
        <p className="text-lg">
            <strong>Final Price:</strong> {finalPrice}
        </p>
        <p className="text-lg">
            <strong>Total Price:</strong> {totalPrice}
        </p>
    </div>
);

export default ShowPrices;

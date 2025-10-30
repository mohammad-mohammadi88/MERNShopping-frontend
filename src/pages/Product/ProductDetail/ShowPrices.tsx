import type { FC } from "react";

interface Props {
    price: number;
    salePrice: number;
}

const ShowPrices: FC<Props> = ({ price, salePrice }) => (
    <div>
        <p className="text-lg">
            <strong>Sale Price:</strong> {salePrice}
        </p>
        <p className="text-lg">
            <strong>Exact Price:</strong> {price}
        </p>
    </div>
);

export default ShowPrices;

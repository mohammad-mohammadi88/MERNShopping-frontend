import type { FC } from "react";

interface Props {
    salePrice: number;
    price: number;
}

const ShowPrice: FC<Props> = ({ salePrice, price }) => (
    <div className="flex space-x-2">
        {salePrice !== price && (
            <div className="flex space-x-2 items-center">
                <del>{price}$</del>
                <strong>-&gt;</strong>
            </div>
        )}
        <p>{salePrice}$</p>
    </div>
);

export default ShowPrice;

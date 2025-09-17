import clsx from "clsx";
import type { FC } from "react";

interface Props {
    isLast: boolean;
    title: string;
}

const ProductArrayField: FC<Props> = ({ isLast, title }) => (
    <div className={clsx(!isLast && "border-b pb-4 border-b-gray-500")}>
        <h2 className="font-semibold text-xltruncate pt-5 pb-3">{title}</h2>
        <div className="pl-2 space-y-1"></div>
    </div>
);

export default ProductArrayField;

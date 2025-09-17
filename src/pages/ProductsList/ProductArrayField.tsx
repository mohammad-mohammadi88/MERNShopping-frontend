import type { FC, ReactNode } from "react";

interface Props {
    arrayLength: number;
    title: string;
    children: ReactNode;
}

const ProductArrayField: FC<Props> = ({ arrayLength, title, children }) =>
    arrayLength !== 0 && (
        <div className="w-full">
            <h2 className="font-semibold text-xl truncate pt-5 pb-3">
                {title}
            </h2>
            <div className="pl-2 space-y-1 w-full">{children}</div>
        </div>
    );

export default ProductArrayField;

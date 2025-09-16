import { type FC } from "react";

import { Button, Field } from ".";

interface Props {
    baseName: string;
    remove: () => void;
}

const ProductColor: FC<Props> = ({ baseName, remove }) => (
    <div className="border-b p-2 mt-2 items-start flex flex-col xl:flex-row">
        <div className="flex-1 pr-6 space-x-3 w-full space-y-3 flex flex-col xl:flex-row items-start">
            <Field
                className="w-full"
                name={`${baseName}.title`}
                containerClassName="w-full xl:flex-1"
                label="Color name"
            />
            <Field
                className="w-full"
                type="number"
                containerClassName="w-full xl:flex-1"
                name={`${baseName}.priceEffect`}
                label="Price Effect"
            />
            <Field
                className="w-full"
                type="color"
                containerClassName="w-full xl:flex-1"
                name={`${baseName}.color`}
                label="Color"
            />
        </div>
        <Button
            title="Color"
            className="mt-4 xl:mt-7.5"
            role="delete"
            onClick={remove}
        />
    </div>
);

export default ProductColor;

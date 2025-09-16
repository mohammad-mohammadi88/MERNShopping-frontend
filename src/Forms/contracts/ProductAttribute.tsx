import { memo, type FC } from "react";

import { Button, Field } from ".";

interface Props {
    baseName: string;
    remove: () => void;
}

const ProductAttribute: FC<Props> = ({ baseName, remove }) => (
    <div className="border-b p-2 mt-2 items-start flex flex-col xl:flex-row">
        <div className="flex-1 pr-6 space-x-3 w-full space-y-3 flex flex-col xl:flex-row items-start">
            <Field
                className="w-full"
                name={`${baseName}.title`}
                containerClassName="w-full xl:flex-1"
                label="Attribute title"
            />
            <Field
                className="w-full"
                containerClassName="w-full xl:flex-1"
                name={`${baseName}.description`}
                label="Attribute description"
            />
        </div>
        <Button
            title="Attribute"
            className="mt-4 xl:mt-7.5"
            role="delete"
            onClick={remove}
        />
    </div>
);

export default memo(ProductAttribute);

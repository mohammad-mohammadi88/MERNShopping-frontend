import { memo, type FC } from "react";

import { Button, Field, Switch } from ".";

interface Props {
    baseName: string;
    removeAttr: () => void;
}

const Attribute: FC<Props> = ({ baseName, removeAttr }) => (
    <div className="border-b p-2 mt-2 items-center flex flex-col xl:flex-row">
        <div className="flex-1 space-x-3 w-full space-y-3 flex flex-col xl:flex-row items-start">
            <Field
                className="w-full xl:w-auto"
                name={`${baseName}.title`}
                containerClassName="w-full xl:w-auto"
                label="Attribute title"
            />
            <Field
                className="w-full xl:w-auto"
                containerClassName="w-full xl:w-auto"
                name={`${baseName}.description`}
                label="Attribute description"
            />
            <Switch title="Filterable" name={`${baseName}.filterable`} />
            <Switch title="Has Price" name={`${baseName}.hasPrice`} />
        </div>
        <Button
            title="Attribute"
            className="mt-4 xl:mt-0"
            role="delete"
            onClick={removeAttr}
        />
    </div>
);

export default memo(Attribute);

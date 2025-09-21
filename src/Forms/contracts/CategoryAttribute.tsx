import { Button } from "@Components";
import type { FC } from "react";
import { Field } from ".";

interface Props {
    name: string;
    remove: () => void;
}

const CategoryAttribute: FC<Props> = ({ name, remove }) => (
    <div className="flex flex-col border-b py-2 md:flex-row space-y-4 w-full pl-4 space-x-4 mt-4 items-start">
        <Field
            containerClassName="w-full flex-1"
            className="w-full"
            name={name}
            label="Attribute"
        />
        <Button
            title="Attribute"
            role="delete"
            className="mt-7.5"
            onClick={remove}
        />
    </div>
);

export default CategoryAttribute;

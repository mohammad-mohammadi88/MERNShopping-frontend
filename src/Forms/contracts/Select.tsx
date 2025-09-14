import { Field, Label, Select } from "@headlessui/react";
import clsx from "clsx";
import { useField } from "formik";
import type { FC } from "react";

import { ErrorMessage } from ".";

export interface Option {
    label: string;
    value: string;
}
interface Props {
    containerClassName?: string;
    name: string;
    label: string;
    options: Option[];
}

const AppSelect: FC<Props> = ({ containerClassName, name, label, options }) => {
    const [field] = useField({ name });

    return (
        <Field className={clsx("flex flex-col", containerClassName)}>
            <Label className="field-label">{label}</Label>
            <div className="relative">
                <Select
                    {...field}
                    className={
                        "mb-3 bg-gray-200 w-full hover:bg-gray-300 duration-200 p-2.5 pr-4 cursor-pointer rounded"
                    }
                >
                    <option value="">Select Category</option>
                    {options.map(({ label, value }) => (
                        <option className="p-2.5" value={value} key={value}>
                            {label}
                        </option>
                    ))}
                </Select>
            </div>
            <ErrorMessage name={name} />
        </Field>
    );
};

export default AppSelect;

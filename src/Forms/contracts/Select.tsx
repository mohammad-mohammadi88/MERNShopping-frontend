import { Field, Label, Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { ErrorMessage, useField } from "formik";
import type { FC } from "react";

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
            <Label className="text-lg text-gray-900">{label}</Label>
            <div className="relative">
                <Select
                    {...field}
                    className={
                        "my-3 bg-gray-200 w-full hover:bg-gray-300 duration-200 p-2.5 pr-4 cursor-pointer rounded"
                    }
                >
                    <option value="">Select Category</option>
                    {options.map(({ label, value }) => (
                        <option className="p-2.5" value={value} key={value}>
                            {label}
                        </option>
                    ))}
                </Select>
                <ChevronDownIcon
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-6 fill-white/60"
                    aria-hidden="true"
                />
            </div>
            <ErrorMessage
                name={name}
                component={"div"}
                className="text-red-500 text-sm"
            />
        </Field>
    );
};

export default AppSelect;

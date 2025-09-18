import { Field, Label, Select, type SelectProps } from "@headlessui/react";
import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

import type { SelectOption } from "@Types";

interface Props extends SelectProps {
    options: SelectOption[];
    label: string;
    defaultOption?: string;
    containerClassName?: string;
}

const AppSelect: FC<PropsWithChildren<Props>> = ({
    children,
    containerClassName,
    className,
    label,
    options,
    defaultOption,
    ...field
}) => (
    <Field className={clsx("flex flex-col", containerClassName)}>
        <Label className="field-label">{label}</Label>
        <div className="relative">
            <Select
                {...field}
                className={clsx(
                    "mb-3 bg-gray-200 w-full hover:bg-gray-300 duration-200 p-2.5 pr-4 cursor-pointer rounded",
                    className
                )}
            >
                {defaultOption && <option value="">{defaultOption}</option>}
                {options.map(({ label, value }) => (
                    <option className="p-2.5" value={value} key={value}>
                        {label}
                    </option>
                ))}
            </Select>
        </div>
        {children}
    </Field>
);

export default AppSelect;

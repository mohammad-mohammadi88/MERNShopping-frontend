import { Field, Input, Label, type InputProps } from "@headlessui/react";
import clsx from "clsx";
import { useField } from "formik";
import type { FC } from "react";

import { capitalize } from "@Utils";
import { ErrorMessage } from ".";

interface Props extends InputProps {
    label?: string;
    containerClassName?: string;
    name: string;
}

const AppField: FC<Props> = ({
    label,
    containerClassName,
    name,
    className,
    ...props
}) => {
    const [field] = useField({ ...props, name });

    return (
        <Field className={containerClassName}>
            <Label className="field-label">{label ?? capitalize(name)}</Label>
            <Input
                className={clsx(
                    "outline my-2 outline-gray-700 p-1 text-gray-900 rounded block",
                    className
                )}
                {...field}
                {...props}
            />
            <ErrorMessage name={name} />
        </Field>
    );
};
export default AppField;

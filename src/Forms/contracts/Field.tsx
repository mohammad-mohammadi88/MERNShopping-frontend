import { Field, Input, Label, type InputProps } from "@headlessui/react";
import clsx from "clsx";
import { ErrorMessage, useField } from "formik";
import type { FC } from "react";

interface Props extends InputProps {
    label: string;
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
            <Label className="block text-lg font-normal">{label}</Label>
            <Input
                className={clsx(
                    "outline my-2 outline-gray-700 p-1 text-gray-900 rounded block",
                    className
                )}
                {...field}
                {...props}
            />
            <ErrorMessage
                name={name}
                component={"div"}
                className="text-red-500 text-sm"
            />
        </Field>
    );
};
export default AppField;

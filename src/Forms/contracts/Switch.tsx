import { Description, Field, Label, Switch } from "@headlessui/react";
import clsx from "clsx";
import { useFormikContext } from "formik";
import type { FC } from "react";

interface Props {
    name: string;
    label: string;
    description?: string;
}

const AppSwitch: FC<Props> = ({ name, label, description }) => {
    const { values, setFieldValue } = useFormikContext();
    const handleChange = (checked: boolean) => setFieldValue(name, checked);
    // @ts-ignore
    const value: boolean = values[name];
    return (
        <Field>
            <Label className="field-label">{label}</Label>
            {description && (
                <Description className="text-gray-500 text-sm">
                    {description}
                </Description>
            )}
            <Switch
                checked={value}
                onChange={handleChange}
                className={clsx(
                    "group relative bg-gray-400 items-center flex h-7 my-2 w-14 cursor-pointer rounded-full p-1",
                    "ease-in-out duration-200",
                    "focus:not-data-focus:outline-none data-checked:bg-green-500"
                )}
            >
                <span
                    className={clsx(
                        "duration-200 ease-in-out group-data-checked:translate-x-7",
                        "pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0"
                    )}
                />
            </Switch>
        </Field>
    );
};

export default AppSwitch;

import { Field, Label, Switch } from "@headlessui/react";
import clsx from "clsx";
import { useFormikContext } from "formik";
import type { FC } from "react";

interface Props {
    name: string;
    title: string;
}

const AppSwitch: FC<Props> = ({ name, title }) => {
    const { values, setFieldValue } = useFormikContext();
    // @ts-ignore
    const value: boolean = values[name];
    return (
        <Field>
            <Label className="block text-lg font-normal">{title}</Label>
            <Switch
                checked={value}
                onChange={(e) => setFieldValue(name, e)}
                className={clsx(
                    "group relative flex h-7 my-2 w-14 cursor-pointer rounded-full p-1",
                    "bg-black/30 data-checked:bg-green-500 ease-in-out",
                    "focus:not-data-focus:outline-none duration-200 data-focus:outline data-focus:outline-white"
                )}
            >
                <span
                    className={clsx(
                        "transition duration-200 ease-in-out group-data-checked:translate-x-7",
                        "pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0"
                    )}
                />
            </Switch>
        </Field>
    );
};

export default AppSwitch;

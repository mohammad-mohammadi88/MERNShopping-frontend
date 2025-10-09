import { Field, Switch } from "@headlessui/react";
import clsx from "clsx";
import { useFormikContext } from "formik";
import { useCallback, useState, type FC } from "react";

const DiscountRoleField: FC = () => {
    const { values, setFieldValue } = useFormikContext();
    const [value, setValue] = useState<boolean>(
        // @ts-ignore
        values.discount.role !== "number"
    );

    // true => "percent"
    // false => "number"
    const handleChange = useCallback((e: boolean) => {
        setFieldValue("discount.role", e ? "percent" : "number");
        setValue(e);
    }, []);
    return (
        <Field>
            <h3 className="field-label !mb-0">Discount type</h3>
            <div className="flex -mt-1 items-center space-x-1">
                <button
                    type="button"
                    className="text-base font-semibold cursor-pointer"
                    onClick={() => handleChange(false)}
                >
                    Number
                </button>
                <Switch
                    checked={value}
                    onChange={handleChange}
                    className={clsx(
                        "group relative flex h-7 my-2 w-14 cursor-pointer rounded-full p-1",
                        "bg-gray-200 ease-in-out",
                        "focus:not-data-focus:outline-none duration-200 data-focus:outline data-focus:outline-white"
                    )}
                >
                    <span
                        className={clsx(
                            "transition duration-200 ease-in-out group-data-checked:translate-x-7",
                            "pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-red-700 shadow-lg ring-0"
                        )}
                    />
                </Switch>
                <button
                    type="button"
                    className="text-base font-semibold cursor-pointer"
                    onClick={() => handleChange(true)}
                >
                    Percent
                </button>
            </div>
        </Field>
    );
};

export default DiscountRoleField;

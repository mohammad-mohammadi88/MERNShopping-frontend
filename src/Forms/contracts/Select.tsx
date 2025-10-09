import { useField } from "formik";
import type { FC } from "react";

import { Select } from "@AppComponents";
import type { SelectOption } from "@Types";
import { ErrorMessage } from ".";

interface Props {
    containerClassName?: string;
    name: string;
    className?: string;
    description?: string;
    defaultOption?: string;
    label: string;
    options: SelectOption[];
}

const FormSelect: FC<Props> = ({ name, ...props }) => {
    const [field] = useField({ name });

    return (
        <Select {...props} {...field}>
            <ErrorMessage name={name} />
        </Select>
    );
};

export default FormSelect;

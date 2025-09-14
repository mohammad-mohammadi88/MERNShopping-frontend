import { ErrorMessage } from "formik";
import type { FC } from "react";

interface Props {
    name: string;
}

const AppErrorMessage: FC<Props> = ({ name }) => (
    <ErrorMessage
        name={name}
        component={"div"}
        className="text-red-500 text-sm"
    />
);

export default AppErrorMessage;

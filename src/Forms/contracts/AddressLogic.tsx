import type { FC } from "react";

import { Button } from "@Components";
import { Field } from ".";

interface Props {
    baseName: string;
    remove: () => void;
}

const AddressLogic: FC<Props> = ({ baseName, remove }) => (
    <>
        <h3 className="text-xl border-b border-b-gray-400">Address</h3>
        <div className="p-4 mb-2 space-y-1 w-full">
            <Field name={`${baseName}.title`} label="Address Title" />
            <Field name={`${baseName}.state`} label="Address State" />
            <Field name={`${baseName}.city`} label="Address City" />
            <Field name={`${baseName}.address`} label="Full Address" />
            <Field name={`${baseName}.mobile`} label="Address Mobile" />
            <Field name={`${baseName}.zipCode`} label="Address Zip Code" />
            <Button title="Address" role="delete" onClick={remove} />
        </div>
    </>
);

export default AddressLogic;

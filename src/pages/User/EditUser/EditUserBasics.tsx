import type { FC } from "react";

import { EditUserBasicInfoLogic } from "@Forms";
import type { UpdateUserBasics, UserAddress } from "@Types";
import EditUserContainer, {
    type EditFormProps,
    type FormatValues,
} from "./EditUserContainer";

const EditForm: FC<EditFormProps<UpdateUserBasics>> = ({
    data: { _id, email, createdAt, updatedAt, totalOrders, ...params },
    ...props
}) => <EditUserBasicInfoLogic {...props} initialValues={params} />;

const formatValues: FormatValues<UpdateUserBasics> = (values) => {
    values.addresses = values.addresses.map(({ zipCode, ...address }) => {
        const data: UserAddress = { ...address };
        if (zipCode) data.zipCode = zipCode;
        return data;
    });
    return values;
};
const EditUserBasics = () => (
    <EditUserContainer<UpdateUserBasics>
        EditForm={EditForm}
        formatValues={formatValues}
    />
);

export default EditUserBasics;

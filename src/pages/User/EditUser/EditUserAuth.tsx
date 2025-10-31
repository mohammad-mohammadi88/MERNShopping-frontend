import { EditUserAuthLogic } from "@Forms";
import type { UserAuthUpdateLogic } from "@Types";
import EditUserContainer, { type FormatValues } from "./EditUserContainer";

const formatValues: FormatValues<UserAuthUpdateLogic> = ({
    email,
    password,
}) => ({
    auth: {
        email,
        password: {
            // Admin don't need the previous password
            prev: password,
            next: password,
        },
    },
});
const EditUserAuth = () => (
    <EditUserContainer<UserAuthUpdateLogic>
        EditForm={({ data, handleSubmit }) => (
            <EditUserAuthLogic handleSubmit={handleSubmit} email={data.email} />
        )}
        formatValues={formatValues}
    />
);

export default EditUserAuth;

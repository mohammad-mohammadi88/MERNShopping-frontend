import { Form, Formik } from "formik";
import type { FC } from "react";

import { Button } from "@Components";
import type { UserAuthUpdateLogic } from "@Types";
import { Field } from "../contracts";
import { updateUserAuthSchema } from "../validation/users";

interface Props {
    handleSubmit: (values: UserAuthUpdateLogic) => void;
    email: string;
}
const EditUserAuthLogic: FC<Props> = ({ handleSubmit, email }) => (
    <Formik
        onSubmit={handleSubmit}
        validationSchema={updateUserAuthSchema}
        initialValues={{ email, password: "" }}
    >
        {({ handleSubmit }) => (
            <Form className="space-y-4">
                <Field
                    name="email"
                    type="email"
                    autoFocus
                    label="Email Address"
                />
                <Field name="password" type="password" label="User Password" />

                <Button role="send" onClick={handleSubmit} title="User" />
            </Form>
        )}
    </Formik>
);

export default EditUserAuthLogic;

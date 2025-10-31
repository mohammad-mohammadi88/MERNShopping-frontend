import { FieldArray, Form, Formik } from "formik";
import type { FC } from "react";
import { useNavigate } from "react-router";

import { Button } from "@Components";
import type { UpdateUserBasics } from "@Types";
import { AddressLogic, Field, Switch } from "../contracts";
import { updateUserBasicsSchema } from "../validation/users";

interface Props {
    handleSubmit: (values: UpdateUserBasics) => void;
    initialValues: UpdateUserBasics;
    id: string;
}

const initialAddress = {
    title: "",
    mobile: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
};
const EditUserBasicInfoLogic: FC<Props> = ({
    handleSubmit,
    initialValues,
    id,
}) => {
    const navigate = useNavigate();
    return (
        <Formik
            onSubmit={handleSubmit}
            validationSchema={updateUserBasicsSchema}
            initialValues={initialValues}
        >
            {({ values, handleSubmit }) => (
                <Form className="space-y-4">
                    <Button
                        title="User Authentication Info"
                        role="edit"
                        onClick={() => navigate(`/edit-customer/auth/${id}`)}
                    />
                    <Field name="firstName" autoFocus label="First Name" />
                    <Field name="lastName" label="Last Name" />
                    <Field name="mobile" type="tel" label="Mobile Phone" />
                    <Switch
                        description="You will make this user an admin and then you cannot undo it"
                        name="isAdmin"
                        label="Is Admin"
                    />

                    <FieldArray name="addresses">
                        {({ push, remove }) => (
                            <div>
                                {values.addresses.length > 0 && (
                                    <h2 className="text-2xl border-b border-b-gray-400 mb-6">
                                        Addresses
                                    </h2>
                                )}
                                <div className="pl-2">
                                    {values.addresses.map((_, i) => (
                                        <AddressLogic
                                            key={i}
                                            baseName={`addresses[${i}]`}
                                            remove={() => remove(i)}
                                        />
                                    ))}
                                </div>

                                <Button
                                    title="Address"
                                    onClick={() => push(initialAddress)}
                                />
                            </div>
                        )}
                    </FieldArray>

                    <Button role="send" onClick={handleSubmit} title="User" />
                </Form>
            )}
        </Formik>
    );
};

export default EditUserBasicInfoLogic;

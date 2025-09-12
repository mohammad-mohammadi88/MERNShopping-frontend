import { FieldArray, Form, Formik } from "formik";
import type { FC } from "react";

import type { FormCategoryValues } from "@Types";
import { AttributeGroup, Button, Field } from "../contracts";
import { postValidationSchema } from "../validation/category";

const initialValues: FormCategoryValues = {
    title: "",
    attrGroups: [],
};

interface Props {
    handleSubmit: (values: FormCategoryValues) => void;
}

const AddCategoryLogic: FC<Props> = ({ handleSubmit }) => (
    <Formik
        initialValues={initialValues}
        validationSchema={postValidationSchema}
        onSubmit={handleSubmit}
    >
        {({ values, handleSubmit }) => (
            <Form className="space-y-4">
                <Field name="title" className="w-full" label="Category title" />

                <FieldArray name="attrGroups">
                    {({ push, remove }) => (
                        <div>
                            {values.attrGroups.map((group, i) => (
                                <AttributeGroup
                                    group={group}
                                    baseName={`attrGroups[${i}]`}
                                    key={i}
                                    remove={() => remove(i)}
                                />
                            ))}
                            <Button
                                title="Category Group"
                                onClick={() => push({ title: "", attrs: [] })}
                            />
                        </div>
                    )}
                </FieldArray>

                <Button
                    onClick={handleSubmit}
                    role="send"
                    title="New Category"
                />
            </Form>
        )}
    </Formik>
);
export default AddCategoryLogic;

import type { ApiOkResponse } from "apisauce";
import { FieldArray, Form, Formik } from "formik";
import type { FC } from "react";

import type { Category, FormProductValue } from "@Types";
import { Attribute, Button, Field, Select, type Option } from "../contracts";
import { postProductSchema } from "../validation/products";

interface Props {
    handleSubmit: (values: FormProductValue) => void;
    categories: ApiOkResponse<Category[]>;
}

const initialValues: FormProductValue = {
    attrs: [],
    // TODO add gallery field
    gallery: [],
    price: 0,
    productCategory: "",
    thumbnail: "",
    title: "",
};

const formatCategories = (categories: ApiOkResponse<Category[]>) =>
    categories.data?.map(({ title: label, _id: value }) => ({
        label,
        value,
    })) as Option[];
const AddProductLogic: FC<Props> = ({ handleSubmit, categories }) => (
    <Formik
        onSubmit={handleSubmit}
        validationSchema={postProductSchema}
        initialValues={initialValues}
    >
        {({ values, handleSubmit }) => (
            <Form className="space-y-4">
                <Field name="title" label="Title" className="w-full" />
                <Field name="thumbnail" label="Thumbnail" className="w-full" />
                <Field
                    name="price"
                    type="number"
                    label="Price"
                    className="w-full"
                />
                <Select
                    label="Product Category"
                    name="productCategory"
                    options={formatCategories(categories)}
                />
                <FieldArray name="attrs">
                    {({ push, remove }) => (
                        <div className="w-full">
                            <h2 className="text-xl font-semibold">
                                Attributes
                            </h2>
                            {values.attrs.map((_, i) => (
                                <Attribute
                                    key={i}
                                    baseName={`attrs[${i}]`}
                                    removeAttr={() => remove(i)}
                                />
                            ))}
                            <Button
                                className="mt-4"
                                onClick={() =>
                                    push({
                                        title: "",
                                        description: "",
                                        filterable: false,
                                        isMultiple: false,
                                    })
                                }
                                title="Attribute"
                            />
                        </div>
                    )}
                </FieldArray>
                <Button
                    role="send"
                    onClick={handleSubmit}
                    title="New Product"
                />
            </Form>
        )}
    </Formik>
);

export default AddProductLogic;

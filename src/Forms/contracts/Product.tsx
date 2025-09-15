import type { ApiOkResponse } from "apisauce";
import { FieldArray, Form, Formik } from "formik";
import type { FC } from "react";

import { productStatus, type ProductStatusKeys } from "@/constants/products";
import capitalize from "@/utils/capitalize";
import type { AddProductValue, Category, EditProductValue } from "@Types";
import {
    Attribute,
    Button,
    Field,
    FormImageInput,
    Select,
    type Option,
} from "../contracts";
import { editProductSchema, postProductSchema } from "../validation/products";

const formatCategories = (categories: ApiOkResponse<Category[]>) =>
    categories.data?.map(({ title: label, _id: value }) => ({
        label,
        value,
    })) as Option[];

type ProductRole =
    | {
          initialValues: AddProductValue;
          role?: "add";
      }
    | {
          initialValues: EditProductValue;
          role: "edit";
      };
interface Props {
    handleSubmit: (values: AddProductValue) => void;
    categories: ApiOkResponse<Category[]>;
}

const productStatusOptions: Option[] = Object.keys(productStatus).map(
    (key) => ({
        label: capitalize(key.toLowerCase()),
        value: String(productStatus[key as ProductStatusKeys]),
    })
);
const Product: FC<Props & ProductRole> = ({
    handleSubmit,
    categories,
    role = "add",
    initialValues,
}) => (
    <Formik
        onSubmit={handleSubmit}
        validationSchema={
            role === "add" ? postProductSchema : editProductSchema
        }
        initialValues={initialValues}
    >
        {({ values, handleSubmit }) => (
            <Form className="space-y-4">
                {/* {role === "edit" && values.attrs} */}
                <FormImageInput name="thumbnail" maxGalleryImageCount={1} />

                <Field name="title" label="Title" className="w-full" />
                <Field
                    name="price"
                    type="number"
                    label="Price"
                    className="w-full"
                />
                {role === "edit" && (
                    <>
                        <Field
                            name="salePrice"
                            label="Sale Price"
                            type="number"
                            className="w-full"
                        />
                        <Select
                            label="Product Status"
                            name="status"
                            options={productStatusOptions}
                        />
                    </>
                )}
                <Select
                    label="Product Category"
                    name="productCategory"
                    options={formatCategories(categories)}
                />
                <FormImageInput name="gallery" />
                <FieldArray name="attrs">
                    {({ push, remove }) => (
                        <div className="w-full">
                            <h2 className="field-label !mb-0">Attributes</h2>
                            {values.attrs.map((_, i) => (
                                <Attribute
                                    key={i}
                                    baseName={`attrs[${i}]`}
                                    removeAttr={() => remove(i)}
                                />
                            ))}
                            <Button
                                className="mt-3"
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

export default Product;

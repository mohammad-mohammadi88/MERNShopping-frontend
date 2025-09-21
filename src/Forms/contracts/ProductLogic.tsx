import type { ApiOkResponse } from "apisauce";
import { FieldArray, Form, Formik } from "formik";
import type { FC } from "react";

import { Button } from "@Components";
import { productStatus, type ProductStatusKeys } from "@Constants";
import type {
    AddProductValue,
    Category,
    EditProductValue,
    SelectOption,
} from "@Types";
import { capitalize } from "@Utils";
import {
    Field,
    FormImageInput,
    ProductAttribute,
    ProductColor,
    Select,
} from ".";
import { editProductSchema, postProductSchema } from "../validation/products";

const formatCategories = (categories: ApiOkResponse<Category[]>) =>
    categories.data?.map(({ title: label, _id: value }) => ({
        label,
        value,
    })) as SelectOption[];

type ProductRole =
    | {
          handleSubmit: (values: AddProductValue) => void;
          initialValues: AddProductValue;
          role?: "add";
      }
    | {
          handleSubmit: (values: EditProductValue) => void;
          initialValues: EditProductValue;
          role: "edit";
      };
interface Props {
    categories: ApiOkResponse<Category[]>;
}

const productStatusOptions: SelectOption[] = Object.keys(productStatus).map(
    (key) => ({
        label: capitalize(key.toLowerCase()),
        value: String(productStatus[key as ProductStatusKeys]),
    })
);
const ProductLogic: FC<Props & ProductRole> = ({
    handleSubmit,
    categories,
    role = "add",
    initialValues,
}) => (
    <Formik
        // @ts-ignore
        onSubmit={handleSubmit}
        validationSchema={
            role === "add" ? postProductSchema : editProductSchema
        }
        initialValues={initialValues}
    >
        {({ values, handleSubmit }) => (
            <Form className="space-y-4">
                <FormImageInput name="thumbnail" maxGalleryImageCount={1} />

                <Field name="title" className="w-full" />
                <Field name="price" type="number" className="w-full" />
                <Field name="quantity" type="number" className="w-full" />
                {role === "edit" && (
                    <>
                        <Field
                            name="salePrice"
                            type="number"
                            label="Sale Price"
                            className="w-full"
                        />
                        <Select
                            label="Product Status"
                            name="status"
                            defaultOption="Select Category"
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
                <FieldArray name="colors">
                    {({ push: pushColor, remove }) => (
                        <div className="w-full">
                            <h2 className="field-label !mb-0">Colors</h2>
                            {values.colors.map((_, i) => (
                                <ProductColor
                                    key={i}
                                    baseName={`colors[${i}]`}
                                    remove={() => remove(i)}
                                />
                            ))}
                            <Button
                                className="mt-3"
                                onClick={() =>
                                    pushColor({
                                        title: "",
                                        color: "",
                                        priceEffect: "",
                                    })
                                }
                                title="Color"
                            />
                        </div>
                    )}
                </FieldArray>
                <FieldArray name="attrs">
                    {({ push, remove }) => (
                        <div className="w-full">
                            <h2 className="field-label !mb-0">Attributes</h2>
                            {values.attrs.map((_, i) => (
                                <ProductAttribute
                                    key={i}
                                    baseName={`attrs[${i}]`}
                                    remove={() => remove(i)}
                                />
                            ))}
                            <Button
                                className="mt-3"
                                onClick={() =>
                                    push({
                                        title: "",
                                        description: "",
                                        priceEffect: "",
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

export default ProductLogic;

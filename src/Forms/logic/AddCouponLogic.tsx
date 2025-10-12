import { Form, Formik } from "formik";
import type { FC } from "react";

import { Button } from "@Components";
import type {
    DiscountRole,
    FormCouponValues,
    SelectOption,
    User,
} from "@Types";
import { DiscountRoleField, Field, Select } from "../contracts";
import { postCouponSchema } from "../validation/coupons";

const initialValues: FormCouponValues = {
    user: "",
    discount: { amount: "" as unknown as number, role: "number" },
    expiresAt: new Date(),
    limit: "" as unknown as number,
};

interface Props {
    handleSubmit: (values: FormCouponValues) => void;
    users: User[];
}

const DiscountFields: FC<{ role: DiscountRole }> = ({ role }) => (
    <>
        <h2 className="text-xl text-gray-800 my-2">Discount</h2>
        <div className="pl-2 space-y-3">
            <DiscountRoleField />
            <Field
                name="discount.amount"
                autoFocus
                type="number"
                className={"-mt-1"}
                label="Discount Amount"
                extraElement={
                    <span className="ml-2 -translate-y-1.5 font-semibold text-lg">
                        {role === "number" ? "$" : "%"}
                    </span>
                }
            />
        </div>
    </>
);

const formatUserOption: (users: User[]) => SelectOption[] = (users) =>
    users.map(({ firstName, lastName, mobile, _id }) => ({
        value: _id,
        label: `${firstName} ${lastName}  ${mobile}`,
    }));
const AddCouponLogic: FC<Props> = ({ handleSubmit, users }) => (
    <Formik
        initialValues={initialValues}
        validationSchema={postCouponSchema}
        onSubmit={handleSubmit}
    >
        {({ values, handleSubmit }) => (
            <Form className="space-y-4">
                <Field
                    name="limit"
                    autoFocus
                    type="number"
                    className="-mt-1"
                    label="Coupon Use Limitation"
                />

                <Select
                    description="This coupon will be available for the selected user"
                    label="User"
                    className="-mt-1"
                    name="user"
                    defaultOption="Select User"
                    options={formatUserOption(users)}
                />

                <Field
                    name="expiresAt"
                    label="Expires At"
                    type="date"
                    className="-mt-1"
                />

                <DiscountFields role={values.discount.role} />

                <Button onClick={handleSubmit} role="send" title="New Coupon" />
            </Form>
        )}
    </Formik>
);
export default AddCouponLogic;

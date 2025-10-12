import {
    date,
    number,
    NumberSchema,
    object,
    string,
    type AnyObject,
    type InferType,
} from "yup";

// discount Amount
type NumSchema = NumberSchema<number, AnyObject, undefined, "">;
type NumSchemaFn = (schema: NumSchema) => NumSchema;

const percentAmount: NumSchemaFn = (schema) =>
    schema
        .min(0, "percent amount must be at least 0")
        .max(100, "percent amount cannot exceed 100");
const numberAmount: NumSchemaFn = (schema) =>
    schema.min(0).label("Number Amount");

const discountAmount = number()
    .required()
    .when("role", {
        is: "percent",
        then: percentAmount,
        otherwise: numberAmount,
    })
    .label("Amount");

// discount Role
const discountRole = string().required().oneOf(["number", "percent"]);
export type DiscountRole = InferType<typeof discountRole>;

// discount
const discount = object().shape({
    role: discountRole,
    amount: discountAmount,
});
export type Discount = InferType<typeof discount>;

// limit
const limit = number()
    .typeError("Limit Must be a number")
    .required()
    .min(1)
    .integer("Limit cannot be a float");

// expires At
const expiresAt = date()
    .required()
    .typeError("Must be a valid date")
    .test(
        "not-past",
        "Selected date is already passed",
        (value) => value >= new Date()
    )
    .label("Expiration date");

// user
const user = string().required().label("User");

// schema
export const postCouponSchema = object().shape({
    discount,
    limit,
    user,
    expiresAt,
});
export type FormCouponValues = InferType<typeof postCouponSchema>;

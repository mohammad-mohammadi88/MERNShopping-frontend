import { array, boolean, object, string } from "yup";

const phoneRegex = new RegExp(/^0?[1-9]\d{9,13}$/);
const mobile = string().required().matches(phoneRegex, "Invalid mobile");

const userAddressSchema = object().shape({
    title: string().required().label("Address Title"),
    state: string().required().label("Address State"),
    city: string().required().label("Address City"),
    address: string().required().label("Full Address"),
    mobile: mobile.label("Address Mobile"),
    zipCode: string().optional().label("Zip Code"),
});
export const updateUserBasicsSchema = object().shape({
    firstName: string().required().label("First Name"),
    lastName: string().required().label("Last Name"),
    mobile: mobile.label("Mobile"),
    email: string().required().email().label("Email"),
    isAdmin: boolean().label("Is Admin"),
    addresses: array().of(userAddressSchema).required(),
});

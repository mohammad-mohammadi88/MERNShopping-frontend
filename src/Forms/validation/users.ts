import { array, boolean, object, string } from "yup";
import { String } from "./globals";

const phoneRegex = new RegExp(/^0?[1-9]\d{9,13}$/);
const mobile = String.matches(phoneRegex, "Invalid mobile");
const password = String.min(10, "Your password must be at least 10 characters")
    .max(50, "Your password cannot be more than 50 characters")
    .test("password-check", "", (password, context) => {
        interface Validation {
            message: string;
            regex: RegExp;
        }
        const errors: string[] = [];
        const validations: Validation[] = [
            { regex: /[a-z]/, message: "lower case word" },
            { regex: /[A-Z]/, message: "upper case words" },
            { regex: /[0-9]/, message: "numbers" },
            {
                regex: /[!@#\$%\^&\*\(\)\-\_\+\=\[\]\{\}\\\|;:'",<\.>\/\?~`]/,
                message: "special characters such as ;:/*\\%@&",
            },
        ];
        validations.forEach(({ message, regex }) => {
            if (!regex.test(password)) errors.push(message);
        });

        if (errors.length)
            return context.createError({
                path: "password",
                message: `Password must include ${errors.join(", ")}`,
            });

        return true;
    });

const userAddressSchema = object().shape({
    title: String.label("Address Title"),
    state: String.label("Address State"),
    city: String.label("Address City"),
    address: String.label("Full Address"),
    mobile: mobile.label("Address Mobile"),
    zipCode: string().optional().label("Zip Code"),
});
export const updateUserBasicsSchema = object().shape({
    firstName: String.label("First Name"),
    lastName: String.label("Last Name"),
    mobile: mobile.label("Mobile Phone"),
    isAdmin: boolean().label("Is Admin"),
    addresses: array().of(userAddressSchema).required(),
});

export const updateUserAuthSchema = object().shape({
    email: String.email().label("Email Address"),
    password,
});

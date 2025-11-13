import type { ID, TimeStamp } from "./globals";

export type UserAddress = ID &
    Record<"title" | "state" | "city" | "address" | "mobile", string> & {
        zipCode?: string | undefined;
    };

export interface User extends ID, TimeStamp {
    firstName: string;
    lastName: string;
    email: string;
    totalOrders: number;
    addresses: UserAddress[];
    isAdmin: boolean;
    mobile: string;
}

export interface LoginData {
    email: string;
    password: string;
}

interface Auth {
    email: string;
    password: {
        prev: string;
        next: string;
    };
}

export interface UpdateUserBasics {
    firstName: string;
    lastName: string;
    mobile: string;
    isAdmin: boolean;
    addresses: UserAddress[];
}

export interface UpdateUserData extends Partial<UpdateUserBasics> {
    auth?: Auth;
}

export interface UserAuthLogic {
    email: string;
    password: string;
}

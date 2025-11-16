import type { ID, TimeStamp } from "./globals";

export type UserAddress = ID &
    Record<"title" | "state" | "city" | "address" | "mobile", string> & {
        zipCode?: string | undefined;
    };

interface BasicUser {
    firstName: string;
    lastName: string;
    mobile: string;
}
export interface User extends ID, TimeStamp, BasicUser {
    email: string;
    totalOrders: number;
    addresses: UserAddress[];
    isAdmin: boolean;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData extends LoginData, BasicUser {
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

export interface UpdateUserBasics extends BasicUser {
    isAdmin: boolean;
    addresses: UserAddress[];
}

export interface UpdateUserData extends Partial<UpdateUserBasics> {
    auth?: Auth;
}

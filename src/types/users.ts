import type { ID } from "./globals";

export type UserAddress = ID &
    Record<"title" | "state" | "city" | "address" | "mobile", string> & {
        zipCode?: string | undefined;
    };

export interface User extends ID {
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
export interface UpdateUserData {
    auth?: Auth;
    firstName?: string;
    lastName?: string;
    mobile?: string;
    isAdmin?: boolean;
    addresses?: UserAddress[] | undefined;
}

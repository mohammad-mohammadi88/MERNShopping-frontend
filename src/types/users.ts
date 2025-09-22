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
    wallet: number;
    mobile: string;
}

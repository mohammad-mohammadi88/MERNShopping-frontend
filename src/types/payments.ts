import type { PaymentStatusValue } from "@Constants";
import type { ID, Order, User } from "./index";

export interface Payment extends ID {
    user: User;
    order: string;
    status: PaymentStatusValue;
    amount: number;
    stripeSessionId: string;
    paidAmount?: number;
    paymentId?: string;
    currency: string;
    createdAt: Date;
}

export interface FullPayment extends Omit<Payment, "order"> {
    order: Order;
}

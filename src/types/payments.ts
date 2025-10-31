import type { PaymentStatusValues } from "@Constants";
import type { ID, User } from "./index";

export interface Payment extends ID {
    user: User;
    order: string;
    status: PaymentStatusValues;
    amount: number;
    stripeSessionId: string;
    paidAmount?: number;
    paymentId?: string;
    currency: string;
    createdAt: Date;
}

export interface SinglePayment extends Omit<Payment, "user"> {
    user: string;
}

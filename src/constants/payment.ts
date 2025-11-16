export const paymentStatus = {
    PENDING: 0,
    SUCCESS: 1,
    FAILED: 2,
} as const;
export type PaymentStatus = typeof paymentStatus;
export type PaymentStatusKeys = keyof PaymentStatus;
export type PaymentStatusValues = PaymentStatus[PaymentStatusKeys];
export const paymentStatusColors: Record<PaymentStatusKeys, `#${string}`> = {
    PENDING: "#f90",
    FAILED: "#f00",
    SUCCESS: "#00c51e",
};

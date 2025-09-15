export const productStatus = {
    INIT: 0,
    INACTIVE: 1,
    PUBLISHED: 2,
} as const;
export type ProductStatusKeys = keyof typeof productStatus;
export type ProductStatusValues = (typeof productStatus)[ProductStatusKeys];

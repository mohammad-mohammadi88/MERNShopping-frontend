export const productStatus = {
    INIT: 0,
    INACTIVE: 1,
    PUBLISHED: 2,
} as const;
export type ProductStatus = typeof productStatus;
export type ProductStatusKeys = keyof ProductStatus;
export type ProductStatusValues = ProductStatus[ProductStatusKeys];
export const productStatusColors: Record<ProductStatusKeys, `#${string}`> = {
    INIT: "#f90",
    INACTIVE: "#f00",
    PUBLISHED: "#00c51e",
};

import type { ID } from "./globals";

export interface FormCategoryGroup {
    title: string;
    attrs: string[];
}
export interface FormCategoryValues {
    title: string;
    attrGroups: FormCategoryGroup[];
}

export type CategoryAttr = string;
export interface CategoryGroup extends FormCategoryGroup, ID {
    attrs: CategoryAttr[];
}
export interface Category extends FormCategoryValues, ID {
    totalProducts: number;
    attrGroups: CategoryGroup[];
}

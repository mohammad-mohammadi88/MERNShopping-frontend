import type { FormAttribute, ID } from "./globals";

export interface FormCategoryGroup {
    title: string;
    attrs: FormAttribute[];
}
export interface FormCategoryValues {
    title: string;
    attrGroups: FormCategoryGroup[];
}

export type CategoryAttr = FormAttribute & ID;
export interface CategoryGroup extends FormCategoryGroup {
    attrs: CategoryAttr[];
    _id: string;
}
export interface Category extends FormCategoryValues {
    _id: string;
    totalProducts: number;
    attrGroups: CategoryGroup[];
}

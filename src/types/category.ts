export interface FormCategoryAttr {
    title: string;
    description: string;
    hasPrice?: boolean;
    filterable?: boolean;
}
export interface FormCategoryGroup {
    title: string;
    attrs: FormCategoryAttr[];
}
export interface FormCategoryValues {
    title: string;
    attrGroups: FormCategoryGroup[];
}

type ID = { _id: string };

export type CategoryAttr = FormCategoryAttr & ID;
export interface CategoryGroup extends FormCategoryGroup {
    attrs: CategoryAttr[];
    _id: string;
}
export interface Category extends FormCategoryValues {
    _id: string;
    totalProducts: number;
    attrGroups: CategoryGroup[];
}

export interface CategoryAttr {
    title: string;
    description: string;
    isMultiple?: boolean;
    filterable?: boolean;
}
export interface CategoryGroup {
    title: string;
    attrs: CategoryAttr[];
}
export interface CategoryValues {
    title: string;
    attrGroups: CategoryGroup[];
}

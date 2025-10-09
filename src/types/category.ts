import type { FormCategoryGroup, FormCategoryValues } from "@/Forms/validation";
import type { ID } from "./globals";
export type * from "@/Forms/validation";

export type CategoryGroup = FormCategoryGroup & ID;
export interface Category extends FormCategoryValues, ID {
    totalProducts: number;
    attrGroups: CategoryGroup[];
}

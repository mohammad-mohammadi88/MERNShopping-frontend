export interface FormAttribute {
    title: string;
    description: string;
    hasPrice?: boolean;
    filterable?: boolean;
}
export interface ID {
    _id: string;
}
export interface Pagination {
    perPage: number;
    page: number;
}

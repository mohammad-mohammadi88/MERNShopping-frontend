export interface ID {
    _id: string;
}
export interface PaginationType {
    perPage: number;
    page: number;
}

export interface SelectOption {
    label: string;
    value: string | number;
}
export interface GetDataWithPagination<T> {
    pages: number;
    data: T[];
    perPage: number;
    currentPage: number;
}
export interface TimeStamp {
    createdAt: Date;
    updatedAt: Date;
}
export type ApiListQueries = Partial<
    PaginationType & {
        query: string;
    }
>;

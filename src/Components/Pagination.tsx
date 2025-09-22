import type { Dispatch, FC, SetStateAction } from "react";

import type { SelectOption } from "@Types";
import { PagePagination, Select } from ".";

interface Props {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    perPage: number;
    totalPages: number;
    setPerPage: Dispatch<SetStateAction<number>>;
}

const paginationNumbers: number[] = [10, 20, 30, 40, 50, 100, 200];
const paginationOptions: SelectOption[] = paginationNumbers.map((value) => ({
    label: String(value),
    value,
}));

const Pagination: FC<Props> = ({ perPage, setPerPage, ...pageProps }) => (
    <div className="flex mt-4 flex-col md:flex-row justify-start md:justify-between ">
        <Select
            label="Per Page"
            containerClassName="w-44 items-center space-x-2 flex-row"
            className={"border border-gray-400"}
            value={perPage}
            options={paginationOptions}
            onChange={(e) => setPerPage(Number(e.target.value) || 10)}
        />
        <PagePagination {...pageProps} />
    </div>
);

export default Pagination;

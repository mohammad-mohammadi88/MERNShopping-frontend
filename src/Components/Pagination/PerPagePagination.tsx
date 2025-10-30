import type { Dispatch, FC, SetStateAction } from "react";

import { Select } from "@AppComponents";
import constants from "@Constants";
import type { SelectOption } from "@Types";

export interface PerPagePaginationProps {
    perPage: number;
    setPerPage: Dispatch<SetStateAction<number>>;
}

const paginationOptions: SelectOption[] = constants.paginationCounts.map(
    (value) => ({
        label: String(value),
        value,
    })
);

const PerPagePagination: FC<PerPagePaginationProps> = ({
    perPage,
    setPerPage,
}) => (
    <Select
        label="Per Page"
        containerClassName="w-44 items-center space-x-2 flex-row"
        className={"border border-gray-400"}
        labelClassName="-translate-y-1.5"
        value={perPage}
        options={paginationOptions}
        onChange={(e) => setPerPage(Number(e.target.value) || 10)}
    />
);

export default PerPagePagination;

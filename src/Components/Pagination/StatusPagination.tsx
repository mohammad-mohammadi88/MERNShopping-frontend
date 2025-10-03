import type { Dispatch, FC, SetStateAction } from "react";

import { Select } from "@AppComponents";
import type { SelectOption } from "@Types";
import { capitalize } from "@Utils";

export interface StatusPaginationProps {
    status: string;
    setStatus: Dispatch<SetStateAction<string>>;
    collectionStatus: Record<string, number>;
}

const StatusPagination: FC<StatusPaginationProps> = ({
    collectionStatus,
    setStatus,
    status,
}) => {
    type CollectionStatusKeys = keyof typeof collectionStatus;
    const collectionStatusOptions: SelectOption[] = [
        { value: "null", label: "All" },
        ...Object.keys(collectionStatus).map((label) => ({
            label: capitalize(label.toLowerCase()),
            value: collectionStatus[label as CollectionStatusKeys],
        })),
    ];
    return (
        <Select
            label="Status"
            containerClassName="w-auto mb-4 md:mb-0 items-center space-x-2 flex-row"
            className={"border border-gray-400"}
            value={status}
            options={collectionStatusOptions}
            onChange={(e) => setStatus(e.target.value)}
        />
    );
};

export default StatusPagination;

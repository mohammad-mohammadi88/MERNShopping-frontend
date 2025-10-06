import { ChevronDownIcon } from "@heroicons/react/20/solid";

const RowChevron = () => (
    <div className="size-full flex justify-end items-center">
        <ChevronDownIcon
            height={26}
            className="duration-200 ease-out group-data-open:-rotate-180"
        />
    </div>
);

export default RowChevron;

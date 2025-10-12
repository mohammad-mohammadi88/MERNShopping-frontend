import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import type { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";

interface Props {
    fields: string[];
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchInput: FC<Props> = ({ fields, searchQuery, setSearchQuery }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const isPlaceholderShown = !isFocused && searchQuery === "";
    const label = fields.join(" | ");

    return (
        <Field className="w-full relative">
            <Label
                className={clsx(
                    "mb-1 max-w-full truncate select-none cursor-pointer text-gray-700 capitalize duration-200 absolute left-3",
                    isPlaceholderShown
                        ? "top-1/2 -translate-y-1/2 text-lg"
                        : "-top-2.5 px-0.5 text-black bg-white text-sm"
                )}
            >
                {label}
            </Label>
            <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={clsx(
                    "border w-full rounded-md px-3 py-2",
                    "focus:outline-none focus:ring-2 focus:ring-red-400",
                    isFocused ? "border-red-400" : "border-gray-300"
                )}
            />
        </Field>
    );
};
export default SearchInput;

"use client";

import { Input } from "@headlessui/react";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
    setQuery: Dispatch<SetStateAction<string>>;
}
const SearchInput: FC<Props> = ({ setQuery }) => (
    <Input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search want your need"
        className="bg-white rounded-full w-auto p-2 border border-rose-400  outline-rose-400"
    />
);

export default SearchInput;

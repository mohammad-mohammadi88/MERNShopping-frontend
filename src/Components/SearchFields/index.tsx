"use client";

import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

import { Category } from "@Types";
import CategorySearch from "./CategorySearch";
import ResetBtn from "./ResetBtn";
import SearchInput from "./SearchInput";

interface Props {
    categories?: Category[] | undefined;
}
const SearchFields: FC<Props> = ({ categories }) => {
    const [query, setQuery] = useState<string>("");
    const router = useRouter();
    const [debouncedQuery, setDebouncedQuery] = useState<string>("");

    useEffect(() => {
        router.replace("/?q=" + debouncedQuery);
    }, [debouncedQuery]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query.trim());
            clearTimeout(timer);
        }, 500);
    }, [query]);

    const resetQuery = () => {
        setQuery("");
        router.replace("/");
    };
    return (
        <div className="px-4 flex-col md:flex-row items-start space-y-4 space-x-3 flex flex-wrap">
            <SearchInput setQuery={setQuery} />
            <CategorySearch setQuery={setQuery} categories={categories} />
            <ResetBtn resetQuery={resetQuery} />
        </div>
    );
};

export default SearchFields;

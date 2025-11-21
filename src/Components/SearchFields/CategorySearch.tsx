import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState, type FC } from "react";

import { Category } from "@Types";

interface Props {
    categories?: Category[];
    setQuery: Dispatch<SetStateAction<string>>;
}

const CategorySearch: FC<Props> = ({ categories, setQuery }) => {
    const [categoryQuery, setCategoryQuery] = useState<string>("");
    const [selected, setSelected] = useState<Category | null>(null);

    if (!categories) return;

    useEffect(() => {
        setQuery(selected ? selected._id : "");
    }, [selected]);

    const filteredCategories =
        categoryQuery === ""
            ? categories
            : categories.filter((category) => {
                  return category.title
                      .toLowerCase()
                      .includes(categoryQuery.toLowerCase());
              });
    return (
        <div>
            <Combobox
                value={selected}
                onChange={(value) => setSelected(value)}
                onClose={() => setCategoryQuery("")}
            >
                <div className="relative">
                    <ComboboxInput
                        className={clsx(
                            "w-full rounded-lg border-none bg-gray-500 py-1.5 pr-8 pl-3 text-white",
                            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
                        )}
                        displayValue={(value) =>
                            value ? (value as Category).title : "All"
                        }
                        onChange={(event) =>
                            setCategoryQuery(event.target.value)
                        }
                    />
                    <ComboboxButton className="group absolute cursor-pointer inset-y-0 right-0 px-2.5">
                        <ChevronDownIcon className="size-5 group-data-open:rotate-180  text-white duration-200 " />
                    </ComboboxButton>
                </div>

                <ComboboxOptions
                    anchor="bottom"
                    transition
                    className={clsx(
                        "w-(--input-width) rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:--spacing(1)] empty:invisible",
                        "transition duration-100 ease-in data-leave:data-closed:opacity-0"
                    )}
                >
                    <ComboboxOption
                        value={null}
                        className="group flex items-center gap-2 data-focus:brightness-95 hover:bg-blue-500 cursor-pointer duration-200 rounded-lg px-3 py-1.5 select-none"
                    >
                        <CheckIcon className="invisible size-4 group-data-selected:visible" />
                        <div className="text-sm/6 text-black">All</div>
                    </ComboboxOption>
                    {filteredCategories.map(({ _id, title }) => (
                        <ComboboxOption
                            key={_id}
                            value={{ _id, title }}
                            className="group flex items-center gap-2 data-focus:brightness-95 hover:bg-blue-500 cursor-pointer duration-200 rounded-lg px-3 py-1.5 select-none"
                        >
                            <CheckIcon
                                className={clsx(
                                    "size-4",
                                    selected?._id === _id
                                        ? "visible"
                                        : "invisible"
                                )}
                            />
                            <div className="text-sm/6 text-black">{title}</div>
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
        </div>
    );
};

export default CategorySearch;

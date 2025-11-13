import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import type { CSSProperties, FC } from "react";

import NavItemLink, { NavItem } from "./NavItemLink";

export interface NavGroupProps {
    name: string;
    items: NavItem[];
}

const handleWidth = (cols: number) => 150 + cols * (110 + cols * 15) + "px";
const handleCols = (itemsLength: number) => Math.ceil(itemsLength / 8);

const DesktopNavGroup: FC<NavGroupProps> = ({ name, items }) => {
    const cols = handleCols(items.length);
    return (
        <Popover>
            <PopoverButton
                className={clsx(
                    "outline-none data-hover:text-primary data-active:text-primary",
                    "px-3 py-1 group items-center flex capitalize cursor-pointer",
                    "text-base/6 text-black font-semibold duration-150"
                )}
            >
                {name}
                <ChevronDownIcon className="size-5 duration-150 group-data-open:-rotate-180" />
            </PopoverButton>
            <PopoverPanel
                transition
                anchor="bottom"
                style={
                    {
                        "--lg-width": handleWidth(cols),
                        "--lg-cols": cols,
                    } as CSSProperties
                }
                className={clsx(
                    "data-closed:-translate-y-1 duration-200 ease-in-out data-closed:opacity-0",
                    "rounded-xl mt-3 p-3 w-full text-sm/6 shadow shadow-gray-400 bg-white",
                    "lg:w-[var(--lg-width)] lg:columns-[var(--lg-cols)]"
                )}
            >
                {items.map((item) => (
                    <NavItemLink key={item.name + item.href} {...item} />
                ))}
            </PopoverPanel>
        </Popover>
    );
};
export default DesktopNavGroup;

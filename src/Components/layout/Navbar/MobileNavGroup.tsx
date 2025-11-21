import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import type { FC } from "react";

import { NavGroupProps } from "./DesktopNavGroup";
import NavItemLink from "./NavItemLink";

interface Props extends NavGroupProps {
    isLast: boolean;
    closeNavbar: () => void;
}
const MobileNavGroup: FC<Props> = ({ items, name, isLast, closeNavbar }) => (
    <Disclosure
        as="div"
        className={clsx("p-2", !isLast && "border-b border-b-gray-400")}
    >
        <DisclosureButton
            className={clsx(
                "outline-none data-hover:text-primary data-active:text-primary",
                "px-3 py-1 group items-center flex capitalize cursor-pointer",
                "text-base/6 text-black font-semibold duration-150"
            )}
        >
            <span className="pr-1">{name}</span>
            <ChevronDownIcon className="size-5 duration-150 group-data-open:-rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 text-sm/5 text-white/50 pl-2">
            {({ close }) => (
                <>
                    {items.map((item) => (
                        <NavItemLink
                            close={() => {
                                closeNavbar();
                                close();
                            }}
                            key={item.name + item.href}
                            {...item}
                        />
                    ))}
                </>
            )}
        </DisclosurePanel>
    </Disclosure>
);

export default MobileNavGroup;

"use client";
import clsx from "clsx";
import { FC, useState } from "react";

import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { NavItemsProps } from "./DesktopNav";
import MobileNavGroup from "./MobileNavGroup";

const MobileNav: FC<NavItemsProps> = ({ navItems }) => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setOpenSidebar(true)}
                className="cursor-pointer"
            >
                <Bars3BottomLeftIcon height={30} width={30} />
            </button>
            <div
                className={clsx(
                    "flex fixed bg-white h-screen duration-300 left-0 right-0 flex-col",
                    openSidebar ? "z-1000 bottom-0" : "-bottom-full"
                )}
            >
                <button
                    onClick={() => setOpenSidebar(false)}
                    className="cursor-pointer p-5"
                >
                    <XMarkIcon height={30} width={30} />
                </button>
                {navItems.map((item, i, arr) => (
                    <MobileNavGroup
                        isLast={i === arr.length - 1}
                        {...item}
                        key={item.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileNav;

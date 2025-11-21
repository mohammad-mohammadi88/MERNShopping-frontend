import Link from "next/link";
import type { FC, ReactNode } from "react";

import { AppRoutes } from "@Constants";

export interface NavItem {
    name: string;
    href: AppRoutes;
    Icon?: ReactNode;
}

const NavItemLink: FC<NavItem> = ({ href, name, Icon }) => (
    <Link
        key={href + name}
        className="flex items-center capitalize rounded-lg px-3 py-2 transition hover:bg-primary font-semibold text-black hover:text-white duration-150 "
        href={href}
    >
        {Icon}
        <span className="pl-1">{name}</span>
    </Link>
);

export default NavItemLink;

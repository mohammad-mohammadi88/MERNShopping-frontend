import Link from "next/link";
import type { FC, ReactNode } from "react";

import { AppRoutes } from "@Constants";

export interface NavItem {
    name: string;
    href: AppRoutes;
    Icon?: ReactNode;
}

interface Props extends NavItem {
    close: () => void;
}
const NavItemLink: FC<Props> = ({ href, name, Icon, close }) => (
    <Link
        key={href + name}
        onClick={close}
        className="flex items-center capitalize rounded-lg px-3 py-2 transition hover:bg-primary font-semibold text-black hover:text-white duration-150 z-10000"
        href={href}
    >
        {Icon}
        <span className="pl-1">{name}</span>
    </Link>
);

export default NavItemLink;

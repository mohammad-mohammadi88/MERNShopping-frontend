import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import navItems from "@/constants/navItems";
import { logo_dark } from "@Images";
import { NavbarAndFooterProps } from "../Footer";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar: FC<NavbarAndFooterProps> = async ({ categories }) => {
    const navItemsList = navItems(categories);
    return (
        <nav className="container px-20 py-4 flex justify-between mx-auto">
            <DesktopNav navItems={navItemsList} />
            <MobileNav navItems={navItemsList} />
            <Link href="/" className="flex cursor-pointer items-center">
                <Image src={logo_dark} alt="Clab logo" />
            </Link>
        </nav>
    );
};
export default Navbar;

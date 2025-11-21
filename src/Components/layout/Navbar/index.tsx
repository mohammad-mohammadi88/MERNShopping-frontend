import Image from "next/image";
import Link from "next/link";

import navItems from "@/constants/navItems";
import { logo_dark } from "@Images";
import { serverCategories } from "@ServerApi";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = async () => {
    const { ok, statusText, data } = await serverCategories.getAllCategories();
    const categories = !ok ? data || statusText : data.data;
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

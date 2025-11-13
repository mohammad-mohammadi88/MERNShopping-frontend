import Image from "next/image";
import Link from "next/link";

import { logo_dark } from "@Images";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => (
    <nav className="container px-20 py-4 flex justify-between mx-auto">
        <DesktopNav />
        <MobileNav />
        <Link href="/" className="flex cursor-pointer items-center">
            <Image src={logo_dark} alt="Clab logo" />
        </Link>
    </nav>
);

export default Navbar;

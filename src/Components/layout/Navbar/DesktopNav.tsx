import { FC } from "react";

import DesktopNavGroup, { NavGroupProps } from "./DesktopNavGroup";

export interface NavItemsProps {
    navItems: NavGroupProps[];
}
const DesktopNav: FC<NavItemsProps> = ({ navItems }) => (
    <div className="lg:flex hidden">
        {navItems.map((item) => (
            <DesktopNavGroup key={item.name} {...item} />
        ))}
    </div>
);

export default DesktopNav;

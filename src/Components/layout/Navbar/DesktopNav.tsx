import navItems from "@/constants/navItems";
import DesktopNavGroup from "./DesktopNavGroup";

const DesktopNav = () => (
    <div className="lg:flex hidden">
        {navItems().map((item) => (
            <DesktopNavGroup key={item.name} {...item} />
        ))}
    </div>
);

export default DesktopNav;

import {
    BanknotesIcon,
    BriefcaseIcon,
    BuildingStorefrontIcon,
    ChatBubbleBottomCenterTextIcon,
    Cog6ToothIcon,
    TruckIcon,
    UserGroupIcon,
} from "@heroicons/react/20/solid";
import {
    CreditCardIcon,
    GlobeAltIcon,
    MegaphoneIcon,
    PlusCircleIcon,
    ShoppingBagIcon,
    TagIcon,
} from "@heroicons/react/24/outline";

import type { SidebarItem } from "@Types";

const sidebarItems: (orderCount: number | string) => SidebarItem[] = (
    orderCount
) => [
    {
        id: "T6rHttpX49-2IU_aRASuQ",
        title: "Manage Products",
        Icon: BuildingStorefrontIcon,
        subItems: [
            {
                id: "FRS7ibZHC-0cCBKfWoI_G",
                title: "New Product",
                Icon: PlusCircleIcon,
                href: "/new-product",
            },
            {
                id: "ObHi-BWOtXXtHG2cpDjPk",
                title: "Products List",
                href: "/products",
            },
            {
                id: "3BDFIf69kjWFSa7fU7VNw",
                title: "New Category",
                href: "/new-category",
                Icon: PlusCircleIcon,
            },
            {
                id: "JxSJK7YQKrdRZQTy5Rg3x",
                title: "Categories List",
                href: "/categories",
            },
            {
                id: "Xj_G6cT9l6SyLD7xkfzFE",
                title: "Spection Offers",
                Icon: ShoppingBagIcon,
                href: "/products",
            },
        ],
    },
    {
        id: "S6652EjqMbbeB4pVBZOgA",
        title: "Manage Orders",
        Icon: BriefcaseIcon,
        subItems: [
            {
                id: "cgB196VpyHM7Snr1-CHhY",
                title: "Orders List",
                href: "/orders",
                rightElement: (
                    <div
                        title={String(orderCount)}
                        className="bg-red-500 rounded-full px-1.5 text-sm text-white"
                    >
                        {typeof orderCount === "number"
                            ? orderCount > 99
                                ? "99+"
                                : orderCount
                            : orderCount}
                    </div>
                ),
            },
        ],
    },
    {
        id: "h-lLF48pfp8GNBwzGaYDK",
        title: "Financial management",
        Icon: BanknotesIcon,
        subItems: [
            {
                id: "UltWrNvaisV_jXzF0Tkd6",
                title: "Payments",
                Icon: CreditCardIcon,
                href: "/products",
            },
            {
                id: "kjsldfHlksDASJDF_5FkF",
                href: "/new-coupon",
                title: "New Coupon",
                Icon: PlusCircleIcon,
            },
            {
                id: "BFCbik-i0HE63Hf-PI1Af",
                title: "Coupons",
                Icon: TagIcon,
                href: "/coupons",
            },
        ],
    },
    {
        id: "KA37SaPuVR7oZp9eJ_LZ3",
        title: "Consignments",
        Icon: TruckIcon,
        subItems: [
            {
                id: "fhOEWNlzal4k0d-McEH23",
                title: "Consignments List",
                href: "/products",
            },
        ],
    },
    {
        id: "NI0wp7yBlvCQ8p0Y-5P1y",
        title: "Customers",
        Icon: UserGroupIcon,
        subItems: [
            {
                id: "T4q1pHNH9hgZTokMZjE08",
                title: "Customers List",
                href: "/products",
            },
        ],
    },
    {
        id: "htjCyrpozahsZkTOGODCy",
        title: "Comments",
        Icon: ChatBubbleBottomCenterTextIcon,
        subItems: [
            {
                id: "kEUMXhrKHsHR3c280zjFg",
                title: "Comments List",
                href: "/products",
            },
        ],
    },
    {
        id: "OX0Zve-xlOTRonX6bkj5x",
        title: "Settings",
        Icon: Cog6ToothIcon,
        subItems: [
            {
                id: "_X9AygkKTLs-a1ovlbdRE",
                title: "Public",
                href: "/products",
                Icon: GlobeAltIcon,
            },
            {
                id: "PQeQycimlEOZDRqx-eLtg",
                title: "Notification",
                href: "/products",
                Icon: MegaphoneIcon,
            },
        ],
    },
];
export default sidebarItems;

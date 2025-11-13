import { NavGroupProps } from "@Components";
import { Cog8ToothIcon, RectangleStackIcon } from "@heroicons/react/24/outline";

export default (): NavGroupProps[] => [
    {
        name: "home",
        items: [
            {
                href: "/",
                name: "demo 1",
            },
            {
                href: "/",
                name: "demo 2",
            },
            {
                href: "/",
                name: "demo 3",
            },
            {
                href: "/",
                name: "demo 4",
            },
            {
                href: "/",
                name: "demo 5",
            },
            {
                href: "/",
                name: "agancy",
            },
            {
                href: "/",
                name: "business",
            },
            {
                href: "/",
                name: "corporate",
            },
            {
                href: "/",
                name: "creative",
            },
            {
                href: "/",
                name: "gym",
            },
            {
                href: "/",
                name: "insurance",
            },
            {
                href: "/",
                name: "job",
            },
            {
                href: "/",
                name: "listing",
            },
            {
                href: "/",
                name: "portfolio",
            },
            {
                href: "/",
                name: "product",
            },
            {
                href: "/",
                name: "startup",
            },
        ],
    },
    {
        name: "Pages",
        items: [
            {
                name: "inner page",
                href: "/",
                Icon: RectangleStackIcon,
            },
            {
                name: "utility page",
                href: "/",
                Icon: Cog8ToothIcon,
            },
        ],
    },
];

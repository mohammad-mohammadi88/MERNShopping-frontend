import { Cog8ToothIcon, RectangleStackIcon } from "@heroicons/react/24/outline";

import { NavGroupProps, NavItem } from "@Components";
import { Category } from "@Types";
import { FC } from "react";

interface NavGroup extends Omit<NavGroupProps, "items"> {
    items: (Omit<NavItem, "Icon"> & { Icon?: FC<{ className: string }> })[];
}
const navItems = (categories: Category[] | string): NavGroup[] => [
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
                href: "/payment",
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
    {
        name: "Categories",
        items:
            typeof categories === "string"
                ? [{ name: categories, href: "" }]
                : categories.map(({ _id, title: name }) => ({
                      href: `/?q=${_id}`,
                      name,
                  })),
    },
];

const formater = (items: NavGroup[]): NavGroupProps[] =>
    items.map(({ name, items }) => ({
        name,
        items: items.map(({ href, name, ...Item }) => {
            const obj: NavItem = {
                href,
                name,
            };
            if (Item.Icon) obj.Icon = <Item.Icon className="size-6" />;
            return obj;
        }),
    }));

export default (categories: Category[] | string) =>
    formater(navItems(categories));

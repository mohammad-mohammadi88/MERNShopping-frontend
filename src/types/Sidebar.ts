import type { JSX, ReactNode } from "react";

import type { RoutePath } from "@Routes";

export interface SidebarSubItem {
    Icon?: JSX.ElementType;
    title: string;
    id: string;
    href: RoutePath;
    rightElement?: ReactNode;
}
export interface SidebarItem {
    id: string;
    title: string;
    Icon: JSX.ElementType;
    subItems: SidebarSubItem[];
}

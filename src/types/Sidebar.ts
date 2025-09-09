import type { JSX, ReactNode } from "react";

export interface SidebarSubItem {
    Icon?: JSX.ElementType;
    title: string;
    id: string;
    href: string;
    rightElement?: ReactNode;
}
export interface SidebarItem {
    id: string;
    title: string;
    Icon: JSX.ElementType;
    subItems: SidebarSubItem[];
}

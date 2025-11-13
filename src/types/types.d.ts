import { AppRoutes } from "@Constants";
import "next/list";

declare module "next/link" {
    interface LinkProps extends Omit<import("next/link").LinkProps, "href"> {
        href: AppRoutes;
    }
}

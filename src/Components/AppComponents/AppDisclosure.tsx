import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";
import type { FC, JSX, ReactNode } from "react";

import ListItem from "../ListItem";

interface Props {
    title: string;
    children: ReactNode;
    Icon: JSX.ElementType;
    className?: string;
}

const AppDisclosure: FC<Props> = ({ children, className, title, Icon }) => (
    <Disclosure>
        <DisclosureButton className="group w-full flex items-center gap-2">
            <ListItem title={title} LeftIcon={Icon} chevron />
        </DisclosureButton>
        <DisclosurePanel
            transition
            className={clsx(
                "transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0",
                "w-full origin-top max-h-auto",
                className
            )}
        >
            {children}
        </DisclosurePanel>
    </Disclosure>
);

export default AppDisclosure;

import { Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import type { FC } from "react";
import { Fragment, memo } from "react";
import { Link } from "react-router";

import sidebarItems from "@/constants/sidebarItems";
import type { SidebarSubItem } from "@/types/Sidebar";
import { Disclosure } from "./AppComponents";
import ListItem from "./ListItem";

type Close = () => void;
interface SubItemProps {
    items: SidebarSubItem[];
    close: Close;
}
const SidebarSubItemComponent: FC<SubItemProps> = memo(({ close, items }) => (
    <>
        {items.map(({ title, Icon, rightElement, href, id }) => (
            <Link onClick={close} to={href}>
                <ListItem
                    key={id}
                    className="pl-5 block"
                    title={title}
                    LeftIcon={Icon}
                    RightElement={rightElement}
                />
            </Link>
        ))}
    </>
));

interface Props {
    show: boolean;
    close: Close;
}
const Sidebar: FC<Props> = ({ close, show }) => (
    <Transition show={show}>
        <div className="sm:max-h-screen top-0 bottom-0 left-0 right-0 absolute sm:static pb-6 w-screen sm:w-1/2 md:w-1/3 xl:w-1/4">
            <TransitionChild
                as={"div"}
                className={clsx(
                    // general
                    "absolute sm:hidden inset-0 bg-black z-10",
                    // transition
                    "data-closed:opacity-0 ease-in-out opacity-60 duration-500"
                )}
            />
            <TransitionChild
                transition
                as={"aside"}
                className={clsx(
                    // xs position
                    "absolute top-0 bottom-0 right-0",
                    // sm position
                    "sm:static sm:border sm:rounded",
                    // transition
                    "data-closed:right-full ease-in-out duration-500",
                    // general
                    "overflow-x-hidden z-20 max-h-full w-full scrollable bg-white"
                )}
            >
                <div className="flex sm:hidden items-center py-2 pl-2">
                    <button onClick={close} className="cursor-pointer">
                        <XMarkIcon height={30} />
                    </button>
                </div>
                {sidebarItems.map(({ subItems, id, ...props }, index) => (
                    <Fragment key={id}>
                        <Disclosure {...props}>
                            <SidebarSubItemComponent
                                close={close}
                                items={subItems}
                            />
                        </Disclosure>
                        {index < sidebarItems.length - 1 && (
                            <div className="h-0.5 bg-gray-300 w-full" />
                        )}
                    </Fragment>
                ))}
            </TransitionChild>
        </div>
    </Transition>
);

export default Sidebar;

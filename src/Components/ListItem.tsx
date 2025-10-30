import { Button } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import {
    memo,
    type FC,
    type JSX,
    type MouseEventHandler,
    type ReactNode,
} from "react";

import { RippleBtn } from ".";

interface Props {
    RightElement?: ReactNode;
    title: string;
    LeftIcon?: JSX.ElementType;
    className?: string;
    chevron?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface ContainerProps {
    children: ReactNode;
}
const ListItem: FC<Props> = ({
    title,
    className,
    LeftIcon = ListBulletIcon,
    RightElement = null,
    chevron = false,
    onClick,
}) => {
    const Container = ({ children }: ContainerProps) =>
        onClick ? (
            <Button onClick={onClick}>{children}</Button>
        ) : (
            <>{children}</>
        );
    return (
        <Container>
            <RippleBtn
                className={clsx(
                    "flex z-10 w-full font-semibold justify-between items-center p-2",
                    className
                )}
            >
                <div className="w-[calc(100%-20px)] flex items-center">
                    <LeftIcon height={26} color={"#364153"} />
                    <h3 className="mx-3 text-gray-700 truncate">{title}</h3>
                    {RightElement}
                </div>
                {chevron && (
                    <div className="w-5">
                        <ChevronDownIcon
                            color={"#364153"}
                            className="w-5 duration-200 ease-out h-7 group-data-open:-rotate-180"
                        />
                    </div>
                )}
            </RippleBtn>
        </Container>
    );
};
export default memo(ListItem);

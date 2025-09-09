import {
    PaperAirplaneIcon,
    PlusCircleIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { FC } from "react";

type Role = "add" | "delete" | "send";
interface Props {
    title: string;
    role?: Role;
    className?: string;
    onClick: () => void;
    type?: "button" | "submit";
}

const props = {
    height: 26,
    className: "pr-1",
};
const IconGenerator: FC<{ role: Role }> = ({ role }) =>
    role === "add" ? (
        <PlusCircleIcon {...props} />
    ) : role === "delete" ? (
        <TrashIcon {...props} />
    ) : (
        <PaperAirplaneIcon {...props} rotate={45} />
    );

const colorGenerator = (role: Role) =>
    role === "add" ? "blue" : role === "delete" ? "red" : "orange";

const Button: FC<Props> = ({
    title,
    className,
    role = "add",
    type = "button",
    onClick,
}) => (
    <button
        className={clsx(
            "flex cursor-pointer mb-2 duration-200 text-white p-2 rounded items-center",
            `bg-${colorGenerator(role)}-500`,
            `hover:bg-${colorGenerator(role)}-700`,
            className
        )}
        type={type}
        onClick={onClick}
    >
        <IconGenerator role={role} /> {role[0].toUpperCase() + role.slice(1)}{" "}
        {title}
    </button>
);

export default Button;

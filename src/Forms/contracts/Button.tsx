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

const classGenerator = (role: Role) =>
    role === "add"
        ? "bg-blue-500 hover:bg-blue-700"
        : role === "delete"
        ? "bg-red-500 hover:bg-red-700"
        : "bg-orange-500 hover:bg-orange-700";

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
            classGenerator(role),
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

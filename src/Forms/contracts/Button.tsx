import {
    PaperAirplaneIcon,
    PlusCircleIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { FC } from "react";

import { RippleBtn } from "@AppComponents";

type Role = "add" | "delete" | "send";
interface Props {
    title: string;
    role?: Role;
    className?: string;
    onClick: () => void;
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

const Button: FC<Props> = ({ title, className, role = "add", onClick }) => (
    <button
        className={clsx(
            "cursor-pointer mb-2 duration-200 text-white rounded",
            classGenerator(role),
            className
        )}
        type={role === "send" ? "submit" : "button"}
        onClick={onClick}
    >
        <RippleBtn className="flex hover:bg-transparent p-2 items-center">
            <IconGenerator role={role} />{" "}
            {role[0].toUpperCase() + role.slice(1)} {title}
        </RippleBtn>
    </button>
);

export default Button;

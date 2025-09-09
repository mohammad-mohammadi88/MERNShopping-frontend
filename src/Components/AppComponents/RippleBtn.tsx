import clsx from "clsx";
import { useState, type FC, type ReactNode } from "react";

interface Ripple {
    left: number;
    top: number;
    size: number;
}

interface Props {
    children: ReactNode;
    className?: string;
}
const RippleBtn: FC<Props> = ({ children, className }) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const addRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const left = e.clientX - rect.left - size / 2;
        const top = e.clientY - rect.top - size / 2;

        const newRipple = { left, top, size };
        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.slice(1));
        }, 200);
    };
    return (
        <span
            className={clsx(
                "relative w-full overflow-hidden cursor-pointer hover:bg-gray-200 duration-200",
                className
            )}
            onClick={addRipple}
        >
            {children}
            {ripples.map(({ left, size, top }, i) => (
                <span
                    key={i}
                    className="absolute rounded-full bg-black/10 animate-ripple"
                    style={{
                        left,
                        top,
                        width: size,
                        height: size,
                    }}
                />
            ))}
        </span>
    );
};

export default RippleBtn;

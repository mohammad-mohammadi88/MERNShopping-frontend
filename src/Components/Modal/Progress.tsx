import type { FC } from "react";

interface Props {
    progress: number;
}

const Progress: FC<Props> = ({ progress }) => (
    <div className="h-1.5 overflow-hidden text-left w-full rounded bg-gray-400">
        <div
            className="bg-red-500 h-full duration-500"
            style={{ width: `${Math.min(1, progress) * 100}%` }}
        />
    </div>
);

export default Progress;

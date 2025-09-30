import { capitalize } from "@/utils";

interface Props<T> {
    currentStatus: keyof T;
    statusColors: Record<keyof T, `#${string}`>;
}

const Status = <T,>({ currentStatus, statusColors }: Props<T>) => (
    <span
        className="text-white p-2 rounded-full"
        style={{ backgroundColor: statusColors[currentStatus], color: "white" }}
    >
        {capitalize(currentStatus.toString().toLowerCase())}
    </span>
);

export default Status;

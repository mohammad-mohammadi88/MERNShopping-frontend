import { Status } from "@Components";
import { getStatusName } from "@Utils";

interface Props<T> {
    status: T[keyof T];
    statusColors: Record<keyof T, `#${string}`>;
    statuses: T;
}

const ShowCurrentStatus = <T extends object>({
    status,
    statusColors,
    statuses,
}: Props<T>) => (
    <p className="text-lg mt-2">
        <strong>Current Status:</strong>{" "}
        <Status
            statusColors={statusColors}
            currentStatus={getStatusName(statuses, status)}
        />
    </p>
);

export default ShowCurrentStatus;

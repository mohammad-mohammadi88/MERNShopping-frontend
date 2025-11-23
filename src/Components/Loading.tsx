import type { FC } from "react";

interface Props {
    loading?: boolean;
}

const Loading: FC<Props> = ({ loading = true }) =>
    loading && (
        <div className="flex justify-center items-center h-32">
            <div className="border-b-4 border-r-4 size-12 border-red-500 animate-spin rounded-full" />
        </div>
    );

export default Loading;

import type { FC } from "react";

interface Props {
    loading: boolean;
}

const Loading: FC<Props> = ({ loading }) =>
    loading && (
        <div className="flex justify-center items-center h-32">
            <div className="border-b-4 border-r-4 size-12 border-red-500 animate-spin rounded-full"></div>
        </div>
    );

export default Loading;

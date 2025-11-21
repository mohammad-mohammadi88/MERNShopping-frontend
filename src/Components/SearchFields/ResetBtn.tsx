import { FC } from "react";

interface Props {
    resetQuery: () => void;
}
const ResetBtn: FC<Props> = ({ resetQuery }) => (
    <button
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer p-2 duration-150 rounded-lg text-white"
        onClick={resetQuery}
    >
        Reset Your Filters
    </button>
);

export default ResetBtn;

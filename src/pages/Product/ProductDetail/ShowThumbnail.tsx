import clsx from "clsx";
import type { FC } from "react";

interface Props {
    thumbnail: string;
}

const ShowThumbnail: FC<Props> = ({ thumbnail }) => (
    <div>
        <strong className="text-xl">Thumbnail</strong>
        <div
            className={clsx(
                "size-36 rounded-xl bg-gray-200 hover:bg-gray-300 duration-200 overflow-hidden mt-1",
                "flex justify-center items-center"
            )}
        >
            <img
                src={thumbnail}
                alt="preview"
                width={100}
                height={100}
                className="h-full w-full object-cover"
            />
        </div>
    </div>
);
export default ShowThumbnail;

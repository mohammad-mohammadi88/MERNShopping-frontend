import type { FC } from "react";

interface Props {
    url: string;
}

const ShowGalleryImage: FC<Props> = ({ url }) => (
    <div>
        <div className={"size-36 border rounded-xl overflow-hidden"}>
            <img
                src={url}
                alt="gallery image"
                width={100}
                height={100}
                className="size-full object-cover"
            />
        </div>
    </div>
);

export default ShowGalleryImage;

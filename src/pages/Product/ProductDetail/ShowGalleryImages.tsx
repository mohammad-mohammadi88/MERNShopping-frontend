import type { FC } from "react";

import { ListArrayField } from "@Components";

const ShowGalleryImage: FC<{ url: string }> = ({ url }) => (
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

const ShowGalleryImages: FC<{ gallery: string[] }> = ({ gallery }) => (
    <ListArrayField arrayLength={gallery.length} title="Gallery">
        <div className="flex overflow-x-scroll -pl-2 sm:pl-0 w-56 md:w-96 lg:w-full space-x-2.5 pb-3 snap-x snap-mandatory scroll-container scrollbar-hide">
            {gallery.map((image) => (
                <ShowGalleryImage url={image} key={image} />
            ))}
        </div>
    </ListArrayField>
);

export default ShowGalleryImages;

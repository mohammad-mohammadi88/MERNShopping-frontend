import { ImageInputList } from "@/Components";
import { useState, type FC } from "react";

const Index: FC = () => {
    const [images, setImages] = useState<File[]>([]);
    const onAdd = (img: File) => setImages((c) => [...c, img]);
    const onRemove = (img: File) =>
        setImages((c) => c.filter((a) => a !== img));
    return (
        <div className="bg-white p-10">
            <ImageInputList
                images={images}
                onAdd={onAdd}
                onRemove={onRemove}
                maxImageCount={3}
            />
        </div>
    );
};

export default Index;

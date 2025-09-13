import { CameraIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { memo, useEffect, useRef, useState, type FC } from "react";

import { AlertModal } from ".";

interface Props {
    image?: File;
    onChangeImage: (image: File) => void;
}
const generateUrl = (image: File | undefined) =>
    image ? URL.createObjectURL(image) : null;

const ImageInput: FC<Props> = ({ image, onChangeImage }) => {
    const [confirmDeleteImage, setConfirmDeleteImage] =
        useState<boolean>(false);
    const [preview, setPreview] = useState<string | null>(generateUrl(image));

    const inputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];
        if (file)
            return file.type.startsWith("image/")
                ? onChangeImage(file)
                : alert("you can only select image");
    };

    useEffect(() => {
        setPreview(generateUrl(image));
    }, [image]);
    const handleClick = () => {
        if (!image) return inputRef.current?.click();
        setConfirmDeleteImage(true);
    };

    const onClose = () => setConfirmDeleteImage(false);
    return (
        <div>
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImageChange}
                className="hidden"
            />

            <AlertModal
                description="Are you sure want to delete image?"
                isOpen={confirmDeleteImage}
                onClose={onClose}
                onConfirm={() => {
                    onClose();
                    if (image) onChangeImage(image);
                }}
                title="Delete"
                role="confirm"
            />
            <div
                onClick={handleClick}
                className={clsx(
                    "size-36 rounded-xl bg-gray-200 hover:bg-gray-300 duration-200 overflow-hidden cursor-pointer",
                    "flex justify-center items-center"
                )}
            >
                {preview ? (
                    <img
                        src={preview}
                        alt="preview"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <CameraIcon className="w-8 text-light-600" />
                )}
            </div>
        </div>
    );
};

export default memo(ImageInput);

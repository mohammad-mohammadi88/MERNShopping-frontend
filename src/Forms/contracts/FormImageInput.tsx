import { Field, Label } from "@headlessui/react";
import { useFormikContext } from "formik";
import type { FC } from "react";

import { ImageInputList } from "@Components";
import constants from "@Constants";
import { capitalize } from "@Utils";
import { ErrorMessage } from ".";

interface Props {
    name: string;
    maxGalleryImageCount?: number;
}

const FormImageInput: FC<Props> = ({
    name,
    maxGalleryImageCount = constants.maxGalleryImageCount,
}) => {
    const { setFieldValue, values } = useFormikContext();
    // @ts-ignore
    const images: File[] = values[name];

    const onAdd = (file: File) => setFieldValue(name, [...images, file]);

    const onRemove = (file: File) =>
        setFieldValue(
            name,
            images.filter((i) => i !== file)
        );

    return (
        <Field>
            <Label className="field-label">{capitalize(name)}</Label>
            <ImageInputList
                images={images}
                onRemove={onRemove}
                onAdd={onAdd}
                maxImageCount={maxGalleryImageCount}
            />
            <ErrorMessage name={name} />
        </Field>
    );
};

export default FormImageInput;

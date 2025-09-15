import type { ApiOkResponse } from "apisauce";
import { useEffect, useState, type FC } from "react";

import { Loading } from "@/Components";
import urlToObject from "@/utils/urlToObject";
import type { Category, EditProductValue, Product } from "@Types";
import ProductLogic from "../contracts/ProductLogic";

interface Props {
    handleSubmit: (values: EditProductValue) => void;
    categories: ApiOkResponse<Category[]>;
    initialValues: ApiOkResponse<Product>;
}

const AddProductLogic: FC<Props> = ({ initialValues: { data }, ...props }) => {
    const [thumbnail, setThumbnail] = useState<File | undefined>(undefined);
    const [isReady, setIsReady] = useState<boolean>(false);
    const [gallery, setGallery] = useState<File[]>([]);

    const handleImages = async () => {
        setThumbnail(await urlToObject(data?.thumbnail ?? ""));
        const handleGallery = data?.gallery.map(async (val) => {
            const image = await urlToObject(val);
            setGallery((c) => [...c, image]);
            return;
        }) as Promise<void>[];
        await Promise.all([...handleGallery]);
        setIsReady(true);
    };

    useEffect(() => {
        handleImages();
    }, []);

    return !isReady ? (
        <Loading loading />
    ) : (
        data && (
            <ProductLogic
                initialValues={{
                    ...data,
                    thumbnail: [thumbnail],
                    // to display an empty field when salePrice is
                    salePrice: data.salePrice ?? ("" as unknown as number),
                    gallery,
                }}
                {...props}
                role="edit"
            />
        )
    );
};

export default AddProductLogic;

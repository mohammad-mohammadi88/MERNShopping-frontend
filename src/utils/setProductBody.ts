import type { AddProductValue, EditProductValue } from "@Types";

export default ({
    gallery,
    thumbnail,
    ...others
}: EditProductValue | AddProductValue): FormData => {
    const data = new FormData();
    Object.keys(others).forEach((key) => {
        const value = others[key as keyof typeof others];
        data.append(
            key,
            typeof value === "string" ? value : JSON.stringify(value)
        );
    });
    data.append("thumbnail", thumbnail[0] as File);
    gallery.forEach((item) => data.append("gallery", item));

    return data;
};

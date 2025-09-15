import type { AddProductValue, EditProductValue } from "@Types";

export default ({
    gallery,
    thumbnail,
    ...others
}: EditProductValue | AddProductValue): FormData => {
    const data = new FormData();
    Object.keys(others).forEach((key) =>
        data.append(key, JSON.stringify(others[key as keyof typeof others]))
    );
    data.append("thumbnail", thumbnail[0] as File);
    gallery.forEach((item) => data.append("gallery", item));

    return data;
};

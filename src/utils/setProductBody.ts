import type { FormProductValue } from "@Types";

export default ({
    attrs,
    gallery,
    price,
    productCategory,
    thumbnail,
    title,
}: FormProductValue): FormData => {
    const data = new FormData();
    data.append("title", title);
    data.append("price", JSON.stringify(price));
    data.append("attrs", JSON.stringify(attrs));
    data.append("productCategory", productCategory);
    data.append("thumbnail", thumbnail[0] as File);
    gallery.forEach((item) => data.append("gallery", item));
    return data;
};

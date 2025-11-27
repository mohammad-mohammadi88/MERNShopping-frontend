import type { FC } from "react";

import { QueryProvider } from "@/reactQuery";
import { serverProducts } from "@ServerApi";
import InfiniteScroll from "./InfiniteScroll";

interface Props {
    productCategory: string | null;
}

const ProductWithSameCategory: FC<Props> = async ({ productCategory }) => {
    if (!productCategory) return null;

    const { data, ok, statusText } = await serverProducts.getProducts({
        query: productCategory,
    });
    return (
        <section className="flex-wrap container mx-auto mt-5 flex space-y-8">
            {!ok ? (
                <p className="text-error">{data || statusText}</p>
            ) : (
                <QueryProvider>
                    <InfiniteScroll
                        initialProducts={data}
                        initialQuery={productCategory}
                    />
                </QueryProvider>
            )}
        </section>
    );
};

export default ProductWithSameCategory;

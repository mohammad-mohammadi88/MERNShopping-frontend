import type { Metadata, NextPage } from "next";

import { ProductDetail, ProductWithSameCategory } from "@Components";
import { productStatus } from "@Constants";
import { serverProducts } from "@ServerApi";

interface Props {
    params: Promise<{ id: string }>;
}
export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const productId = (await params).id;
    const { data, statusText, ok } = await serverProducts.getSingleProduct(
        productId
    );

    return { title: !ok ? data || statusText : data.title };
};

const ProductDetails: NextPage<Props> = async ({ params }) => {
    const productId = (await params).id;
    const { data, statusText, ok } = await serverProducts.getSingleProduct(
        productId
    );
    return (
        <>
            <main className="container mx-auto my-8 bg-white rounded-2xl p-4">
                {!ok ? (
                    data || statusText
                ) : data.status !== productStatus.PUBLISHED ? (
                    "Product Not Found"
                ) : (
                    <ProductDetail {...data} />
                )}
            </main>
            {
                <ProductWithSameCategory
                    productCategory={
                        typeof data === "object"
                            ? data.productCategory._id
                            : null
                    }
                />
            }
        </>
    );
};

export default ProductDetails;

import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "Product Details Page",
    description: "",
};

interface Props {
    params: Promise<{ id: string }>;
}
const ProductDetails: NextPage<Props> = async ({ params }) => {
    const id = (await params).id;
    return <div>ProductId: {id}</div>;
};

export default ProductDetails;

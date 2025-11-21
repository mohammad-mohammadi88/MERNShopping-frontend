import type { Metadata, NextPage } from "next";

import { Cart, Header, SearchFields } from "@Components";
import { serverCategories, serverProducts } from "@ServerApi";

export const metadata: Metadata = {
    title: "Clab Shop",
    description: "Shop your always needed",
};

interface Props {
    searchParams: Promise<{ q?: string }>;
}
const Index: NextPage<Props> = async ({ searchParams }) => {
    const { q: query = "" } = await searchParams;
    console.log("🚀 ~ Index ~ query:", query);

    const { ok, statusText, data } = await serverProducts.getProducts({
        query,
    });
    const categories = await serverCategories.getAllCategories();
    if (!ok)
        return (
            <div className="h-52 flex justify-center items-center">
                <p className="text-red-500 font-semibold text-2xl">
                    {data || statusText}
                </p>
            </div>
        );
    data.data.pop();
    return (
        <>
            <Header />
            <main className="container mx-auto mt-15">
                <SearchFields
                    categories={
                        categories.ok ? categories.data.data : undefined
                    }
                />
                <div className="flex-wrap mt-5 flex space-y-8">
                    {data.data.map((product) => (
                        <Cart key={product._id} {...product} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Index;

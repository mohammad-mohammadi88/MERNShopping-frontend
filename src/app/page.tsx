import type { Metadata, NextPage } from "next";

import { QueryProvider } from "@/reactQuery";
import { Header, InfiniteScroll, SearchFields } from "@Components";
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

    const { ok, statusText, data } = await serverProducts.getProducts({
        perPage: 2,
        page: 1,
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
    return (
        <>
            <Header />
            <main className="container mx-auto mt-15" id="courses">
                <SearchFields
                    categories={
                        categories.ok ? categories.data.data : undefined
                    }
                />
                <div className="flex-wrap mt-5 flex space-y-8">
                    <QueryProvider>
                        <InfiniteScroll initialProducts={data} />
                    </QueryProvider>
                </div>
            </main>
        </>
    );
};

export default Index;

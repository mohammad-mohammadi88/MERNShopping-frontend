import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "Index Page",
    description: "",
};

const Index: NextPage = async () => {
    return (
        <div>
            {/* hello world */}
            {/* <Link href="/payment">payments</Link> */}
        </div>
    );
};

export default Index;

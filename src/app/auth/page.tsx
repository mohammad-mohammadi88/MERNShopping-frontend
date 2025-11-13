import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "Auth Page",
    description: "",
};

const Auth: NextPage = async () => {
    return <div>auth</div>;
};

export default Auth;

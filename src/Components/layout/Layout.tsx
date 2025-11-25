import type { FC, ReactNode } from "react";

import { serverCategories } from "@ServerApi";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = async ({ children }) => {
    const { ok, statusText, data } = await serverCategories.getAllCategories();
    const categories = !ok ? data || statusText : data.data;
    return (
        <>
            <Navbar categories={categories} />
            {children}
            <Footer categories={categories} />
        </>
    );
};

export default Layout;

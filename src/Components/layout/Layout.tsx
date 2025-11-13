import type { FC, ReactNode } from "react";

import Header from "./Header";
import Navbar from "./Navbar";

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
    <>
        <Navbar />
        <Header />
        {children}
    </>
);

export default Layout;

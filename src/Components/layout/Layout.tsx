import type { FC, ReactNode } from "react";

import Navbar from "./Navbar";

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
    <>
        <Navbar />
        {children}
    </>
);

export default Layout;

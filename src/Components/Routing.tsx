import type { FC } from "react";
import { Route, Routes } from "react-router";

import { NewCategory, Products } from "@Pages";

const Routing: FC = () => (
    <Routes>
        <Route path="/products" Component={Products} />
        <Route path="/new-category" Component={NewCategory} />
    </Routes>
);

export default Routing;

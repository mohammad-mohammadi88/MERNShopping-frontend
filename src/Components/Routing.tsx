import type { FC } from "react";
import { Route, Routes } from "react-router";

import { Index, NewCategory, Products } from "@Pages";

const Routing: FC = () => (
    <Routes>
        <Route path="/" Component={Index} />
        <Route path="/products" Component={Products} />
        <Route path="/new-category" Component={NewCategory} />
    </Routes>
);

export default Routing;

import type { FC } from "react";

import ProductsLoader from "./Loading";

const Products: FC = () => (
    <div className="bg-white rounded p-8">
        <h1 className="font-bold text-2xl">Products List</h1>
        <ProductsLoader />
    </div>
);

export default Products;

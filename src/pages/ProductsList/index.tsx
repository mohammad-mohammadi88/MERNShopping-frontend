import { productsApi } from "@Api";
import { PaginatedPage, RowItem, type RowItemProps } from "@Components";
import type { Product } from "@Types";
import { convertTime } from "@Utils";
import ProductsLoader from "./Loading";
import ProductItem from "./ProductItem";

const rowItems: RowItemProps[] = [
    { inVisible: true, className: "!w-10", SM: false, MD: true },
    { children: "Title" },
    { children: "Quantity", hidden: true, LG: true },
    { children: "Status", hidden: true, LG: true },
    { children: "Category", hidden: true, XL: true },
    { children: "Exact Price", hidden: true, XXL: true },
    { children: "Sale Price", hidden: true, MD: true },
    { children: "open", className: "max-w-10", inVisible: true },
];
const searchFields: string[] = ["title", "category"];
const Products = () => (
    <PaginatedPage<Product, {}>
        fields={searchFields}
        label="products"
        staleTime={convertTime(60)}
        LoadingComponent={ProductsLoader}
        apiCall={({ status, ...params }) => productsApi.getProducts(params)}
        DatumItemComponent={ProductItem}
    >
        {rowItems.map((props, i) => (
            <RowItem key={i} isHeading {...props} />
        ))}
    </PaginatedPage>
);

export default Products;

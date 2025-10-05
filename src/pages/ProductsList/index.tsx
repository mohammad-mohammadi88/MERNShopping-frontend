import { productsApi } from "@Api";
import { PaginatedPage } from "@Components";
import type { Product } from "@Types";
import { convertTime } from "@Utils";
import ProductsLoader from "./Loading";
import ProductItem from "./ProductItem";

const Products = () => (
    <PaginatedPage<Product, {}>
        label="product"
        // 60 minutes
        staleTime={convertTime(60)}
        LoadingComponent={ProductsLoader}
        apiCall={({ page, perPage }) =>
            productsApi.getProducts({ page, perPage })
        }
        DatumItemComponent={ProductItem}
    >
        <th
            className="flex-1 !w-10 sm:hidden md:table-cell table-row-item invisible"
            aria-hidden="true"
        />
        <th className="flex-1 table-row-item">Title</th>

        <th className="flex-1 hidden lg:table-cell table-row-item">Quantity</th>
        <th className="flex-1 hidden lg:table-cell table-row-item">Status</th>
        <th className="flex-1 hidden xl:table-cell table-row-item">
            Exact Price
        </th>
        <th className="flex-1 sm:hidden md:table-cell table-row-item">
            Sale Price
        </th>
        <th className="max-w-10 table-row-item invisible" aria-hidden="true">
            open
        </th>
    </PaginatedPage>
);

export default Products;

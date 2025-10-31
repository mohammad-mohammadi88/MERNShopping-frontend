import { productsApi } from "@Api";
import { DatumDetailPage } from "@Components";
import ProductItem from "./ProductItem";

const ProductDetail = () => (
    <DatumDetailPage
        datumName="product"
        navigateUrl="/products"
        apiCall={productsApi.getProductById}
        DatumItem={ProductItem}
    />
);

export default ProductDetail;

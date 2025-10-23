import { productsApi } from "@Api";
import { DatumDetailPage } from "@Components";
import ProductDatumShow from "./ProductDatumShow";

const ProductDetail = () => (
    <DatumDetailPage
        datumName="product"
        navigateUrl="/products"
        apiCall={productsApi.getProductById}
        DatumItem={ProductDatumShow}
    />
);

export default ProductDetail;

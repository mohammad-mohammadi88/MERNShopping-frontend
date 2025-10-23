import type { FC } from "react";
import { Route, Routes } from "react-router";

import {
    CategoriesList,
    CouponsList,
    EditProduct,
    Index,
    NewCategory,
    NewCoupon,
    NewProduct,
    OrderDetail,
    OrdersList,
    PaymentCancel,
    PaymentDetail,
    PaymentsList,
    ProductDetail,
    ProductsList,
} from "@Pages";

const Routing: FC = () => (
    <Routes>
        <Route path="/" Component={Index} />
        <Route path="/cancel" Component={PaymentCancel} />

        {/* Products */}
        <Route path="/products" Component={ProductsList} />
        <Route path="/new-product" Component={NewProduct} />
        <Route path="/edit-product/:id" Component={EditProduct} />
        <Route path="/product/:id" Component={ProductDetail} />

        {/* Orders */}
        <Route path="/orders" Component={OrdersList} />
        <Route path="/order/:id" Component={OrderDetail} />

        {/* Coupons */}
        <Route path="/coupons" Component={CouponsList} />
        <Route path="/new-coupon" Component={NewCoupon} />

        {/* Categories */}
        <Route path="/categories" Component={CategoriesList} />
        <Route path="/new-category" Component={NewCategory} />

        {/* Payments */}
        <Route path="/payments" Component={PaymentsList} />
        <Route path="/payment/:id" Component={PaymentDetail} />
    </Routes>
);

export default Routing;

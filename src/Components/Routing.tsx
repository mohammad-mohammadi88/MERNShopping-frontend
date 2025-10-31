import type { FC } from "react";
import { Route, Routes } from "react-router";

import {
    CategoriesList,
    CouponDetail,
    CouponsList,
    CustomerDetail,
    CustomersList,
    EditProduct,
    EditUserAuth,
    EditUserBasics,
    Index,
    NewCategory,
    NewCoupon,
    NewProduct,
    OrderDetail,
    OrdersList,
    PaymentDetail,
    PaymentsList,
    ProductDetail,
    ProductsList,
} from "@Pages";

const Routing: FC = () => (
    <Routes>
        <Route path="/" Component={Index} />

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
        {/* This id is the coupon code but because of DatumDetailPage component I should use id word */}
        <Route path="/coupon/:id" Component={CouponDetail} />
        <Route path="/new-coupon" Component={NewCoupon} />

        {/* Categories */}
        <Route path="/categories" Component={CategoriesList} />
        <Route path="/new-category" Component={NewCategory} />

        {/* Payments */}
        <Route path="/payments" Component={PaymentsList} />
        <Route path="/payment/:id" Component={PaymentDetail} />

        {/* Customers */}
        <Route path="/customers" Component={CustomersList} />
        <Route path="/customer/:id" Component={CustomerDetail} />
        <Route path="/edit-customer/auth/:id" Component={EditUserAuth} />
        <Route path="/edit-customer/:id" Component={EditUserBasics} />
    </Routes>
);

export default Routing;

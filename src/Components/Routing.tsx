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
    ProductsList,
} from "@Pages";

const Routing: FC = () => (
    <Routes>
        <Route path="/" Component={Index} />
        <Route path="/products" Component={ProductsList} />
        <Route path="/categories" Component={CategoriesList} />
        <Route path="/coupons" Component={CouponsList} />
        <Route path="/payments" Component={PaymentsList} />
        <Route path="/orders" Component={OrdersList} />
        <Route path="/cancel" Component={PaymentCancel} />
        <Route path="/new-category" Component={NewCategory} />
        <Route path="/new-product" Component={NewProduct} />
        <Route path="/new-coupon" Component={NewCoupon} />
        <Route path="/order/:id" Component={OrderDetail} />
        <Route path="/payment/:id" Component={PaymentDetail} />
        <Route path="/edit-product/:id" Component={EditProduct} />
    </Routes>
);

export default Routing;

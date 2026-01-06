"use client";

import { CartOrder, CartOrderProduct } from "@Types";

const cartName = "orderCart";

// initials
const initialCart: CartOrder = {
    couponCode: null,
    products: [],
};
const getOrder = (): CartOrder =>
    JSON.parse(localStorage.getItem(cartName) || JSON.stringify(initialCart));

const setOrder = (newOrder: CartOrder) =>
    localStorage.setItem(cartName, JSON.stringify(newOrder));

// products
const addProduct = (newProduct: CartOrderProduct) => {
    const order = getOrder();
    order.products.push(newProduct);
    setOrder(order);
};

const removeProduct = (index: number) => {
    const order = getOrder();
    order.products = order.products.filter((_, i) => i !== index);
    setOrder(order);
};

// couponCode
const addCoupon = (couponCode:string) => setOrder({ ...getOrder(), couponCode })

// cart
const deleteCart = () => setOrder(initialCart);

const getFormattedCart = () => {
    const order = getOrder();
    order.products.map((product) => ({...product, product: product.product._id }));
    return order;
}

const orderCart = {
    getOrder,
    addProduct,
    removeProduct,
    deleteCart,
    addCoupon,
    getFormattedCart
};
export default orderCart;

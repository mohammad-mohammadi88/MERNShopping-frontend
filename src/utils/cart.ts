import { CartOrder, CartOrderProduct } from "@Types";

const cartName = "orderCart";

const initialCart: CartOrder = {
    couponCode: null,
    products: [],
};
const getOrder = (): CartOrder =>
    JSON.parse(localStorage.getItem(cartName) || JSON.stringify(initialCart));

const setOrder = (newOrder: CartOrder) =>
    localStorage.setItem(cartName, JSON.stringify(newOrder));

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

const deleteCart = () => setOrder(initialCart);

const orderCart = {
    getOrder,
    addProduct,
    removeProduct,
    deleteCart,
};
export default orderCart;

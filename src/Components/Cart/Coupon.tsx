"use client";
import { useState } from "react";

import orderCart from "@/utils/cart";

const CartCoupon = () => {
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [coupon, setCoupon] = useState<string>("");

    const { addCoupon, getOrder } = orderCart;
    const { couponCode } = getOrder();

    if(couponCode) return <p className="text-green-700">You Have added your coupon</p>;

    const handleClick = () => {
	if(!isTyping) return setIsTyping(true);

	addCoupon(coupon);
	setCoupon("");
	setIsTyping(false);
    }
    return (
	<div className="flex flex-wrap items-center space-y-2 space-x-2">
	    {isTyping && <input value={coupon} className="border p-1 rounded" onChange={e => setCoupon(e.target.value)} />}
	    <button onClick={handleClick} className="rounded duration-200 hover:bg-blue-700 bg-blue-600 text-white p-2">Use Coupon</button>
	</div>
    )
}

export default CartCoupon

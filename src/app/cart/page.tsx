"use client";

import type { NextPage } from "next";
import { useRouter } from "next/navigation";

import orderCart from "@/utils/cart";
import { CardProduct, Coupon } from "@Components";
import { clientOrders } from "@ClientApi";

const Cart: NextPage = () => {
    if(typeof window === "undefined") return null;
    const router = useRouter();

    const { products } = orderCart.getOrder();
     
    const finalPrice = products.reduce((prev,current) => current.product.salePrice + prev,0) 

    const handleOrder = async () => {
	const formattedCart = orderCart.getFormattedCart();
	const { data, ok } = await clientOrders.addOrder()	
        alert(ok ? 'New Order added successfully' : data);
	if(ok) router.push("/")
    };

    return (
	<>
            <main className="container space-y-4 mx-auto">
	        {products.map((cartProduct, i) => (
	            <CardProduct key={i} index={i} {...cartProduct} />
		))}
            </main>
	    <section className="container mx-auto my-8">
		<div className="bg-white px-2 py-4 rounded-xl flex flex-col md:flex-row md:justify-between md:items-center shadow-lg">
		    <p className="font-bold text-lg">Final Price: {finalPrice}$</p>
		    <div className="flex flex-wrap items-center space-x-2">
		        <Coupon />
			<button type="button" onClick={handleOrder} className="rounded bg-red-600 text-white p-2">Add Order</button>
		    </div>
		</div>
	    </section>
	</>
    );
};

export default Cart;

"use client";

import React, { useState } from "react";
import themeColors from "@/app/component/themeColor";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

const CartPage = () => {
    const theme = themeColors.dark;
    const { cart, removeFromCart, clearCart, totalPrice } = useCart();
    const [shownToast, setShownToast] = useState(false);

    return (
        <div
            style={{ background: theme.background, color: theme.text }}
            className="min-h-80 p-4 sm:p-8 md:p-10"
        >
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 mt-15 text-center md:text-left">Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-lg text-center md:text-left">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">

                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 border p-4 rounded"
                        >
                            <img
                                src={item.image}
                                className="w-full md:w-32 h-48 md:h-32 rounded object-cover"
                                alt={item.name}
                            />

                            <div className="flex-1 w-full md:w-auto flex flex-col justify-between">
                                <div>
                                    <h2 className="font-bold text-lg">{item.name}</h2>
                                    <p className="text-sm mt-1">{item.price}</p>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.cartId)}
                                    className="bg-red-600 px-4 py-2 mt-4 rounded text-white cursor-pointer w-full md:w-35"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="mt-6 text-lg sm:text-xl font-semibold text-left md:text-left">
                        Total: ${totalPrice}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-start">
                        <button
                            onClick={clearCart}
                            className="bg-gray-600 px-5 py-2 rounded text-white cursor-pointer w-full sm:w-auto"
                        >
                            Clear Cart
                        </button>

                        <button
                            onClick={() => {
                                if (!shownToast) {
                                    toast.success("Proceeding to checkout...");
                                    setShownToast(true);
                                }
                            }}
                            className="bg-green-600 px-5 py-2 rounded text-white cursor-pointer w-full sm:w-auto"
                        >
                            Proceed to Checkout
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default CartPage;

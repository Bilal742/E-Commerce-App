"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [discountCode, setDiscountCode] = useState("");
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discountPercent, setDiscountPercent] = useState(0);

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart((prev) =>
                prev.map((item) =>
                    item.cartId === existingItem.cartId
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            );   
        } else {
            setCart((prev) => [
                ...prev,
                { ...product, cartId: Date.now() + Math.random(), quantity: 1, size: product.size || "M" }
            ]);
        }
    };

    const removeFromCart = (cartId) => {
        setCart((prev) => prev.filter((item) => item.cartId !== cartId));
    };

    const updateQuantity = (cartId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(cartId);
            return;
        }
        setCart((prev) =>
            prev.map((item) =>
                item.cartId === cartId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const updateSize = (cartId, newSize) => {
        setCart((prev) =>
            prev.map((item) =>
                item.cartId === cartId ? { ...item, size: newSize } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
        setDiscountApplied(false);
        setDiscountCode("");
        setDiscountPercent(0);
    };

    const applyDiscount = (code) => {
        const codes = {
            "SAVE10": 10,
            "SAVE20": 20,
            "SAVE30": 30,
            "WELCOME": 15,
            "HOODIE50": 50
        };
        if (codes[code.toUpperCase()]) {
            setDiscountCode(code);
            setDiscountPercent(codes[code.toUpperCase()]);
            setDiscountApplied(true);
            return true;
        }
        return false;
    };

    const cartWithSizes = cart.map(item => ({
        ...item,
        size: item.size || "M"
    }));

    const subtotal = cartWithSizes.reduce((total, item) => {
        const price = Number(item.price.replace("$", ""));
        const quantity = item.quantity || 1;
        return total + (price * quantity);
    }, 0);

    const discountAmount = discountApplied ? (subtotal * discountPercent) / 100 : 0;
    const totalPrice = subtotal - discountAmount;

    return (
        <CartContext.Provider
            value={{
                cart: cartWithSizes,
                addToCart,
                removeFromCart,
                clearCart,
                totalPrice,
                subtotal,
                updateQuantity,
                updateSize,
                discountCode,
                discountApplied,
                discountPercent,
                discountAmount,
                applyDiscount,
                setDiscountApplied
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

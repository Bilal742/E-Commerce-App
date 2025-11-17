"use client"

import React from "react"
import { useParams } from "next/navigation"
import themeColors from "@/app/component/themeColor"
import { useCart } from "@/app/context/CartContext"
import allProducts from "@/app/data/products"

//     // new-arrivals
//     { id: 4, name: "New Arrivals Hoodie 1", category: "new-arrivals", price: "$48", image: "/Men_Hoodies_Collections/men12.jpg" },

//     // limited-edition
//     { id: 5, name: "Unisex Hoodie 1", category: "limited-edition", price: "$48", image: "/Men_Hoodies_Collections/men12.jpg" },

//     // best-sellers
//     { id: 5, name: "Unisex Hoodie 1", category: "best-sellers", price: "$48", image: "/Men_Hoodies_Collections/men12.jpg" },

const CategoryPage = () => {
    const theme = themeColors.dark
    const params = useParams();
    const slug = params.slug;

    const products = allProducts.filter(prod => prod.category === slug);
    const { addToCart } = useCart();


    return (
        <div style={{ background: theme.background, color: theme.text, minHeight: "100vh", padding: "40px" }}>
            <h1 className="xl:text-3xl font-bold mb-6 mt-15 uppercase text-center md:text-3xl text-1xl">
               Explore our {slug} Hoodies Collection 
            </h1>

            <div className="grid sm:grid-cols-4 md:grid-cols-2 gap-6 xl:grid-cols-3">
                {products.length === 0 ? (
                    <p>No products found in this category.</p>
                ) : (
                    products.map(prod => (
                        <div key={prod.id} className="border p-3 rounded shadow hover:shadow-lg">
                            <img src={prod.image} alt={prod.name} className="w-full h-96 object-cover rounded mb-2" />
                            <h2 className="font-semibold">{prod.name}</h2>
                            <p>{prod.price}</p>
                            <button
                                className="mt-3 w-full bg-[rgb(20,55,70)] text-white py-2 rounded cursor-pointer"
                                onClick={() => addToCart(prod)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default CategoryPage

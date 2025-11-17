export interface Product {
    id: number;
    name: string;
    category: "men" | "women" | "unisex";
    price: string;
    image: string;
}

const allProducts: Product[] = [
    // ---------------- MEN ----------------
    { id: 101, name: "Black Minimalist Hoodie", category: "men", price: "$150", image: "/Men_Hoodies_Collections/men1.jpg" },
    { id: 102, name: "Urban Streetwear Red Hoodie", category: "men", price: "$240", image: "/Men_Hoodies_Collections/men2.jpg" },
    { id: 103, name: "Urban Streetwear Navy Hoodie", category: "men", price: "$140", image: "/Men_Hoodies_Collections/men3.jpg" },
    { id: 104, name: "Forest Green Sporty Hoodie", category: "men", price: "$45", image: "/Men_Hoodies_Collections/men4.jpg" },
    { id: 105, name: "Charcoal Grey Casual Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men5.jpg" },
    { id: 106, name: "Olive Green Techwear Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men6.jpg" },
    { id: 107, name: "Red Urban Street Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men7.jpg" },
    { id: 108, name: "Blue Gradient Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men8.jpg" },
    { id: 109, name: "Yellow Bold Logo Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men9.jpg" },
    { id: 110, name: "Maroon Classic Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men10.jpg" },
    { id: 111, name: "White Clean Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men11.jpg" },
    { id: 112, name: "Orange Vibrant Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men12.jpg" },

    // ---------------- WOMEN ----------------
    { id: 201, name: "Soft Pink Aesthetic Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg1.jpg" },
    { id: 202, name: "White Clean Minimal Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg2.jpg" },
    { id: 203, name: "Lavender Cozy Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg3.jpg" },
    { id: 204, name: "Black Elegant Fashion Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg4.jpg" },
    { id: 205, name: "Beige Neutral Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg5.jpg" },
    { id: 206, name: "Sky Blue Casual Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg6.jpg" },
    { id: 207, name: "Red Bold Vibrant Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg7.jpg" },
    { id: 208, name: "Purple Gradient Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg8.jpg" },
    { id: 209, name: "Brown Coffee-Tone Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg9.jpg" },
    { id: 210, name: "White & Black Contrast Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg10.jpg" },
    { id: 211, name: "Retro 90s Color Splash Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg11.jpg" },
    { id: 212, name: "90s Neon Street Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg12.jpg" },

    // ---------------- UNISEX ----------------
    { id: 301, name: "Minimalist Unisex Black Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg1.jpg" },
    { id: 302, name: "Blue Urban Unisex Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg10.jpg" },
    { id: 303, name: "Futuristic Techwear Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg3.jpg" },
    { id: 304, name: "Gradient Colorflow Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg4.jpg" },
    { id: 305, name: "Retro Street Graphic Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg5.jpg" },
    { id: 306, name: "Classic White Clean Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg6.jpg" },
    { id: 307, name: "Dual-Tone White Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg7.jpg" },
    { id: 308, name: "Urban Camouflage Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg8.jpg" },
    { id: 309, name: "Rainbow Swirl Hoodie – HoodAnix", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg9.jpg" },
    { id: 310, name: "Oversized Urban Street Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg2.jpg" },
    { id: 311, name: "Premium Velvet Texture Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg11.jpg" },
    { id: 312, name: "Two-Tone Split Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg12.jpg" }
];

export default allProducts;

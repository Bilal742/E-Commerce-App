"use client";

import { useSearchParams } from "next/navigation";
import allProducts from "@/app/data/products";
import themeColors from "@/app/component/themeColor";

const SearchPage = () => {
  const params = useSearchParams();
  const query = params.get("query")?.toLowerCase() || "";
  const theme = themeColors.dark;

  // Filter products based on query
  const filteredProducts = allProducts.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
  );

  return (
    <div
      style={{ background: theme.background, color: theme.text }}
      className="min-h-screen p-6 pt-32"
    >
      {/* <h1 className="text-3xl font-bold mb-5">
        Search Results for: "{query}
      </h1> */}

      {filteredProducts.length === 0 ? (
        <p>No hoodies found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id + product.category}
              className="border p-4 rounded shadow hover:shadow-lg bg-white/10"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded mb-2"
              />
              <h2 className="font-semibold">{product.name}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;

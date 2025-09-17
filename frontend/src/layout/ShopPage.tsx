"use client";

import { useState } from "react";
import { FaStar, FaRegHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { products, Product } from "@/data/products";
import { useRouter } from "next/navigation"; // Для навигации

// helper для звезд
function renderStars(rating?: number) {
  return [...Array(5)].map((_, i) => (
    <FaStar
      key={i}
      className={`${i < (rating || 0) ? "text-yellow-400" : "text-gray-300"}`}
    />
  ));
}

export default function ShopPage() {
  const router = useRouter();

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string>("Best Match");

  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedDiscounts([]);
    setSelectedColors([]);
    setSelectedPrices([]);
    setSelectedRatings([]);
  };

  let filteredProducts = products.filter((p) => {
    const priceCheck =
      selectedPrices.length === 0 ||
      selectedPrices.some(
        (price) =>
          (price === "$0.00 - $150.00" && p.price <= 150) ||
          (price === "$150.00 - $350.00" && p.price >= 150 && p.price <= 350) ||
          (price === "$350.00 - $504.00" && p.price >= 350 && p.price <= 504) ||
          (price === "$450.00 +" && p.price >= 450)
      );

    return (
      (selectedBrands.length === 0 || selectedBrands.includes(p.brand || "")) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(p.category || "")) &&
      (selectedDiscounts.length === 0 ||
        (p.discount && selectedDiscounts.includes(p.discount))) &&
      (selectedColors.length === 0 ||
        selectedColors.some((c) => p.colors?.includes(c))) &&
      (selectedRatings.length === 0 ||
        selectedRatings.includes(p.rating || 0)) &&
      priceCheck
    );
  });

  if (sortBy === "Price: Low to High") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 space-y-8">
          <button
            onClick={resetFilters}
            className="px-3 py-1 bg-red-500 text-white text-sm rounded"
          >
            Reset Filters
          </button>

          {/* Brand */}
          <div>
            <h3 className="font-semibold text-[#151875] mb-3">Product Brand</h3>
            {[...new Set(products.map((p) => p.brand))].map((brand) => (
              <label key={brand} className="block text-sm text-[#8A8FB9]">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand || "")}
                  onChange={() =>
                    setSelectedBrands((prev) =>
                      prev.includes(brand || "")
                        ? prev.filter((b) => b !== brand)
                        : [...prev, brand || ""]
                    )
                  }
                />{" "}
                {brand}
              </label>
            ))}
          </div>

          {/* Discount */}
          <div>
            <h3 className="font-semibold text-[#151875] mb-3">
              Discount Offer
            </h3>
            {[...new Set(products.map((p) => p.discount).filter(Boolean))].map(
              (discount) => (
                <label key={discount} className="block text-sm text-[#8A8FB9]">
                  <input
                    type="checkbox"
                    checked={selectedDiscounts.includes(discount || "")}
                    onChange={() =>
                      setSelectedDiscounts((prev) =>
                        prev.includes(discount || "")
                          ? prev.filter((d) => d !== discount)
                          : [...prev, discount || ""]
                      )
                    }
                  />{" "}
                  {discount}
                </label>
              )
            )}
          </div>

          {/* Rating */}
          <div>
            <h3 className="font-semibold text-[#151875] mb-3">Rating Item</h3>
            {[5, 4, 3, 2].map((stars) => (
              <label key={stars} className="block text-sm text-[#8A8FB9]">
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(stars)}
                  onChange={() =>
                    setSelectedRatings((prev) =>
                      prev.includes(stars)
                        ? prev.filter((r) => r !== stars)
                        : [...prev, stars]
                    )
                  }
                />{" "}
                {"⭐".repeat(stars)}
              </label>
            ))}
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-[#151875] mb-3">Categories</h3>
            {[...new Set(products.map((p) => p.category))].map((cat) => (
              <label key={cat} className="block text-sm text-[#8A8FB9]">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat || "")}
                  onChange={() =>
                    setSelectedCategories((prev) =>
                      prev.includes(cat || "")
                        ? prev.filter((c) => c !== cat)
                        : [...prev, cat || ""]
                    )
                  }
                />{" "}
                {cat}
              </label>
            ))}
          </div>

          {/* Price */}
          <div>
            <h3 className="font-semibold text-[#151875] mb-3">Price Filter</h3>
            {[
              "$0.00 - $150.00",
              "$150.00 - $350.00",
              "$350.00 - $504.00",
              "$450.00 +",
            ].map((price) => (
              <label key={price} className="block text-sm text-[#8A8FB9]">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(price)}
                  onChange={() =>
                    setSelectedPrices((prev) =>
                      prev.includes(price)
                        ? prev.filter((p) => p !== price)
                        : [...prev, price]
                    )
                  }
                />{" "}
                {price}
              </label>
            ))}
          </div>

          {/* Color */}
          <div>
            <h3 className="font-semibold text-[#151875] mb-3">
              Filter By Color
            </h3>
            <div className="grid grid-cols-3 gap-0 max-w-[80px]">
              {Array.from(new Set(products.flatMap((p) => p.colors || []))).map(
                (color) => (
                  <button
                    key={color}
                    className={`w-6 h-6  rounded-full border-2 ${
                      selectedColors.includes(color)
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() =>
                      setSelectedColors((prev) =>
                        prev.includes(color)
                          ? prev.filter((c) => c !== color)
                          : [...prev, color]
                      )
                    }
                  />
                )
              )}
            </div>
          </div>
        </aside>

        {/* Product List */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
            <p className="text-sm text-[#8A8FB9]">
              Ecommerce Accesories & Fashion item ({filteredProducts.length}{" "}
              items found)
            </p>
            <div className="flex gap-3 items-center text-sm text-[#8A8FB9]">
              <span>Sort By:</span>
              <select
                className="border px-2 py-1 rounded text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center gap-6 p-4 border rounded-md hover:shadow-md transition"
              >
                <img
                  src={product.images?.[0] || "/products/e.png"}
                  alt={product.name}
                  className="w-32 h-32 object-contain cursor-pointer"
                  onClick={() => router.push(`/productFull/${product.id}`)}
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#151875]">
                    {product.name}
                  </h4>

                  <div className="flex gap-2 my-2">
                    {product.colors?.map((color) => (
                      <span
                        key={color}
                        className="w-5 h-5 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 my-2">
                    <span className="text-[#FB2E86] font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="line-through text-[#8A8FB9]">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#8A8FB9] mb-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(product.rating)}
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[#8A8FB9]">
                    <button>
                      <FaShoppingCart />
                    </button>
                    <button>
                      <FaRegHeart />
                    </button>
                    <button>
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

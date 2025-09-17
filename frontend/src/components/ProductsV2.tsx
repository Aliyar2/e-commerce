"use client";

import Container from "@/layout/Container";
import React, { useState } from "react";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { products } from "@/data/products";
import Link from "next/link";

const categories = [
  "NEW ARRIVALS",
  "BEST SELLER",
  "FEATURED",
  "SPECIAL OFFER",
] as const;

export default function Products() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("NEW ARRIVALS");

  const filteredProducts = products.filter(
    (p) => p.tabCategory === selectedCategory
  );

  return (
    <div className="bg-white  px-4 sm:px-6 lg:px-8 py-12">
      <Container>
        <h2 className="text-2xl font-bold text-[#151875] text-center mb-8">
          Our Products
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105"
            >
              {product.sale && (
                <div className="absolute top-3 left-3 bg-[#3F509E] text-white text-xs font-bold px-2 py-1 rounded-md shadow">
                  SALE
                </div>
              )}

              <div className="absolute top-12 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                  <FiShoppingCart size={20} className="text-[#FB2E86]" />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                  <FiHeart size={20} className="text-[#FB2E86]" />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                  <FiSearch size={20} className="text-[#FB2E86]" />
                </button>
              </div>

              <div className="h-60 flex items-center justify-center bg-[#F6F7FB] p-4 relative">
                <img
                  src={product.images?.[0] || "/products/placeholder.png"}
                  alt={product.name}
                  className="max-h-full object-contain"
                />
                <Link
                  href={`/productFull/${product.id}`}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition"
                >
                  View Details
                </Link>
              </div>

              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-gray-900">
                      ${product.price.toFixed(2)}
                    </p>
                    {product.oldPrice && (
                      <p className="text-xs text-gray-500 line-through">
                        ${product.oldPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

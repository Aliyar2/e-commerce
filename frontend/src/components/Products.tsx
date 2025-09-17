"use client";

import Container from "@/layout/Container";
import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { products as allProducts, Product } from "@/data/products";
import Link from "next/link";

type CartItem = { id: number; quantity: number };

export default function Products() {
  const [selectedColors, setSelectedColors] = useState<{
    [key: number]: string;
  }>({});
  const [cart, setCart] = useState<CartItem[]>([]);

  // Загружаем корзину из localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart && storedCart !== "undefined") {
        try {
          setCart(JSON.parse(storedCart));
        } catch {
          setCart([]);
        }
      }
    }
  }, []);

  // Сохраняем корзину при изменении
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart ?? []));
    }
  }, [cart]);

  // Обновление выбранного цвета
  const handleColorSelect = (productId: number, color: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  // Добавление в корзину
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      let updatedCart;
      if (existing) {
        updatedCart = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prev, { id: product.id, quantity: 1 }];
      }

      // Сохраняем сразу в localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Диспатч кастомного события для синхронизации, если есть другие компоненты
      window.dispatchEvent(new Event("cartUpdated"));

      return updatedCart;
    });
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 py-12">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-10 text-[#1A0B5B]">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105"
            >
              {product.sale && (
                <span className="absolute top-3 right-3 bg-[#3F509E] text-white text-xs font-semibold px-3 py-1 rounded-full z-20">
                  Sale
                </span>
              )}

              <div className="absolute top-3 left-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <button
                  className="p-3 bg-white rounded-full shadow-lg hover:bg-pink-100 transition"
                  onClick={() => addToCart(product)}
                >
                  <FiShoppingCart size={22} className="text-pink-500" />
                </button>
                <button className="p-3 bg-white rounded-full shadow-lg hover:bg-pink-100 transition">
                  <FiHeart size={22} className="text-pink-500" />
                </button>
                <button className="p-3 bg-white rounded-full shadow-lg hover:bg-pink-100 transition">
                  <FiSearch size={22} className="text-pink-500" />
                </button>
              </div>

              <div className="relative h-72 flex items-center justify-center bg-[#F6F7FB] p-6">
                <img
                  src={product.images?.[0] || "/placeholder.jpg"}
                  alt={product.name}
                  className="max-h-full object-contain"
                />
                <Link
                  href={`/productFull/${product.id}`}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1.5 text-sm rounded-md font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  View Details
                </Link>
              </div>

              <div className="p-4 text-center transition-colors duration-300 group-hover:bg-[#2F1AC4] group-hover:text-white">
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-white text-gray-900">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <p className="text-xl font-bold transition-colors duration-300 group-hover:text-white text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.oldPrice && product.oldPrice > product.price && (
                    <p className="text-sm line-through text-gray-500 group-hover:text-gray-300">
                      ${product.oldPrice.toFixed(2)}
                    </p>
                  )}
                </div>

                {product.colors && (
                  <div className="flex justify-center gap-2 mt-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`w-4.5 h-1 rounded-full ${
                          selectedColors[product.id] === color
                            ? "ring-2 ring-offset-1 ring-gray-400"
                            : ""
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorSelect(product.id, color)}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                )}

                <p className="text-sm mt-2 transition-colors duration-300 group-hover:text-white text-gray-700">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

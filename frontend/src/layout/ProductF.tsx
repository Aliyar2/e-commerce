"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { products as allProducts, Product } from "@/data/products";

// ---------------------- ProductFeature ----------------------
export default function ProductFeature() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  // Загружаем корзину из localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Сохраняем корзину в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { id: product.id, quantity: 1 }];
      }
    });
  };

  return (
    <section className="w-full bg-[#F2F0FF] py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
            <Image
              src="/products/sofa2.png"
              alt="Italian Sofa"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#151875] mb-6">
            Unique Features Of latest & Trending Products
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-[#ACABC3] text-sm sm:text-base">
              <span className="w-3 h-3 rounded-full bg-[#F52B70] mr-3"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center text-[#ACABC3] text-sm sm:text-base">
              <span className="w-3 h-3 rounded-full bg-[#2B2BF5] mr-3"></span>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks
            </li>
            <li className="flex items-center text-[#ACABC3] text-sm sm:text-base">
              <span className="w-3 h-3 rounded-full bg-[#2BF5CC] mr-3"></span>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>

          <div className="flex items-center gap-6">
            <button
              onClick={() => addToCart(allProducts[0])}
              className="bg-[#FB2E86] text-white font-medium px-6 py-3 rounded shadow-md hover:bg-[#e12476] transition"
            >
              Add To Cart
            </button>
            <div className="text-[#151875]">
              <p className="font-semibold">{allProducts[0].name}</p>
              <p className="text-sm">${allProducts[0].price}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

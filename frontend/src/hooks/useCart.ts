// src/hooks/useCart.ts
"use client";

import { useState, useEffect } from "react";

export interface CartItem {
  id: number;
  quantity: number;
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const loadCart = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);
        if (Array.isArray(parsed)) setCart(parsed);
        else setCart([]);
      } catch {
        setCart([]);
      }
    }
  };

  useEffect(() => {
    loadCart();
    window.addEventListener("pageshow", loadCart); // ловим возврат через bfcache
    return () => window.removeEventListener("pageshow", loadCart);
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (id: number) => {
    const exists = cart.find((item) => item.id === id);
    if (exists)
      saveCart(
        cart.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
      );
    else saveCart([...cart, { id, quantity: 1 }]);
  };

  const updateCart = (newCart: CartItem[]) => saveCart(newCart);
  const removeFromCart = (id: number) =>
    saveCart(cart.filter((i) => i.id !== id));
  const clearCart = () => saveCart([]);

  return { cart, addToCart, updateCart, removeFromCart, clearCart };
}

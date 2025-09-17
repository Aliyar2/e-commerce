"use client";

import { useEffect, useState } from "react";
import { products as allProducts, Product } from "@/data/products";
import Container from "@/layout/Container";
import { useCart } from "@/hooks/useCart";

type CartProduct = Product & { quantity: number };

export default function CartPage() {
  const { cart, updateCart, removeFromCart, clearCart } = useCart();
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  const syncCartProducts = () => {
    const items = cart
      .map((c) => {
        const product = allProducts.find((p) => p.id === c.id);
        if (!product) return null;
        return { ...product, quantity: c.quantity };
      })
      .filter(Boolean) as CartProduct[];
    setCartItems(items);
  };

  useEffect(() => {
    syncCartProducts();
  }, [cart]);

  const increment = (id: number) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decrement = (id: number) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item
    );
    updateCart(updated);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6">
      <Container className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Shopping Cart
          </h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-10">
              Your cart is empty.
            </p>
          ) : (
            <table className="w-full text-left border-separate border-spacing-y-4">
              <thead>
                <tr className="text-gray-600 border-b border-gray-200">
                  <th className="pb-2">Product</th>
                  <th className="pb-2">Price</th>
                  <th className="pb-2">Quantity</th>
                  <th className="pb-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="align-top hover:bg-gray-50 transition"
                  >
                    <td className="flex gap-4 items-center py-2">
                      <div className="relative w-20 h-20">
                        <img
                          src={item.images?.[0] || "/products/e.png"}
                          alt={item.name}
                          className="w-full h-full object-contain rounded"
                        />
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition"
                        >
                          ✕
                        </button>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        {item.colors?.[0] && (
                          <p className="text-gray-600 text-sm">
                            Color: {item.colors[0]}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="font-medium text-gray-800">
                      ${item.price.toFixed(2)}
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrement(item.id)}
                          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition text-gray-800 font-medium"
                        >
                          -
                        </button>
                        <span className="px-2 text-gray-800 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increment(item.id)}
                          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition text-gray-800 font-medium"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="font-medium text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {cartItems.length > 0 && (
            <div className="flex justify-between mt-6 gap-2">
              <button
                onClick={clearCart}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition font-medium"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="font-semibold text-xl mb-4 text-gray-800">
              Cart Totals
            </h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium text-gray-800">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-4 border-t pt-2">
              <span className="text-gray-600">Total:</span>
              <span className="font-semibold text-lg text-gray-800">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-medium">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Menu, X, Search, Heart, ShoppingCart, User } from "lucide-react";
import Container from "./Container";
import Link from "next/link"; // ✅ добавил

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-[#7E33E0] text-white text-xs sm:text-sm">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 gap-2 sm:gap-0">
            {/* Left: contacts */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left">
              <a href="mailto:mhhasanul@gmail.com" className="hover:underline">
                mhhasanul@gmail.com
              </a>
              <a href="tel:+1234567890" className="hover:underline">
                (12345)67890
              </a>
            </div>
            {/* Right: settings */}
            <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
              <button className="hover:underline">English ▾</button>
              <button className="hover:underline">USD ▾</button>
              <a href="#" className="flex items-center gap-1 hover:underline">
                <User size={14} /> Login
              </a>
              <a href="#" className="flex items-center gap-1 hover:underline">
                <Heart size={14} /> Wishlist
              </a>
              <Link href="/cart" className="hover:underline">
                <ShoppingCart size={16} />
              </Link>
            </nav>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <div className="bg-white">
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-gray-800">Hekto</h1>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
              <Link href="/" className="text-[#FB2E86] font-semibold">
                Home ▾
              </Link>
              <Link href="/products">Products</Link>
              <Link href="/filters">Shop</Link>{" "}
              {/* ✅ теперь ведёт на /filters */}
              <Link href="/contact">Contact</Link>
            </nav>

            {/* Desktop search */}
            <div className="hidden md:flex items-center border border-gray-300 rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 outline-none text-sm w-40"
              />
              <button className="bg-[#FB2E86] px-3 py-1 text-white">
                <Search size={16} />
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-4 pb-4 text-gray-700 text-sm font-medium">
          <Link href="/" className="text-[#FB2E86] font-semibold">
            Home
          </Link>
          <Link href="/products">Products</Link>
          <Link href="/filters">Shop</Link> {/* ✅ тут тоже */}
          <Link href="/contact">Contact</Link>
          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 outline-none flex-grow text-sm"
            />
            <button className="bg-[#FB2E86] px-3 py-1 text-white">
              <Search size={16} />
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

import CartPage from "@/components/CartPage";
import ProductCard from "@/components/FullProduct";
import Products from "@/components/Products";
import ProductsSimple from "@/components/ProductsV2";
import About from "@/layout/About";
import Container from "@/layout/Container";
import Hero from "@/layout/Hero";
import Features from "@/layout/OurO";
import ProductFeature from "@/layout/ProductF";
import ShopPage from "@/layout/ShopPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Products />
      <ProductsSimple />
      <ProductFeature />
      <Features />
    </div>
  );
}

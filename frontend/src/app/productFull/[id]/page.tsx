// app/product/[id]/page.tsx

import { notFound } from "next/navigation";
import ProductCard from "@/components/FullProduct";
import Container from "@/layout/Container";
import { products } from "@/data/products"; // 👈 импортируем общий массив

export default function ProductFull({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return notFound(); // 404 если id нет

  return (
    <div className="py-10 bg-white">
      <Container>
        <ProductCard {...product} />
      </Container>
    </div>
  );
}

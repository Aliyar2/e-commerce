"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <Image
        src="/NotFound.png" // Помести сюда своё изображение
        alt="404 Not Found"
        width={400}
        height={300}
        className="mb-8"
      />

      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Oops! The page you requested was not found!
      </h1>

      <button
        onClick={() => router.push("/")}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition"
      >
        Back To Home
      </button>
    </div>
  );
}

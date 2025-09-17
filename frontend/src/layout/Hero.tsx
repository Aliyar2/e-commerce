import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#F2F0FF] relative overflow-hidden">
      {/* Lamp — слева сверху, только на десктопе */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left side: Text */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="space-y-2">
            {/* Маленький розовый текст сверху */}
            <span className="block text-lg sm:text-xl lg:text-2xl font-semibold text-pink-500">
              Best Furniture For Your Castle
            </span>

            {/* Большой чёрный текст снизу */}
            <span className="block text-3xl sm:text-2xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              New Furniture Collection Trends in 2020
            </span>
          </h1>

          <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>

          <Link
            href="/"
            className="inline-block bg-[#FB2E86] hover:bg-[#d81f6b] text-white px-6 py-3 rounded-md font-semibold shadow-md transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Right side: Sofa */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/products/sofa.png"
            alt="Sofa"
            width={500}
            height={400}
            className="relative z-10 max-w-xs sm:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}

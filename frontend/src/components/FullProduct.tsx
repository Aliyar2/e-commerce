import React from "react";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  description?: string;
  rating?: number;
  reviews?: number;
  brand?: string;
  category?: string;
  discount?: string;
  colors?: string[];
  images?: string[];
};

const ProductCard: React.FC<ProductProps> = ({
  name,
  price,
  oldPrice,
  description,
  rating,
  reviews,
  colors,
  category,
  images = [],
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-white rounded-2xl shadow-md">
      {/* Image Section */}
      <div className="flex gap-4">
        {images.length > 1 && (
          <div className="flex flex-col gap-4">
            {images.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Product image ${i + 1}`}
                className="w-20 h-20 object-cover rounded-lg border border-gray-200 hover:shadow"
              />
            ))}
          </div>
        )}
        <div className="w-[320px] h-[320px] bg-white border border-gray-200 flex items-center justify-center rounded-xl shadow-sm">
          <img
            src={images[0] || "/placeholder.jpg"}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>

        {rating !== undefined && reviews !== undefined && (
          <div className="flex items-center gap-1 mt-2">
            <div className="text-yellow-400">
              {"★".repeat(Math.floor(rating))}
              {"☆".repeat(5 - Math.floor(rating))}
            </div>
            <span className="text-gray-500 text-sm ml-1">({reviews})</span>
          </div>
        )}

        <div className="mt-4 flex gap-3 text-lg items-center">
          <span className="text-pink-600 font-bold">${price.toFixed(2)}</span>
          {oldPrice && oldPrice !== price && (
            <span className="line-through text-gray-400">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {description && (
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            {description}
          </p>
        )}

        <hr className="my-6 border-gray-200" />

        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Colors</h3>
          <p className="text-sm text-gray-500 mb-4">
            Choose the perfect shade for your style.
          </p>
          {colors && colors.length > 0 && (
            <div className="flex gap-2 mt-2">
              {colors.map((color) => (
                <span
                  key={color}
                  className="w-7 h-7 rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          )}
        </div>

        <hr className="my-6 border-gray-200" />

        <button className="mt-2 px-6 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors shadow-sm">
          Add To Cart
        </button>

        <hr className="my-6 border-gray-200" />

        <div className="text-sm text-gray-700 space-y-2">
          <div>
            <span className="font-semibold">Category:</span> {category || "N/A"}
          </div>
          <div>
            <span className="font-semibold">Tags:</span>
          </div>
          <div>
            <span className="font-semibold">Share:</span> Facebook / Twitter
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

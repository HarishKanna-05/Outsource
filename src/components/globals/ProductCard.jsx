import React, { useState } from "react";

function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-w-[300px] h-[600px]  overflow-y-auto">
      <div className="relative bg-white rounded-lg shadow-md p-4">
        <div className="relative w-full h-[200px] mb-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`
              absolute
              top-4
              right-4
              p-2
              rounded-full
              bg-white
              shadow-md
              transition-all
              duration-300
              hover:bg-pink-100
              ${isLiked ? "text-pink-500" : "text-gray-500"}
            `}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <svg
              className={`
                w-6
                h-6
                transition-all
                duration-300
                ${isLiked ? "fill-current" : "fill-none"}
                stroke-current
              `}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold uppercase">{product.title}</h3>
          <p className="text-sm text-gray-600">{product.category}</p>
          <p className="text-xl font-bold">${product.price}</p>
          <p className="text-sm text-gray-600">{product.brand}</p>
          <p className="text-sm text-gray-700 mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

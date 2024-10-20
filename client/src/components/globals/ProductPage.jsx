import React from "react";

const Pages = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Image Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="col-span-2 bg-gray-200 h-64"></div>{" "}
          {/* Large Image */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-200 w-full h-32"></div>
          ))}
          <button className="absolute right-6 bottom-6 bg-gray-300 hover:bg-gray-400 rounded-md p-2 m-2">
            View photos
          </button>
          {/* <button className="bg-gray-200 w-full h-30 hover:bg-slate-100"></button> */}
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Luxury Tent</h1>
          <p className="text-gray-600">
            Experience the great outdoors in style with our luxury tent rentals.
            Perfect for camping trips, festivals, or backyard gatherings.
          </p>
          <p className="text-gray-600">
            Easy setup and takedown for your convenience.
          </p>
          <p className="text-gray-600">
            Available in various sizes to fit your needs.
          </p>

          <div className="text-2xl font-semibold">$55</div>

          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">⭐⭐⭐⭐</span>
            <span className="text-gray-500">(4.0 stars) - 15 reviews</span>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold">Size</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded-md hover:bg-gray-300">
                Small Tent
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-300">
                Medium Tent
              </button>
              <button
                className="px-4 py-2 border rounded-md hover:bg-gray-300 hover:text-black"
                disabled
              >
                Large Tent
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold">Amount</h2>
            <input
              type="number"
              min="1"
              value="1"
              className="border px-2 py-1 w-16"
            />
          </div>

          <div className="space-y-2">
            <button className="w-full py-3 bg-purple-600 text-white rounded-lg">
              Add to Cart
            </button>
            <button className="w-full py-3 bg-black text-white rounded-lg">
              Rent Now
            </button>
            <p className="text-sm text-gray-500">Free delivery included</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8">
        <div className="border-b">
          <nav className="flex space-x-4">
            <a
              href="#"
              className="px-4 py-2 text-gray-700 border-b-2 border-black"
            >
              Specifications
            </a>
            <a href="#" className="px-4 py-2 text-gray-500">
              Delivery
            </a>
            <a href="#" className="px-4 py-2 text-gray-500">
              Exchanges
            </a>
          </nav>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">
            Our luxury tents are designed to provide comfort and style. Each
            tent includes high-quality materials and features for a premium
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pages;

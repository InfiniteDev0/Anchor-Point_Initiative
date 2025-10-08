"use client";
import { productsArray } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const filterButtons = ["T-shirts", "Sweaters", "Hoodies", "Caps"];

const Shoppage = () => {
  const [shopProducts, setShop] = useState(productsArray);
  const [cartCount, setCartCount] = useState(0)
  const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter();

  useEffect(() => {
      const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartCount(cart.length);
      };
  
      updateCartCount();
  
      // Listen for storage changes and custom cart events
      window.addEventListener("storage", updateCartCount);
      window.addEventListener("cartUpdated", updateCartCount);
  
      return () => {
        window.removeEventListener("storage", updateCartCount);
        window.removeEventListener("cartUpdated", updateCartCount);
      };
    }, []);

  const handleFilter = (type) => {
    setActiveFilter(type);
    if (type === "All") {
      setShop(productsArray);
    } else {
      setShop(productsArray.filter((item) => item.type === type));
    }
  };

  const getProductImage = (product) => {
    if (Array.isArray(product.link)) {
      return product.link[0]?.url || "";
    }
    return product.link;
  };

  return (
    <div className="px-4 md:px-6 lg:px-12 py-24 md:py-28 min-h-screen flex flex-col gap-4">
      <h1 className="text-xl">Our shop</h1>

      {/* Filter Section */}
      <div className="w-full">
        {/* Filter Buttons - Horizontal Scroll */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <div
            className={`bg-transparent border border-gray-400 rounded-full outfit text-xs whitespace-nowrap px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors flex-shrink-0 ${
              activeFilter === "All" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleFilter("All")}
          >
            All
          </div>
          {filterButtons.map((item, index) => (
            <div
              key={index}
              className={`bg-transparent border border-gray-400 rounded-full outfit text-xs whitespace-nowrap px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors flex-shrink-0 ${
                activeFilter === item ? "bg-gray-200" : ""
              }`}
              onClick={() => handleFilter(item)}
            >
              {item}
            </div>
          ))}

          {cartCount <= 0 ? (
            ""
          ) : (
            <Link
              href={"/cart"}
              className="flex items-center gap-2 border border-black w-fit px-4 py-2 text-xs rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Go to Cart
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Products Section */}
      <div className="flex flex-col gap-4 mt-4">
        <p className="flex items-center justify-end text-sm text-gray-600">
          {shopProducts.length} items
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {shopProducts.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-2 md:p-3  cursor-pointer  "
              onClick={() => router.push(`/shop/${item.id}`)}
            >
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="w-full h-32 sm:h-40 md:h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={getProductImage(item)}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs md:text-sm font-medium line-clamp-2">
                  {item.name}
                </p>
                <p className="text-xs md:text-sm font-semibold underline outfit">
                  {Number(item.price).toLocaleString()} KSH
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/shop/${item.id}`);
                  }}
                  className="bg-black text-white text-xs h-7 md:h-8 cursor-pointer rounded hover:bg-gray-800 transition-colors"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shoppage;

"use client";
import { productsArray } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

const filterButtons = ["T-shirts", "Sweaters", "Hoodies", "Caps"];

const Shoppage = () => {
  const [shopProducts, setShop] = useState(productsArray);
  const [activeFilter, setActiveFilter] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
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
    <div className="!px-[3%] !py-[7rem] min-h-screen flex flex-col gap-4">
      <h1>Our shop</h1>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`bg-transparent border border-gray-400 rounded-full outfit text-xs w-fit !px-3 flex items-center gap-3 !py-1 cursor-pointer hover:bg-gray-100 ${
              activeFilter === "All" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleFilter("All")}
          >
            All
          </div>
          {filterButtons.map((item, index) => (
            <div
              key={index}
              className={`bg-transparent border border-gray-400 rounded-full outfit text-xs w-fit !px-3 flex items-center gap-3 !py-1 cursor-pointer hover:bg-gray-100 ${
                activeFilter === item ? "bg-gray-200" : ""
              }`}
              onClick={() => handleFilter(item)}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          className="flex relative cursor-pointer"
          onClick={() => router.push("/cart")}
        >
          <ShoppingBag className="w-5 h-5 relative" />
          <span className="w-4 h-4 absolute bottom-3 left-3 bg-black text-white rounded-full items-center flex justify-center !p-2 text-xs">
            {cartCount}
          </span>
        </div>
      </div>

      <div className="flex flex-col !p-2 w-full gap-3">
        <p className="flex items-center justify-end text-sm">
          {shopProducts.length} items
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {shopProducts.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-3 rounded-lg cursor-pointer"
              onClick={() => router.push(`/shop/${item.id}`)}
            >
              <div className="flex flex-col gap-3">
                <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={getProductImage(item)}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs font-medium">{item.name}</p>
                <p className="text-xs font-semibold underline outfit">
                  {Number(item.price).toLocaleString()} KSH
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/shop/${item.id}`);
                  }}
                  className="bg-black text-white text-xs h-8 cursor-pointer rounded hover:bg-gray-800 transition-colors"
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

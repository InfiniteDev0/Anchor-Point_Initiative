"use client";
import { productsArray } from "@/assets/assets";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const Productpage = () => {
  const { id } = useParams();
  const router = useRouter();
  const product = productsArray.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(
    product?.link?.[0]?.color || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [shopProducts, setShop] = useState(productsArray);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image:
        product.link.find((l) => l.color === selectedColor)?.url ||
        product.link[0]?.url,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added to cart successfully!");
  };

  const getProductImage = (product) => {
    if (Array.isArray(product.link)) {
      return product.link[0]?.url || "";
    }
    return product.link;
  };

  // Filter related products by same type, excluding current product
  const relatedProducts = shopProducts.filter(
    (item) => item.type === product.type && item.id !== product.id
  );

  return (
    <div className="px-3 md:px-6 lg:px-12 py-20 md:py-28 min-h-screen flex flex-col gap-6">
      {/* Back Button */}
      <div className="flex items-center justify-between">
        <Link
          href={"/shop"}
          className="flex items-center gap-2 border border-gray-500 w-fit px-4 py-2 text-xs rounded-full hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Go back to shop
        </Link>
        <Link
          href={"/cart"}
          className="flex items-center gap-2 border border-black w-fit px-4 py-2 text-xs rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Go to Cart
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <p className="font-semibold outfit underline text-sm mb-4">
            {product.name}
          </p>
          <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={
                product.link.find((l) => l.color === selectedColor)?.url ||
                product.link[0]?.url
              }
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <p className="text-sm text-gray-600">
              {product.gender}/{product.type}
            </p>
            <h1 className="text-2xl md:text-3xl outfit font-medium mt-2">
              {product.name}
            </h1>
            <p className="text-lg outfit text-purple-600 font-semibold mt-2">
              {Number(product.price).toLocaleString()} KSH
            </p>
          </div>

          {/* Size Selection */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold outfit text-sm">Size:</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`border border-gray-500 px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          {product.link.length > 1 && (
            <div className="flex flex-col gap-3">
              <p className="font-semibold outfit text-sm">Color:</p>
              <div className="flex gap-3">
                {product.link.map((l, idx) => (
                  <button
                    key={idx}
                    className={`w-8 h-8 rounded border-2 ${l.color} ${
                      selectedColor === l.color
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedColor(l.color)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selection */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold outfit text-sm">Quantity:</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border border-gray-300 w-8 h-8 flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border border-gray-300 w-8 h-8 flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Delivery Info */}
          <p className="flex items-center gap-2 text-sm outfit text-gray-600">
            <Clock className="w-4 h-4" /> Same Day Delivery
          </p>

          {/* Add to Cart Button */}
          <button
            className="bg-black text-white py-3 px-6 text-sm font-medium hover:bg-gray-800 transition-colors w-full md:w-auto"
            onClick={handleAddToCart}
          >
            Add to Bag
          </button>
        </div>
      </div>

      {/* Related items */}
      {relatedProducts.length > 0 && (
        <div className="flex flex-col gap-6 mt-12">
          <h2 className="text-xl font-semibold underline">Related items</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {relatedProducts.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 p-3  cursor-pointer"
                onClick={() => {
                  router.push(`/shop/${item.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="flex flex-col gap-3">
                  <div className="w-full h-32 sm:h-40 md:h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={getProductImage(item)}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-medium line-clamp-2">
                    {item.name}
                  </p>
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
      )}
    </div>
  );
};

export default Productpage;

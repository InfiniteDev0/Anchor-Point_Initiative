"use client";
import { productsArray } from "@/assets/assets";
import { ChevronLeft, Clock, ShoppingBag } from "lucide-react";
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
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };
    updateCartCount();
  }, []);

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
    setCartCount(cart.length);
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
    <div className="!px-[3%] outfit !py-[7rem] min-h-screen flex flex-col gap-4">
      <Link
        href={"/shop"}
        className="flex items-center gap-2 border border-gray-500 w-fit !px-5 !py-1 text-xs rounded-full "
      >
        <ChevronLeft className="w-4 h-4" />
        Go back to shop
      </Link>
      <div className="flex items-center gap-[5rem]">
        <div className="">
          <p className="font-semi-bold outfit underline">{product.name}</p>
          <img
            src={
              product.link.find((l) => l.color === selectedColor)?.url ||
              product.link[0]?.url
            }
            alt={product.name}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-4 h-[70vh]">
          <div
            className="flex relative justify-end cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <ShoppingBag className="w-5 h-5 relative" />
            <span className="w-4 h-4 absolute bottom-3 left-full bg-black text-white rounded-full items-center flex justify-center !p-2 text-xs">
              {cartCount}
            </span>
          </div>
          <div>
            <p className="text-xs">
              {product.gender}/{product.type}
            </p>
            <p className="text-xl outfit">{product.name}</p>
            <p className="text-xs outfit text-purple-600">
              {product.price} KSH
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold outfit text-sm">Size:</p>
            <div className="flex !pl-4 items-center gap-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`border w-30 h-7 text-xs border-gray-500 px-2 ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <p className="flex items-center gap-2 text-xs outfit">
            <Clock className="w-4 h-4" /> Same Day Delivery
          </p>
          <button
            className="bg-black text-white h-9 text-sm"
            onClick={handleAddToCart}
          >
            Add to Bag
          </button>
        </div>
      </div>

      {/* Related items */}
      <div className="flex flex-col gap-4 !mt-5">
        <p className="text-lg underline">Related items</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {relatedProducts.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 p-3 rounded-lg cursor-pointer"
            onClick={() => {
              router.push(`/shop/${item.id}`);
              window.scrollTo(0, 0); // Scroll to top when clicking related product
            }}
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
                {item.price} KSH
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
  );
};

export default Productpage;

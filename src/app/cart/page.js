"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getSubtotal = () =>
    cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  const discount = Math.round(getSubtotal() * 0.2); // 20% discount
  const deliveryFee = 200; // 200 KSH delivery fee
  const total = getSubtotal() - discount + deliveryFee;

  return (
    <div className="!px-[3%] !py-[7rem] min-h-screen flex flex-col gap-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <span
          className="cursor-pointer hover:text-black"
          onClick={() => router.push("/")}
        >
          Home
        </span>
        <span>›</span>
        <span className="text-black">Cart</span>
      </div>

      <h1 className="text-3xl font-light mb-8">YOUR CART</h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-gray-500 text-lg mb-6">Your cart is empty.</p>
          <button
            className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
            onClick={() => router.push("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                >
                  {/* Product Image - Clickable */}
                  <div
                    className="w-20 h-20 flex-shrink-0 cursor-pointer"
                    onClick={() => router.push(`/shop/${item.id}`)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded hover:opacity-80 transition-opacity"
                    />
                  </div>

                  {/* Product Details - Clickable */}
                  <div
                    className="flex-1 cursor-pointer"
                    onClick={() => router.push(`/shop/${item.id}`)}
                  >
                    <h3 className="font-medium text-lg hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Size: {item.size}</div>
                      <div className="flex items-center gap-2">
                        Color:
                        <span
                          className={`inline-block w-4 h-4 rounded ${item.color} border border-gray-300`}
                        />
                      </div>
                    </div>
                    <div className="text-lg font-medium mt-2">
                      {Number(item.price).toLocaleString()} KSH
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-medium mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{getSubtotal().toLocaleString()} KSH</span>
              </div>

              <div className="flex justify-between text-red-600">
                <span>Discount (-20%)</span>
                <span>-{discount.toLocaleString()} KSH</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>{deliveryFee.toLocaleString()} KSH</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-xl font-medium">
                <span>Total</span>
                <span>{total.toLocaleString()} KSH</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mt-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800">
                  Apply
                </button>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              className="w-full bg-black text-white py-3 rounded mt-6 hover:bg-gray-800 flex items-center justify-center gap-2"
              onClick={() => router.push("/checkout")}
            >
              Go to Checkout
              <span>→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Smartphone, Truck } from "lucide-react";
import { toast } from "sonner";

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("mpesa");
  const [loading, setLoading] = useState(false);
  const [paystackLoaded, setPaystackLoaded] = useState(false);
  const router = useRouter();

  // Replace with your actual Paystack public key
  const PAYSTACK_PUBLIC_KEY =
    process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_your_test_key_here";

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    // Load Paystack script with better error handling
    const loadPaystackScript = () => {
      // Remove existing script if any
      const existingScript = document.querySelector(
        'script[src="https://js.paystack.co/v1/inline.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }

      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.async = true;
      script.onload = () => {
        console.log("✅ Paystack script loaded successfully");
        setPaystackLoaded(true);
      };
      script.onerror = () => {
        console.error("❌ Failed to load Paystack script");
        toast.error("Payment system failed to load. Please refresh the page.");
      };
      document.body.appendChild(script);
    };

    loadPaystackScript();

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://js.paystack.co/v1/inline.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const getSubtotal = () =>
    cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  const discount = Math.round(getSubtotal() * 0.2);
  const deliveryFee = 200;
  const serviceFee = 100;
  const taxes = Math.round(getSubtotal() * 0.05);
  const total = getSubtotal() - discount + deliveryFee + serviceFee + taxes;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      return false;
    }
    if (!formData.address.trim()) {
      toast.error("Please enter your delivery address");
      return false;
    }
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return false;
    }

    // Validate phone number format
    const phoneRegex = /^(?:254|0)?[71][0-9]{8}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      toast.error("Please enter a valid Kenya phone number (e.g., 0700123456)");
      return false;
    }

    return true;
  };

  const generateOrderId = () => {
    return (
      "API_ORDER_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9)
    );
  };

  const saveOrderToBackend = async (orderData) => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to save order");
      }

      const result = await response.json();
      console.log("Order saved successfully:", result);
      return result;
    } catch (error) {
      console.error("Error saving order:", error);
      // Don't throw error - continue with success flow
      return { success: true, message: "Order processed" };
    }
  };

  const clearCartAndShowSuccess = () => {
    // Clear cart
    localStorage.removeItem("cart");
    setCart([]);

    // Update cart count in navbar
    window.dispatchEvent(new Event("cartUpdated"));

    // Show success message
    toast.success(
      "Your order has been placed successfully! Thank you for your purchase.",
      {
        duration: 5000,
      }
    );

    // Redirect to shop after delay
    setTimeout(() => {
      router.push("/shop");
    }, 3000);
  };

  // Define callback functions outside of the setup to avoid issues
  const handlePaymentSuccess = async (response) => {
    console.log("✅ Payment callback received:", response);
    setLoading(false);

    if (response.status === "success") {
      const orderId = response.reference.split("_")[2] || generateOrderId();
      const orderData = {
        orderId: orderId,
        reference: response.reference,
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
        },
        items: cart,
        pricing: {
          subtotal: getSubtotal(),
          discount: discount,
          deliveryFee: deliveryFee,
          serviceFee: serviceFee,
          taxes: taxes,
          total: total,
        },
        paymentMethod: "M-Pesa",
        paymentStatus: "paid",
        orderStatus: "confirmed",
        paymentReference: response.reference,
        createdAt: new Date().toISOString(),
      };

      await saveOrderToBackend(orderData);
      toast.success("Payment successful! Your order will be processed soon.");
      clearCartAndShowSuccess();
    } else {
      toast.error("Payment was not successful. Please try again.");
    }
  };

  const handlePaymentClose = () => {
    console.log("❌ Payment popup closed by user");
    setLoading(false);
    toast.info("Payment was cancelled");
  };

  const handleMpesaPayment = () => {
    if (!validateForm()) return;

    if (!paystackLoaded) {
      toast.error(
        "Payment system is still loading. Please wait a moment and try again."
      );
      return;
    }

    if (!window.PaystackPop) {
      toast.error(
        "Payment system not available. Please refresh the page and try again."
      );
      return;
    }

    setLoading(true);
    const orderId = generateOrderId();

    // Format phone number for Kenya M-Pesa
    const formatPhoneNumber = (phone) => {
      // Remove all non-digit characters
      let cleanPhone = phone.replace(/\D/g, "");

      // Handle different formats
      if (cleanPhone.startsWith("254")) {
        return cleanPhone; // Already in correct format
      } else if (cleanPhone.startsWith("0")) {
        return "254" + cleanPhone.substring(1); // Remove 0 and add 254
      } else if (cleanPhone.length === 9) {
        return "254" + cleanPhone; // Add 254 to 9-digit number
      } else {
        return "254" + cleanPhone; // Default: add 254
      }
    };

    const formattedPhone = formatPhoneNumber(formData.phone);

    console.log("🔄 Initiating M-Pesa payment...");
    console.log("Payment details:", {
      amount: total * 100,
      currency: "KES",
      email: formData.email,
      phone: formattedPhone,
      reference: orderId,
      key: PAYSTACK_PUBLIC_KEY.substring(0, 10) + "...",
    });

    // Create timeout to handle stuck payments
    const paymentTimeout = setTimeout(() => {
      setLoading(false);
      toast.error("Payment took too long to load. Please try again.");
    }, 30000); // 30 second timeout

    try {
      // Create the payment configuration
      const paymentConfig = {
        key: PAYSTACK_PUBLIC_KEY,
        email: formData.email,
        amount: total * 100, // Amount in kobo
        currency: "KES",
        ref: orderId,
        channels: ["mobile_money"], // Only mobile money (M-Pesa)
        callback: function (response) {
          clearTimeout(paymentTimeout);
          handlePaymentSuccess(response);
        },
        onClose: function () {
          clearTimeout(paymentTimeout);
          handlePaymentClose();
        },
        metadata: {
          custom_fields: [
            {
              display_name: "Customer Name",
              variable_name: "customer_name",
              value: formData.name,
            },
            {
              display_name: "Phone Number",
              variable_name: "phone_number",
              value: formattedPhone,
            },
            {
              display_name: "Delivery Address",
              variable_name: "delivery_address",
              value: formData.address,
            },
          ],
        },
      };

      console.log("🚀 Opening Paystack popup with config:", paymentConfig);

      const handler = window.PaystackPop.setup(paymentConfig);
      handler.openIframe();

      // Additional check if popup didn't open
      setTimeout(() => {
        if (loading) {
          console.log("⚠️ Popup seems to be blocked or failed to open");
          toast.warning(
            "If you don't see the payment popup, please disable popup blockers and try again."
          );
        }
      }, 3000);
    } catch (error) {
      clearTimeout(paymentTimeout);
      console.error("❌ Error opening payment popup:", error);
      setLoading(false);
      toast.error(`Failed to open payment popup: ${error.message}`);
    }
  };

  const handlePayOnDelivery = async () => {
    if (!validateForm()) return;

    setLoading(true);
    const orderId = generateOrderId();

    try {
      const orderData = {
        orderId: orderId,
        reference: orderId, // Use order ID as reference for COD
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
        },
        items: cart,
        pricing: {
          subtotal: getSubtotal(),
          discount: discount,
          deliveryFee: deliveryFee,
          serviceFee: serviceFee,
          taxes: taxes,
          total: total,
        },
        paymentMethod: "Pay on Delivery",
        paymentStatus: "pending",
        orderStatus: "confirmed",
        paymentReference: null,
        createdAt: new Date().toISOString(),
      };

      console.log("📦 Placing Pay on Delivery order:", orderData);
      await saveOrderToBackend(orderData);
      setLoading(false);
      clearCartAndShowSuccess();
    } catch (error) {
      console.error("❌ Error placing order:", error);
      setLoading(false);
      toast.error("Failed to place order. Please try again.");
    }
  };

  const handlePayment = () => {
    console.log("💳 Payment method selected:", selectedPaymentMethod);

    switch (selectedPaymentMethod) {
      case "mpesa":
        handleMpesaPayment();
        break;
      case "cod":
        handlePayOnDelivery();
        break;
      default:
        toast.error("Please select a payment method");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="px-4 md:px-6 lg:px-12 py-24 outfit md:py-28 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl mb-4">Your cart is empty</h2>
        <button
          onClick={() => router.push("/shop")}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-12 py-24 outfit md:py-28 min-h-screen flex flex-col gap-4">
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-6 text-gray-600 hover:text-black transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Delivery Information */}
          <div className="bg-white rounded-lg p-6 border">
            <h2 className="text-xl font-medium mb-6">Delivery Information</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="George Gika"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="magika@mail.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number *
                </label>
                <div className="flex">
                  <select className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-sm">
                    <option>KE +254</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="700123456"
                    required
                    className="flex-1 px-3 py-2 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Enter phone number: 0700123456 or 700123456
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your full delivery address"
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mpesa"
                    checked={selectedPaymentMethod === "mpesa"}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="text-green-600"
                  />
                  <Smartphone className="w-5 h-5 text-green-600" />
                  <div>
                    <span className="font-medium">M-Pesa</span>
                    <p className="text-xs text-gray-500">
                      Pay with your M-Pesa mobile money
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={selectedPaymentMethod === "cod"}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="text-orange-600"
                  />
                  <Truck className="w-5 h-5 text-orange-600" />
                  <div>
                    <span className="font-medium">Pay on Delivery</span>
                    <p className="text-xs text-gray-500">
                      Pay when your order arrives
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-white rounded-lg p-6 border">
            <h2 className="text-xl font-medium mb-6">Summary</h2>

            <div className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {Number(item.price).toLocaleString()} KSH x{" "}
                      {item.quantity}
                    </p>
                    <p className="text-xs text-gray-500">Size: {item.size}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>KSH {getSubtotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-red-600">
                <span>Discount (-20%)</span>
                <span>-KSH {discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery</span>
                <span>KSH {deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Service Fee</span>
                <span>KSH {serviceFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Taxes</span>
                <span>KSH {taxes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium text-lg border-t pt-3">
                <span>Total</span>
                <span>KSH {total.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handlePayment}
                disabled={loading}
                className={`w-full text-white px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : selectedPaymentMethod === "cod"
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {loading
                  ? "Processing..."
                  : selectedPaymentMethod === "cod"
                  ? "Place Order (Pay on Delivery)"
                  : `Pay KSH ${total.toLocaleString()} with M-Pesa`}
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                {selectedPaymentMethod === "cod"
                  ? "You'll pay when your order is delivered"
                  : paystackLoaded
                  ? "Secure payment powered by Paystack"
                  : "Loading payment system..."}
              </p>
            </div>

            {/* Debug info in development
            {process.env.NODE_ENV === "development" && (
              <div className="mt-4 p-3 bg-gray-100 rounded text-xs">
                <p>
                  <strong>Debug Info:</strong>
                </p>
                <p>Paystack Loaded: {paystackLoaded ? "✅" : "❌"}</p>
                <p>
                  PaystackPop Available:{" "}
                  {typeof window !== "undefined" && window.PaystackPop
                    ? "✅"
                    : "❌"}
                </p>
                <p>Key: {PAYSTACK_PUBLIC_KEY.substring(0, 10)}...</p>
                <p>Total (Kobo): {total * 100}</p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

"use client";
import { Brain, ChevronDown, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { dropdowns } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { AppContext } from "@/context/AppContext";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { token, setToken } = useContext(AppContext);
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

  return (
    <div>
      {/* large screen size */}
      <div className="hidden sm:hidden lg:grid grid-cols-3 !py-4 !px-[3%] bg-white/90 backdrop-blur-lg  border-b  text-black w-full z-50 fixed">
        {/* logo */}
        <Link href={"/"} className="flex items-center gap-3">
          <Brain className="w-7 h-7 text-cyan-500" />
          <p className="leading-5 text-xs font-semibold text-black">
            ANCHOR POINT <br /> INITIATIVE
          </p>
        </Link>
        {/* navlinks */}
        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-[2rem]">
            {dropdowns.map((dropdown, index) => (
              <div
                key={dropdown.label}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  className="flex items-center gap-2 text-xs !px-3 !py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
                  type="button"
                  onClick={() => {
                    setHoveredIndex(null);
                    router.push(`/${dropdown.label.toLowerCase()}`);
                  }}
                >
                  <span>{dropdown.label}</span>
                  <motion.span
                    initial={false}
                    animate={{ rotate: hoveredIndex === index ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className=""
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                {/* Dropdown menu */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 top-full -translate-x-1/2 !mt-2 min-w-[300px] bg-[#f6f6f4] dark:bg-black rounded-xl shadow-xl !py-2 px-2 z-20"
                    >
                      {dropdown.items.map((item) => (
                        <div
                          key={item}
                          className="!px-4 !py-3 text-black dark:text-gray-200 text-xs hover:bg-white dark:hover:bg-zinc-800 rounded-xl transition cursor-pointer"
                          onClick={() => {
                            setHoveredIndex(null);
                            router.push(
                              `/${dropdown.label.toLowerCase()}#${item
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`
                            );
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </ul>
        </div>
        {/* Donation and store */}
        <div className="flex items-center justify-end gap-6">
          <Button className="relative" onClick={() => router.push("/shop")}>
            <Store className="cursor-pointer w-4 h-4" />
            <p className="text-xs">Visit our store</p>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                {cartCount}
              </span>
            )}
          </Button>
          <Button onClick={() => router.push("/donate")}>
            <p className="text-xs">Donate</p>
          </Button>
        </div>
      </div>

      {/* small screen size */}
      <div className="lg:hidden w-full fixed top-0 left-0 z-50">
        {/* Top bar */}
        <div className="flex items-center justify-between bg-white/90 backdrop-blur-lg border-b px-4 py-3">
          <Link href={"/"} className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-cyan-500" />
            <p className="leading-5 text-sm font-semibold text-black">
              ANCHOR POINT <br /> INITIATIVE
            </p>
          </Link>
          {/* Notification icon */}
          <div className="flex items-center">
            <button
              onClick={() => {
                setMenuOpen(false);
                router.push("/shop");
              }}
              className="p-2 rounded-full hover:bg-gray-100 relative"
            >
              <Store className="cursor-pointer w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
                  {cartCount}
                </span>
              )}
            </button>
            {/* Menu icon */}
            <button
              className="p-2 rounded-full hover:bg-gray-100 ml-2"
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-text-align-end-icon lucide-text-align-end"
              >
                <path d="M21 5H3" />
                <path d="M21 12H9" />
                <path d="M21 19H7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Animated Side Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.aside
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-screen  bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <span className="font-bold text-lg text-gray-800">MENU</span>
                <button
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="space-y-4">
                  {dropdowns.map((dropdown) => (
                    <li key={dropdown.label}>
                      <details className="group">
                        <summary
                          className="flex items-center justify-between cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
                          onClick={() => {
                            setMenuOpen(false);
                            router.push(`/${dropdown.label.toLowerCase()}`);
                          }}
                        >
                          <span>{dropdown.label}</span>
                          <ChevronDown className="w-4 h-4" />
                        </summary>
                        <ul className="pl-4 mt-2 space-y-2">
                          {dropdown.items.map((item) => (
                            <li key={item}>
                              <button
                                className="w-full text-left !py-2 !px-2 rounded-lg hover:bg-indigo-50 text-gray-600"
                                onClick={() => {
                                  setMenuOpen(false);
                                  router.push(
                                    `/${dropdown.label.toLowerCase()}#${item
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`
                                  );
                                }}
                              >
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ))}
                </ul>
                {/* Donation and store */}
                <div className="flex items-center !mt-10 gap-6">
                  <Button
                    onClick={() => {
                      setMenuOpen(false);
                      router.push("/donate");
                    }}
                  >
                    <p>Donate</p>
                  </Button>
                </div>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;

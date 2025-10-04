"use client";
import React, { useState } from "react";
import { Brain } from "lucide-react";
import Image from "next/image";
import { hero4 } from "@/assets/images";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const countries = [
  { code: "KE", name: "Kenya", dial: "+254" },
  { code: "UK", name: "United Kingdom", dial: "+44" },
  { code: "US", name: "United States", dial: "+1" },
  // Add more countries as needed
];

const amounts = ["$10", "$25", "$50", "$100", "$250", "$500"];
const paymentMethods = ["Credit Card", "PayPal", "M-Pesa", "Bank Transfer"];

export default function Donationpage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "KE",
    phone: "",
    amount: "$50",
    payment: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle donation logic
    alert("Thank you for your donation!");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#f8f8f8]">
      {/* Left image and company text */}
      <div className="flex flex-col items-center justify-center md:w-1/2 h-screen relative overflow-hidden">
        <Image
          src={hero4}
          alt="Anchor Point Initiative Hero"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0 w-full h-full rounded-l-2xl"
        />
        <div className="relative z-10 flex flex-col items-start justify-between h-full px-12 py-10 ">
          <Link href={"/"} className="flex items-center gap-3">
            <Brain
              className="w-8 h-8 text-cyan-500 cursor-pointer"
              tabIndex={0}
              role="button"
              title="Go to Home"
            />
            <p className="leading-5 font-semibold text-black">
              ANCHOR POINT <br /> INITIATIVE
            </p>
          </Link>
          <div className="w-[90%] flex flex-col !p-5 gap-3">
            <motion.h1
              className="text-3xl md:text-black font-extrabold one"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              Be a Donor
            </motion.h1>
            <motion.p
              className="text-gray-900 md:text-gray-900 text-xs"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              Support our mission to build a stronger community by helping the
              youth. Your donation makes a difference!
            </motion.p>
          </div>
        </div>
      </div>
      {/* Right donation form */}
      <div className="flex flex-col  gap-[2rem] w-full md:w-1/2 p-12 md:p-8">
        <h1 className="text-lg font-semibold">Donate! </h1>
        <p className="text-xs text-gray-500">
          {" "}
          Make an impact with your donation! Just $15 covers the cost of a
          therapy session, providing essential support to those in need.
        </p>
        <p className="text-xs text-gray-500">
          With $50, you can empower a Rafiki to become a peer support champion,
          fostering resilience and compassion within our communities and helping
          to bridge the mental health care gap. One Rafiki can impact up to 100
          people.
        </p>
        <p className="text-xs text-gray-500">
          A generous donation of $10,000 can establish a community wellness
          centre, bringing vital mental health resources to underserved
          communities.
        </p>
        <p className="text-xs text-gray-500">
          Your contribution, no matter the amount, directly supports our efforts
          to strengthen Mental Health support systems and transform lives.
        </p>
        <p className="text-xs text-gray-500">
          Together, let’s create a world where mental well-being is a universal
          right.
        </p>
        <a
          href="https://paystack.shop/pay/ztz02jl3m1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-green-700 text-sm text-white w-fit text-center rounded-sm py-1 px-6  transition-all duration-300"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
}

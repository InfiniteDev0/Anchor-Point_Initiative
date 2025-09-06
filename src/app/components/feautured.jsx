"use client";

import React from "react";
import {
  Brain,
  HeartPulse,
  Hospital,
  User,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { brightside, headspace, lyra, mente, mind, timelycare } from "@/assets/images";
import Image from "next/image";

const healthCompanies = [
  { logo: lyra, name: "Lyra" },
  { logo: brightside, name: "Mind" },
  { logo: mind, name: "APA" },
  { logo: headspace, name: "MHA" },
  { logo: mente, name: "Headspace" },
  { logo: timelycare, name: "BetterHelp" },
];

const Featured = () => {
  return (
    <div className="flex !p-[5%] flex-col items-center w-full">
      <p className="!mb-4 text-sm md:text-sm text-gray-600">
        We're Featured Across Multiple Directories
      </p>
      <div className="w-full overflow-hidden flex justify-center">
        <div className="w-full md:max-w-6xl mx-auto overflow-hidden flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-6 md:gap-[5rem]">
            {healthCompanies.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-2xl !py-5 !px-[5%]"
              >
                <Image
                  src={item.logo}
                  alt={item.name + " logo"}
                  className="w-24 md:w-40 h-10 object-contain mb-2 grayscale  transition duration-300"
                  loading="lazy"
                />
                {/* <span className="text-xs text-gray-500 mt-1">{item.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import { Brain } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e8edf7] pt-16 pb-6 px-6 md:px-12 lg:px-24 w-full text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Appointment CTA */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4">
            <Brain className="w-12 h-12 text-cyan-500"/>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            Book An Appointment Today
          </h2>
          <p className="text-gray-600 text-xs md:text-sm mb-6 max-w-xl mx-auto">
            Book an appointment with our handpicked mental health and wellness
            experts whenever or wherever you want!
          </p>
          <a
            href="#"
            className="bg-cyan-600 active:bg-cyan-500 md:hover:bg-indigo-700 transition-all duration-500 text-white font-medium px-8 py-3 rounded-full shadow  inline-block"
          >
            Book An Appointment
          </a>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-600 rounded-full p-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C7.61 22 2 16.39 2 9.5a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2Z"
                      fill="#6366f1"
                    />
                  </svg>
                </span>
                602-774-4735
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-600 rounded-full p-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                      fill="#6366f1"
                    />
                  </svg>
                </span>
                11022 South 51st Street Suite 105
                <br />
                Phoenix, AZ 85044
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-600 rounded-full p-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1m18 0v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0H3"
                      stroke="#6366f1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="7"
                      y="12"
                      width="10"
                      height="2"
                      rx="1"
                      fill="#6366f1"
                    />
                  </svg>
                </span>
                hello@unifiedui.com
              </li>
            </ul>
          </div>
          {/* Navigate */}
          <div>
            <h3 className="font-semibold mb-4">Navigate</h3>
            <ul className="space-y-3 text-sm">
              <li>Services</li>
              <li>Success Stories</li>
              <li>Discover</li>
              <li>Care</li>
              <li>Download App</li>
            </ul>
          </div>
          {/* Solution */}
          <div>
            <h3 className="font-semibold mb-4">Solution</h3>
            <ul className="space-y-3 text-sm">
              <li>Get in Touch</li>
              <li>Technology</li>
              <li>Who're We?</li>
              <li>Expertise</li>
            </ul>
          </div>
          {/* Discover */}
          <div>
            <h3 className="font-semibold mb-4">Discover</h3>
            <ul className="space-y-3 text-sm">
              <li>Latest News</li>
              <li>New Arrivals</li>
              <li>Solution</li>
              <li>Gain Profession</li>
              <li>Career</li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-3 text-sm">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        {/* Copyright & links */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t pt-6 text-xs text-gray-500">
          <div>
            &copy;Copyright{" "}
            <a
              href="https://unifiedui.com"
              className="text-indigo-600 hover:underline"
            >
              Anchorpointintiative.com
            </a>{" "}
            All rights reserved. 2024
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy &amp; Policy
            </a>
            <a href="#" className="hover:underline">
              Terms &amp; Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

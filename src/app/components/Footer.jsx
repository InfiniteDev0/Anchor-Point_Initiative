import { Brain, Mail, Phone, PinIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar24 } from "@/components/ui/calendar24";

const Footer = () => {
  return (
    <footer className="bg-[#e8edf7] pt-16 pb-6 px-6 md:px-12 lg:px-24 w-full text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Appointment CTA */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4">
            <Brain className="w-10 h-10 text-cyan-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Book An Appointment Today
          </h2>
          <p className="text-gray-600 text-[10px] md:text-sm mb-6 max-w-xl mx-auto">
            Book an appointment with our handpicked mental health and wellness
            experts whenever or wherever you want!
          </p>
              <Button className="bg-cyan-600 active:bg-cyan-500 md:hover:bg-indigo-700 transition-all text-xs duration-500 text-white  !px-8 !py-3 rounded-full">
                Book An Appointment
              </Button>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[5rem] mb-8">
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex text-xs underline items-center gap-2">
                <span className="bg-black text-indigo-600 rounded-full p-2">
                  <Phone className="w-3 h-3 text-white" />
                </span>
                +254700000001
              </li>
              <li className="flex text-xs underline items-center gap-2">
                <span className="bg-black text-indigo-600 rounded-full p-2">
                  <PinIcon className="w-3 h-3 text-white" />
                </span>
                Nairobi , kenya
              </li>
              <li className="flex text-xs underline items-center gap-2">
                <span className="bg-black text-indigo-600 rounded-full p-2">
                  <Mail className="w-3 h-3 text-white" />
                </span>
                info@Anchorpointintiative.com
              </li>
            </ul>
          </div>
          {/* Navigate */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Navigate</h3>
            <ul className="space-y-3 text-xs">
              <li>Services</li>
              <li>Success Stories</li>
              <li>Discover</li>
              <li>Care</li>
              <li>Download App</li>
            </ul>
          </div>
          {/* Solution */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Solution</h3>
            <ul className="space-y-3 text-xs">
              <li>Get in Touch</li>
              <li>Technology</li>
              <li>Who're We?</li>
              <li>Expertise</li>
            </ul>
          </div>
          {/* Discover */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Discover</h3>
            <ul className="space-y-3 text-xs">
              <li>Latest News</li>
              <li>New Arrivals</li>
              <li>Solution</li>
              <li>Gain Profession</li>
              <li>Career</li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Follow Us</h3>
            <ul className="space-y-3 text-xs">
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

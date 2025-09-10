"use client";
import { Nunito, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AppProvider from "@/context/AppContext";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MessageCircle, Sparkles } from "lucide-react";
import { RealtimeChat } from "@/components/realtime-chat";
import { Button } from "@/components/ui/button";
import AssistantAi from "./chat/assistantAi";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: "800",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <title>Anchor Point Initiative</title>
      <body
        className={`${outfit.variable} ${poppins.variable} bg-[#ebebeb] antialiased`}
      >
        <Toaster richColors position="top-right" />
        <AppProvider>
          {!(
            pathname === "/donate" || pathname.startsWith("/client/dashboard")
          ) && <Navbar />}
          {children}
          {!(
            pathname === "/donate" || pathname.startsWith("/client/dashboard")
          ) && <Footer />}
          {/* Floating Chat AI Button */}
          {!(
            pathname === "/auth" || pathname.startsWith("/client/dashboard")
          )}
        </AppProvider>
      </body>
    </html>
  );
}

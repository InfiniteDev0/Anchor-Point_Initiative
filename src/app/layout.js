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
            pathname === "/auth" || pathname.startsWith("/client/dashboard")
          ) && <Navbar />}
          {children}
          {!(
            pathname === "/auth" || pathname.startsWith("/client/dashboard")
          ) && <Footer />}
          {/* Floating Chat AI Button */}
          {!(
            pathname === "/auth" || pathname.startsWith("/client/dashboard")
          ) && (
            <div className="fixed bottom-6 right-6 z-50">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    aria-label="Open AI Chat Assistant"
                    className="w-10 h-10 cursor-pointer rounded-full shadow-lg p-4 flex items-center justify-center"
                  >
                    <Sparkles className="w-7 h-7" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="max-w-md w-full px-0 py-0 flex flex-col">
                  <SheetHeader>
                    <SheetTitle>AI Assistant</SheetTitle>
                  </SheetHeader>
                  <div className="flex-1 overflow-y-auto">
                    <RealtimeChat roomName="ai-assistant" username="You" />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </AppProvider>
      </body>
    </html>
  );
}

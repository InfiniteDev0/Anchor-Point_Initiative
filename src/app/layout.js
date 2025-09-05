"use client";
import { Nunito, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AppProvider from "@/context/AppContext";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import Footer from "./components/Footer";

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
        <Toaster />
        <AppProvider>
          {!(
            pathname === "/login" ||
            pathname === "/signup" ||
            pathname.startsWith("/client/dashboard")
          ) && <Navbar />}
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}

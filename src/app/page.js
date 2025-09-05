"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "./components/Hero";
import Featured from "./components/feautured";
import OurWork from "./components/OurWork";
import OurSolutions from "./components/OurSolutions";
import Team from "./components/Team";
import OurBlog from "./components/OurBlog";
import OurTestimonials from "./components/OurTestimonials";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      if (user) {
        router.replace("/client/dashboard");
      }
    }
  }, [router]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f4f2]">
        <div>
          {/* home componenets run here and the chat system */}
          <Hero />
          <Featured/>
          <OurWork/>
          <OurSolutions />
          <Team/>
          <OurBlog/>
          <OurTestimonials/>
          
        </div>
    </div>
  );
}

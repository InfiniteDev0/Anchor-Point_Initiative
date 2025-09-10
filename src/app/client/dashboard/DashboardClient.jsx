"use client";
import React, { Suspense } from "react";
import ClientNav from "./components/ClientNav";
import Sidebar from "./components/Sidebar";

export default function DashboardClient() {
  // ...your existing logic...
  return (
    <Suspense  fallback={<div>Loading...</div>}>
      <div className="bg-[#ebebeb]  w-full min-h-screen flex flex-col">
        <ClientNav/>
        <div className="flex">
          <Sidebar/>
        </div>
      </div>
    </Suspense>
  );
}


//  <div className="fixed bottom-6 right-6 z-50">
//    <Sheet>
//      <SheetTrigger asChild>
//        <Button
//          aria-label="Open AI Chat Assistant"
//          className="w-12 h-12 cursor-pointer rounded-full shadow-lg p-4 flex items-center justify-center"
//        >
//          <Sparkles className="w-7 h-7" />
//        </Button>
//      </SheetTrigger>
//      <SheetContent className="w-full max-w-xs sm:max-w-sm px-0 py-0 flex flex-col">
//        {/* Use the new AssistantAi component for the chat assistant */}
//        <AssistantAi roomName="ai-assistant" username="You" />
//      </SheetContent>
//    </Sheet>
//  </div>;
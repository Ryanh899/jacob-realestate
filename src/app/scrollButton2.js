"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ScrollToValuation() {
  const handleScroll = () => {
    const section = document.getElementById("home-valuation");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="flex flex-col items-center text-blue-300 hover:text-blue-400 transition-colors duration-300 md:hidden"
    >
      <span className="text-sm uppercase tracking-widest mb-2">
        See Home Valuation
      </span>
      <ChevronDown className="animate-bounce w-6 h-6" />
    </button>
  );
}

"use client";
import React from "react";
import { scrollTop } from "../icons/Icons";
import { useEffect, useState } from "react";

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`bg-orange-400 rounded-sm w-10 h-10 fixed bottom-10 right-10 rotate-180 cursor-pointer ${
        isVisible
          ? "opacity-100 hover:-translate-y-2 ease-in-out duration-300"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {scrollTop}
    </button>
  );
};
export default ScrollBtn;

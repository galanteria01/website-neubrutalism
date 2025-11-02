import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
} from "lucide-react";
import HeroPage from "../pages/Hero";
import AboutPage from "../pages/About";
import ExperiencePage from "../pages/Experience";
import SkillsPage from "../pages/Skills";
import ContactPage from "../pages/Contact";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const pages = ["hero", "about", "experience", "skills", "contact"];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning) return;

      if (e.deltaY > 0 && currentPage < pages.length - 1) {
        setIsTransitioning(true);
        setCurrentPage((prev) => prev + 1);
        setTimeout(() => setIsTransitioning(false), 1000);
      } else if (e.deltaY < 0 && currentPage > 0) {
        setIsTransitioning(true);
        setCurrentPage((prev) => prev - 1);
        setTimeout(() => setIsTransitioning(false), 1000);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (
        (e.key === "ArrowDown" || e.key === "PageDown") &&
        currentPage < pages.length - 1
      ) {
        setIsTransitioning(true);
        setCurrentPage((prev) => prev + 1);
        setTimeout(() => setIsTransitioning(false), 1000);
      } else if (
        (e.key === "ArrowUp" || e.key === "PageUp") &&
        currentPage > 0
      ) {
        setIsTransitioning(true);
        setCurrentPage((prev) => prev - 1);
        setTimeout(() => setIsTransitioning(false), 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, isTransitioning]);

  const navigateToPage = (index: number) => {
    if (isTransitioning || index === currentPage) return;
    setIsTransitioning(true);
    setCurrentPage(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const getPageStyle = (index: number) => {
    const diff = index - currentPage;
    if (diff === 0) {
      return {
        transform: "translateY(0) scale(1)",
        opacity: 1,
        pointerEvents: "auto" as const,
      };
    }
    const translateY = diff * 100;
    return {
      transform: `translateY(${translateY}vh) scale(0.9)`,
      opacity: 0,
      pointerEvents: "none" as const,
    };
  };

  return (
    <div
      className={`h-screen w-screen overflow-hidden ${
        isDark ? "bg-slate-900" : "bg-slate-100"
      } relative transition-colors duration-500`}
    >
      {/* Dark Mode Toggle - Responsive positioning */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-4 right-4 md:top-6 md:right-24 z-50 ${
          isDark ? "bg-yellow-400" : "bg-slate-800"
        } border-4 border-black p-2 md:p-3 hover:scale-110 transition-all`}
        style={{ boxShadow: "4px 4px 0 0 black" }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 md:w-6 md:h-6 text-black" />
        ) : (
          <Moon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        )}
      </button>

      {/* Floating shapes background - Responsive */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-10 md:top-20 left-5 md:left-10 w-16 md:w-32 h-16 md:h-32 ${
            isDark ? "bg-yellow-300/20" : "bg-yellow-300"
          } border-2 md:border-4 border-black transform rotate-12 animate-bounce`}
          style={{ animationDuration: "3s" }}
        />
        <div
          className={`absolute top-32 md:top-40 right-10 md:right-20 w-12 md:w-24 h-12 md:h-24 ${
            isDark ? "bg-pink-400/20" : "bg-pink-400"
          } border-2 md:border-4 border-black rounded-full animate-pulse`}
          style={{ animationDuration: "2s" }}
        />
        <div
          className={`absolute bottom-32 md:bottom-40 left-20 md:left-40 w-14 md:w-28 h-14 md:h-28 ${
            isDark ? "bg-cyan-300/20" : "bg-cyan-300"
          } border-2 md:border-4 border-black transform -rotate-12`}
          style={{ animation: "spin 10s linear infinite" }}
        />
        <div
          className={`absolute bottom-10 md:bottom-20 right-20 md:right-40 w-18 md:w-36 h-18 md:h-36 ${
            isDark ? "bg-purple-300/20" : "bg-purple-300"
          } border-2 md:border-4 border-black transform rotate-45`}
        />
      </div>

      {/* Navigation Dots - Responsive positioning */}
      <div className="fixed right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3 md:space-y-4">
        {pages.map((page, index) => (
          <button
            key={page}
            onClick={() => navigateToPage(index)}
            className={`block w-3 h-3 md:w-4 md:h-4 border-2 md:border-4 border-black transition-all duration-300 ${
              currentPage === index
                ? "bg-yellow-400 scale-125 md:scale-150"
                : "bg-white hover:bg-slate-300"
            }`}
            style={{ boxShadow: "2px 2px 0 0 black" }}
          />
        ))}
      </div>

      {/* Pages Container */}
      <div className="h-full w-full relative">
        {/* Hero Page */}
        <HeroPage isDark={isDark} getPageStyle={getPageStyle} />

        {/* About Page */}
        <AboutPage isDark={isDark} getPageStyle={getPageStyle} />

        {/* Experience Page */}
        <ExperiencePage isDark={isDark} getPageStyle={getPageStyle} />

        {/* Skills Page */}
        <SkillsPage isDark={isDark} getPageStyle={getPageStyle} />

        {/* Contact Page */}
        <ContactPage isDark={isDark} getPageStyle={getPageStyle} />
      </div>
    </div>
  );
}

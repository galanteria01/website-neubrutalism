import { ChevronDown, Zap } from "lucide-react";
import React from "react";
import { quotes } from "../data/Constants";

type Props = {
  isDark: boolean;
  getPageStyle: (index: number) => React.CSSProperties;
};

const ExperiencePage = ({ isDark, getPageStyle }: Props) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={getPageStyle(2)}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2
          className={`text-3xl sm:text-4xl md:text-6xl font-black mb-8 md:mb-12 text-center transform -rotate-2 ${
            isDark ? "text-white" : "text-black"
          }`}
          style={{ textShadow: "3px 3px 0 #FFE500, 6px 6px 0 #FFE500" }}
        >
          MY JOURNEY 🚀
        </h2>
        <div className="space-y-6 md:space-y-8">
          <div
            className="bg-purple-400 border-4 md:border-8 border-black p-4 md:p-8 transform rotate-1 hover:-rotate-1 transition-transform"
            style={{ boxShadow: "6px 6px 0 0 black, 12px 12px 0 0 black" }}
          >
            <div className="flex justify-between items-start mb-3 md:mb-4 flex-wrap gap-3 md:gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 md:mb-2 text-black">
                  NUTANIX
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                  Software Engineer
                </p>
              </div>
              <div
                className="bg-yellow-400 border-2 md:border-4 border-black px-4 py-1 md:px-6 md:py-2"
                style={{
                  boxShadow: "2px 2px 0 0 black, 4px 4px 0 0 black",
                }}
              >
                <span className="font-black text-base md:text-xl text-black">
                  NOW!
                </span>
              </div>
            </div>
            <div
              className={`${
                isDark ? "bg-slate-800 text-white" : "bg-white text-black"
              } border-2 md:border-4 border-black p-4 md:p-6 mt-3 md:mt-4`}
              style={{ boxShadow: "2px 2px 0 0 black, 4px 4px 0 0 black" }}
            >
              <ul className="space-y-2 md:space-y-3 font-bold text-sm sm:text-base md:text-lg">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-lg md:text-2xl">🎯</span>
                  <span>Building cloud magic for enterprise solutions</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-lg md:text-2xl">⚡</span>
                  <span>Crafting scalable frontends that users love</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-lg md:text-2xl">🤖</span>
                  <span>Integrating AI features that blow minds</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="bg-cyan-400 border-4 md:border-8 border-black p-4 md:p-8 transform -rotate-1 hover:rotate-1 transition-transform"
            style={{ boxShadow: "6px 6px 0 0 black, 12px 12px 0 0 black" }}
          >
            <div className="flex justify-between items-start mb-3 md:mb-4 flex-wrap gap-3 md:gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 md:mb-2 text-black">
                  KATONIC
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                  Software Engineer
                </p>
              </div>
              <div
                className="bg-lime-300 border-2 md:border-4 border-black px-4 py-1 md:px-6 md:py-2"
                style={{
                  boxShadow: "2px 2px 0 0 black, 4px 4px 0 0 black",
                }}
              >
                <span className="font-black text-base md:text-xl text-black">
                  3+ YEARS
                </span>
              </div>
            </div>
            <div
              className={`${
                isDark ? "bg-slate-800 text-white" : "bg-white text-black"
              } border-2 md:border-4 border-black p-4 md:p-6 mt-3 md:mt-4`}
              style={{ boxShadow: "2px 2px 0 0 black, 4px 4px 0 0 black" }}
            >
              <ul className="space-y-2 md:space-y-3 font-bold text-sm sm:text-base md:text-lg">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-lg md:text-2xl">🔬</span>
                  <span>Led AI/ML platform development</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-lg md:text-2xl">🏗️</span>
                  <span>Architected full-stack solutions from scratch</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-lg md:text-2xl">🚀</span>
                  <span>Shipped production ML models at scale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="mt-6 md:mt-8 bg-pink-300 border-2 md:border-4 border-black p-3 md:p-4 transform rotate-1 inline-block"
          style={{ boxShadow: "3px 3px 0 0 black, 6px 6px 0 0 black" }}
        >
          <p className="font-black text-base md:text-xl italic text-black">
            "{quotes[2]}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;

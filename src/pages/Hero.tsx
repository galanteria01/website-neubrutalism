import { ChevronDown, Zap } from "lucide-react";
import React from "react";

type Props = {
  isDark: boolean;
  getPageStyle: (index: number) => React.CSSProperties;
};

const HeroPage = ({ isDark, getPageStyle }: Props) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={getPageStyle(0)}
    >
      <div className="text-center relative z-10 px-6">
        <div className="inline-block mb-6 animate-bounce">
          <div
            className="bg-yellow-400 border-8 border-black p-4 md:p-6 transform -rotate-3"
            style={{ boxShadow: "12px 12px 0 0 black" }}
          >
            <Zap className="w-20 h-20" />
          </div>
        </div>
        <h1
          className="text-4xl md:text-8xl font-black mb-6 transform -rotate-1"
          style={{
            textShadow: "6px 6px 0 #000",
            WebkitTextStroke: "3px black",
            color: isDark ? "#FFE500" : "#FFE500",
          }}
        >
          HEY! I'M
        </h1>
        <div
          className={`${
            isDark ? "bg-white text-black" : "bg-black text-white"
          } px-6 md:px-12 py-3 md:py-6 inline-block border-8 border-black transform rotate-1 mb-4`}
          style={{ boxShadow: "8px 8px 0 0 #00F5FF" }}
        >
          <h2 className="text-4xl md:text-7xl font-black">SHOURY SHARMA</h2>
        </div>
        <div
          className="bg-lime-300 px-12 py-6 inline-block border-8 border-black transform -rotate-2 mb-8"
          style={{ boxShadow: "8px 8px 0 0 #FF006E" }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-black">SOFTWARE ENGINEER</h2>
        </div>
        <div className="flex gap-6 justify-center flex-wrap mb-8">
          <div
            className="bg-cyan-400 border-4 border-black px-6 py-3 transform -rotate-1 hover:rotate-1 transition-transform"
            style={{ boxShadow: "4px 4px 0 0 black" }}
          >
            <span className="font-bold text-lg">Frontend Wizard</span>
          </div>
          <div
            className="bg-purple-400 border-4 border-black px-6 py-3 transform rotate-1 hover:-rotate-1 transition-transform"
            style={{ boxShadow: "4px 4px 0 0 black" }}
          >
            <span className="font-bold text-lg">AI Enthusiast</span>
          </div>
          <div
            className="bg-pink-400 border-4 border-black px-6 py-3 transform -rotate-2 hover:rotate-2 transition-transform"
            style={{ boxShadow: "4px 4px 0 0 black" }}
          >
            <span className="font-bold text-lg">Backend Pro</span>
          </div>
        </div>
        <div className="mt-8">
          <ChevronDown className="w-12 h-12 mx-auto animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

import { ChevronDown, Github, Linkedin, Mail, Zap } from "lucide-react";
import React from "react";

type Props = {
  isDark: boolean;
  getPageStyle: (index: number) => React.CSSProperties;
};

const AboutPage = ({ isDark, getPageStyle }: Props) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={getPageStyle(1)}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          className="bg-yellow-400 border-4 md:border-8 border-black p-6 md:p-12 transform -rotate-1"
          style={{ boxShadow: "8px 8px 0 0 black, 16px 16px 0 0 black" }}
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 transform rotate-1 ${
              isDark ? "text-white" : "text-black"
            }`}
            style={{ textShadow: "2px 2px 0 #000, 4px 4px 0 #000" }}
          >
            ABOUT ME
          </h2>
          <div className="space-y-6 md:space-y-8">
            <div
              className={`${
                isDark ? "bg-slate-800 text-white" : "bg-white text-black"
              } border-2 md:border-4 border-black p-4 md:p-8`}
              style={{ boxShadow: "4px 4px 0 0 black, 8px 8px 0 0 black" }}
            >
              <p className="text-base sm:text-lg md:text-2xl font-bold leading-relaxed">
                I turn coffee into code and ideas into reality! ☕💻 Currently
                crafting awesome stuff at Nutanix after spending 3+ amazing
                years at Katonic. My superpower? Building full-stack apps that
                actually work AND look good. Plus, I teach computers to think
                with AI/ML! 🧠✨
              </p>
            </div>

            <div
              className={`${
                isDark
                  ? "bg-slate-950 text-yellow-400"
                  : "bg-black text-yellow-400"
              } border-4 md:border-8 border-black p-6 md:p-10 transform -rotate-1`}
              style={{
                boxShadow: "6px 6px 0 0 #FF006E, 12px 12px 0 0 #FF006E",
              }}
            >
              <div className="text-4xl md:text-6xl mb-3 md:mb-4">💡</div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black italic leading-tight">
                "What I cannot create, I do not understand."
              </p>
              <p className="text-base md:text-xl font-bold mt-3 md:mt-4 text-cyan-400">
                — My Favourite Quote
              </p>
            </div>

            <div className="flex gap-3 md:gap-4 justify-center">
              <a
                href="https://github.com/galanteria01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-400 border-2 md:border-4 border-black p-3 md:p-4 hover:translate-y-1 transition-transform cursor-pointer"
                style={{
                  boxShadow: "2px 2px 0 0 black, 4px 4px 0 0 black",
                }}
              >
                <Github className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/shoury-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-400 border-2 md:border-4 border-black p-3 md:p-4 hover:translate-y-1 transition-transform cursor-pointer"
                style={{
                  boxShadow: "2px 2px 0 0 black, 4px 4px 0 0 black",
                }}
              >
                <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a
                href="mailto:shoury.sharma.work@gmail.com"
                className="bg-orange-400 border-2 md:border-4 border-black p-3 md:p-4 hover:translate-y-1 transition-transform cursor-pointer"
                style={{
                  boxShadow: "2px 2px 0 0 black, 4px 4px 0 0 black",
                }}
              >
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

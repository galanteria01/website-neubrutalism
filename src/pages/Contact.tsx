import { ChevronDown, Github, Mail, Star, Zap } from "lucide-react";
import React from "react";
import { quotes } from "../data/Constants";

type Props = {
  isDark: boolean;
  getPageStyle: (index: number) => React.CSSProperties;
};

const ContactPage = ({ isDark, getPageStyle }: Props) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={getPageStyle(4)}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <div
          className="bg-yellow-400 border-4 md:border-8 border-black p-6 md:p-12 transform -rotate-1"
          style={{ boxShadow: "8px 8px 0 0 black, 16px 16px 0 0 black" }}
        >
          <Star
            className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 animate-spin text-black"
            style={{ animationDuration: "3s" }}
          />
          <h2
            className={`text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6 ${
              isDark ? "text-black" : "text-black"
            }`}
            style={{ textShadow: "2px 2px 0 #000, 4px 4px 0 #000" }}
          >
            LET'S CREATE SOMETHING EPIC!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 md:mb-8 text-black">
            Got a wild idea? Need a coding wizard? Let's chat! 🎯
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-6 md:mb-8">
            <a
              href="mailto:shoury.sharma.work@gmail.com"
              className={`${
                isDark ? "bg-white text-black" : "bg-black text-white"
              } px-6 py-3 md:px-8 md:py-4 border-4 md:border-8 border-black font-black text-lg md:text-xl hover:translate-y-1 transition-transform flex items-center justify-center gap-2 md:gap-3`}
              style={{
                boxShadow: "4px 4px 0 0 #FF006E, 8px 8px 0 0 #FF006E",
              }}
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
              SEND EMAIL
            </a>
            <a
              href="https://github.com/galanteria01"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-400 px-6 py-3 md:px-8 md:py-4 border-4 md:border-8 border-black font-black text-lg md:text-xl hover:translate-y-1 transition-transform flex items-center justify-center gap-2 md:gap-3 text-black"
              style={{ boxShadow: "4px 4px 0 0 black, 8px 8px 0 0 black" }}
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
              VIEW GITHUB
            </a>
          </div>
          <div
            className="bg-cyan-300 border-2 md:border-4 border-black p-3 md:p-4 inline-block transform rotate-2"
            style={{ boxShadow: "3px 3px 0 0 black, 6px 6px 0 0 black" }}
          >
            <p className="font-black text-base md:text-xl italic text-black">
              "{quotes[1]}"
            </p>
          </div>
        </div>
        <div
          className="mt-6 md:mt-8 bg-pink-300 border-2 md:border-4 border-black p-3 md:p-4 inline-block"
          style={{ boxShadow: "3px 3px 0 0 black, 6px 6px 0 0 black" }}
        >
          <p className="font-bold text-sm md:text-base text-black">
            Made with 💖 & lots of ☕ | © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

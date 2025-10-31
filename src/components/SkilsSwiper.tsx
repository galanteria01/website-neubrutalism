import { useState } from "react";
import { Heart, X, ThumbsUp, ThumbsDown } from "lucide-react";

interface Skill {
  name: string;
  icon: any;
  items: string[];
  color: string;
  border: string;
}

interface SkillsSwiperProps {
  skills: Skill[];
  quotes: string[];
  isDark: boolean;
}

const SkillsSwiper = ({
  skills,
  isDark,
}: Omit<SkillsSwiperProps, "quotes">) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const handleSwipe = (direction: string) => {
    setSwipeDirection(direction);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
      setSwipeDirection(null);
      setDragOffset(0);
    }, 300);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart !== null) {
      setDragOffset(e.clientX - dragStart);
    }
  };

  const handleMouseUp = () => {
    if (Math.abs(dragOffset) > 100) {
      handleSwipe(dragOffset > 0 ? "right" : "left");
    } else {
      setDragOffset(0);
    }
    setDragStart(null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStart !== null) {
      setDragOffset(e.touches[0].clientX - dragStart);
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(dragOffset) > 100) {
      handleSwipe(dragOffset > 0 ? "right" : "left");
    } else {
      setDragOffset(0);
    }
    setDragStart(null);
  };

  const currentSkill = skills[currentIndex];
  const Icon = currentSkill.icon;

  const getCardStyle = () => {
    const baseRotation = dragOffset / 20;
    if (swipeDirection === "right") {
      return {
        transform: `translateX(150%) rotate(30deg)`,
        opacity: 0,
      };
    }
    if (swipeDirection === "left") {
      return {
        transform: `translateX(-150%) rotate(-30deg)`,
        opacity: 0,
      };
    }
    return {
      transform: `translateX(${dragOffset}px) rotate(${baseRotation}deg)`,
      opacity: 1,
    };
  };

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <div
          className={`${
            isDark ? "bg-white text-black" : "bg-black text-white"
          } border-4 md:border-8 border-black p-3 md:p-4 inline-block transform -rotate-2`}
          style={{ boxShadow: "4px 4px 0 0 #FFE500, 8px 8px 0 0 #FFE500" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black">
            MY SUPERPOWERS ⚡
          </h2>
        </div>
        <p
          className={`text-base md:text-xl font-bold mt-4 md:mt-6 ${
            isDark ? "text-slate-300" : "text-black"
          }`}
        >
          Swipe or click to explore!
        </p>
      </div>

      <div className="relative flex-1 flex items-center justify-center mb-8 md:mb-12 min-h-[300px] md:min-h-[400px]">
        {/* Background cards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {skills
            .slice(currentIndex + 1, currentIndex + 3)
            .map((skill, idx) => (
              <div
                key={skill.name}
                className={`absolute ${skill.color} border-4 md:border-8 border-black p-6 md:p-8 w-full max-w-md`}
                style={{
                  boxShadow: "6px 6px 0 0 black, 12px 12px 0 0 black",
                  transform: `scale(${0.95 - idx * 0.05}) translateY(${
                    idx * 20
                  }px)`,
                  opacity: 0.5 - idx * 0.2,
                  zIndex: -idx,
                }}
              />
            ))}
        </div>

        {/* Active card */}
        <div
          className={`${currentSkill.color} border-4 md:border-8 border-black p-6 md:p-10 w-full max-w-md cursor-grab active:cursor-grabbing relative z-10 transition-all duration-300`}
          style={{
            boxShadow: "6px 6px 0 0 black, 12px 12px 0 0 black",
            ...getCardStyle(),
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Like/Dislike indicators */}
          {dragOffset > 50 && (
            <div
              className="absolute -top-3 md:-top-4 -right-3 md:-right-4 bg-green-400 border-4 md:border-6 border-black p-3 md:p-5 transform rotate-12 z-20"
              style={{ boxShadow: "3px 3px 0 0 black, 6px 6px 0 0 black" }}
            >
              <Heart className="w-10 h-10 md:w-14 md:h-14 text-white fill-white" />
            </div>
          )}
          {dragOffset < -50 && (
            <div
              className="absolute -top-3 md:-top-4 -left-3 md:-left-4 bg-red-400 border-4 md:border-6 border-black p-3 md:p-5 transform -rotate-12 z-20"
              style={{ boxShadow: "3px 3px 0 0 black, 6px 6px 0 0 black" }}
            >
              <X className="w-10 h-10 md:w-14 md:h-14 text-white stroke-[3]" />
            </div>
          )}

          <div
            className={`${
              isDark ? "bg-black text-white" : "bg-white text-black"
            } p-4 md:p-6 mb-6 md:mb-8 inline-block border-2 md:border-4 border-black`}
            style={{
              boxShadow:
                "3px 3px 0 0 rgba(0,0,0,0.3), 6px 6px 0 0 rgba(0,0,0,0.3)",
            }}
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <h3
            className={`text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 ${
              isDark ? "text-black" : "text-black"
            }`}
          >
            {currentSkill.name}
          </h3>
          <div className="space-y-3 md:space-y-4">
            {currentSkill.items.map((item) => (
              <div
                key={item}
                className={`${
                  isDark ? "bg-slate-800 text-white" : "bg-white text-black"
                } border-2 md:border-4 border-black px-4 py-3 md:px-6 md:py-4`}
                style={{ boxShadow: "2px 2px 0 0 black, 4px 4px 0 0 black" }}
              >
                <span className="font-bold text-base md:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      {/* <div className="flex justify-center items-center gap-4 md:gap-8">
        <button
          onClick={() => handleSwipe("left")}
          className="bg-red-400 border-4 md:border-6 border-black p-4 md:p-6 hover:scale-110 transition-transform"
          style={{ boxShadow: "3px 3px 0 0 black, 6px 6px 0 0 black" }}
        >
          <ThumbsDown className="w-8 h-8 md:w-10 md:h-10" />
        </button>
        <div
          className={`flex items-center justify-center ${
            isDark ? "bg-slate-800 text-white" : "bg-white text-black"
          } border-2 md:border-4 border-black px-6 py-3 md:px-10 md:py-4`}
          style={{ boxShadow: "2px 2px 0 0 black, 4px 4px 0 0 black" }}
        >
          <span className="font-black text-xl md:text-2xl">
            {currentIndex + 1} / {skills.length}
          </span>
        </div>
        <button
          onClick={() => handleSwipe("right")}
          className="bg-green-400 border-4 md:border-6 border-black p-4 md:p-6 hover:scale-110 transition-transform"
          style={{ boxShadow: "3px 3px 0 0 black, 6px 6px 0 0 black" }}
        >
          <ThumbsUp className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div> */}
    </div>
  );
};

export default SkillsSwiper;

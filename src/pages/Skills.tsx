import React from "react";
import SkillsSwiper from "../components/SkilsSwiper";
import { skills } from "../data/Constants";

type Props = {
  isDark: boolean;
  getPageStyle: (index: number) => React.CSSProperties;
};

const SkillsPage = ({ isDark, getPageStyle }: Props) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={getPageStyle(3)}
    >
      <SkillsSwiper skills={skills} isDark={isDark} />
    </div>
  );
};

export default SkillsPage;

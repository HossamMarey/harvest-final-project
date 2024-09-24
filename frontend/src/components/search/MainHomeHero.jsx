import React from "react";
import bgImg from "@/assets/images/hero-bg.jpg";
import MainSearch from "./MainSearch";

const MainHomeHero = () => {
  return (
    <div
      className="min-h-[90vh]  bg-cover bg-center bg-no-repeat  "
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="w-full h-full min-h-[inherit]  bg-black/40 flex items-end justify-center">
        <MainSearch />
      </div>
    </div>
  );
};

export default MainHomeHero;

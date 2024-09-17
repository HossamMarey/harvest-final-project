import React from "react";

import logoImg from "@/assets/images/logo.png";
// footer 56
const MainLogo = ({ size = 43 }) => {
  return (
    <div>
      <img
        src={logoImg}
        alt="logo"
        style={{
          height: `${size}px`,
        }}
      />
    </div>
  );
};

export default MainLogo;

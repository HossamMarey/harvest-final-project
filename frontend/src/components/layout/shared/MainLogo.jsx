import React from "react";

import logoImg from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
// footer 56
const MainLogo = ({ size = 43 }) => {
  return (
    <Link to="/">
      <img
        src={logoImg}
        alt="logo"
        style={{
          height: `${size}px`,
        }}
      />
    </Link>
  );
};

export default MainLogo;

import React from "react";
import MainLogo from "./shared/MainLogo";
import { Button } from "@/components/ui/button";
import MenuDropDown from "./shared/MenuDropDown";
import NavMenu from "./shared/NavMenu";
const MainHeader = () => {
  return (
    <header className="bg-foreground   py-3">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MenuDropDown />
          <MainLogo />
        </div>

        <div className="flex items-center gap-3">
          <NavMenu className="hidden lg:block text-background" />
          <Button className="hidden lg:block" variant="outline">
            {" "}
            Become A Host{" "}
          </Button>
          <Button variant="outline"> Sign In </Button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

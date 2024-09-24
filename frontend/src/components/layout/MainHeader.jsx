import React, { useState } from "react";
import MainLogo from "./shared/MainLogo";
import { Button } from "@/components/ui/button";
import MenuDropDown from "./shared/MenuDropDown";
import NavMenu from "./shared/NavMenu";
import { LoginForm } from "../auth";
import { useGetProfileQuery } from "@/services/apis/auth";
const MainHeader = ({ isSticky = false }) => {
  const [loginOpen, setLoginOpen] = useState(false);

  const { data, isLoading, refetch } = useGetProfileQuery();

  return (
    <header
      className={` ${
        isSticky ? " fixed top-0   " : "bg-foreground  "
      }   py-3 z-20 w-full`}
    >
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

          {isLoading ? (
            <div> Loading ... </div>
          ) : (
            <>
              {data?.data ? (
                <div> {data?.data?.email} </div>
              ) : (
                <LoginForm open={loginOpen} setOpen={setLoginOpen}>
                  <Button variant="outline" onClick={() => setLoginOpen(true)}>
                    {" "}
                    Sign In{" "}
                  </Button>
                </LoginForm>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

import { MainFooter, MainHeader } from "@/components/layout";
import { Outlet, useNavigation, useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const pathname = useLocation().pathname;

  return (
    <>
      <MainHeader isSticky={pathname === "/"} />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
};

export default MainLayout;

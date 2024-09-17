import { MainFooter, MainHeader } from "@/components/layout";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
};

export default MainLayout;

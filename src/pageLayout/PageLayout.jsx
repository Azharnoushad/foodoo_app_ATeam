import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

const PageLayout = ({ setShowSideNav, showSideNav }) => {
  return (
    <div className="page_layout">
      <MainNav setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
      <Outlet />
    </div>
  );
};

export default PageLayout;

import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

const PageLayout = () => {
  return (
    <div className="page_layout">
      <MainNav />
      <Outlet />
    </div>
  );
};

export default PageLayout;

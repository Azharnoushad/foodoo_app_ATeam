import Nav from "./Nav";
import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";

const SideBar = () => {
  return (
    <div className="sidebar_wrapper">
      <div className="logo">
        <img src="./logo/logo.png" alt="foodooLogo" className="logo_img" />
      </div>

      <Profile name="Kristin Watson" description="Chef de partie"/>
      <Nav />

      <SidebarFooter />
    </div>
  );
};

export default SideBar;

import Nav from "./Nav";
import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";

const SideBar = ({ setShowSideNav, showSideNav }) => {
  const handleCloseMenu = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <div className="sidebar_wrapper">
      <div className="logo">
        <img src="./logo/logo.png" alt="foodooLogo" className="logo_img" />
      </div>

      <Profile name="Kristin Watson" description="Chef de partie" />
      <Nav />

      <SidebarFooter />
      <div className="close_menu" onClick={handleCloseMenu}>
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default SideBar;

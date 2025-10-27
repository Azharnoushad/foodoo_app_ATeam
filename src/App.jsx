import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import PageLayout from "./pageLayout/PageLayout";
import {
  Community,
  Courses,
  Favorites,
  Recipes,
} from "./pageLayout/pages.tsx/index";
import CustomCursor from "./components/CustomCursor ";
import { useState } from "react";

const App = () => {
  const [showSideNav, setShowSideNav] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowSideNav(false);
      } else {
        setShowSideNav(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="app_wrapper">
      <CustomCursor />
      {showSideNav && (
        <SideBar setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
      )}

      <Routes>
        <Route
          element={
            <PageLayout
              setShowSideNav={setShowSideNav}
              showSideNav={showSideNav}
            />
          }
        >
          <Route index element={<Recipes />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

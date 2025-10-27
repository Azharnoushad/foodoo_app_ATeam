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

const App = () => {
  return (
    <div className="app_wrapper">
      <CustomCursor/>
      <SideBar />

      <Routes>
        <Route element={<PageLayout />}>
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

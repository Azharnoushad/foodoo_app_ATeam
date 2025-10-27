import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import PageLayout from "./pageLayout/PageLayout";
import {
  Community,
  Courses,
  Favorites,
  Recipes,
} from "./pageLayout/pages.tsx/index";

const App = () => {
  return (
    <div className="app_wrapper">
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

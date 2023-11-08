import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/main";
import About from "./components/pages/about";
import Programs from "./components/pages/programs";
import NavBar from "./components/ui/navBar";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Main />} />
        <Route path={"about"} element={<About />} />
        <Route path="programs" element={<Programs />} />
      </Routes>
    </>
  );
};

export default App;

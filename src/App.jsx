import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components for different CTs scans
import Userpage from "./components/userpage";

import { MainPage } from "./components/mainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/brain" element={<Userpage />}></Route>

        <Route path="/main" element={<MainPage></MainPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

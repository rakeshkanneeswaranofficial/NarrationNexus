import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components for different CTs scans
import BrainTumor from "./components/brainTumor";

import AlzimerDetection from "./components/Alzheimer";

import { MainPage } from "./components/mainPage";

const api_key_robo = "MDUmhShkcQTpnD7H6ZtL";

// URLs for different detection services
const roboURLBrain = "https://detect.roboflow.com/gojo/1";
const alzimerURL =
  "https://detect.roboflow.com/alzheimer-disease-detection-yolov5/1";

// URL for ngrok for local testing
const ngrokURL = "https://xth9xnbt-5000.inc1.devtunnels.ms/";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route
          path="/brain"
          element={
            <BrainTumor
              api_key={api_key_robo}
              roboURL={roboURLBrain}
              ngrokURL={ngrokURL}
            />
          }
        ></Route>

    
        <Route path="/main" element={<MainPage></MainPage>}></Route>

        <Route
          path="/alz"
          element={
            <AlzimerDetection
              api_key={api_key_robo}
              roboURL={alzimerURL}
              ngrokURL={ngrokURL}
            />
          }
        ></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;

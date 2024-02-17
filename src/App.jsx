import React, { useState, useEffect } from "react";
import { Appbar } from "./components/topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BottomWarning } from "./components/bottomWarning";



// Components for different CTs scans
import BrainTumor from "./components/brainTumor";
import ACLdetection from "./components/acl";
import AlzimerDetection from "./components/Alzheimer";
import KindeyTumor from "./components/kidenyStone";
import Classifier from "./components/classifier";

const api_key = "MDUmhShkcQTpnD7H6ZtL";

// URLs for different detection services
const roboURLBrain = "https://detect.roboflow.com/gojo/1";
const alzimerURL = "https://detect.roboflow.com/alzheimer-disease-detection-yolov5/1";
const roboURLACL = "https://detect.roboflow.com/classification-of-acl-injuriesv-v9dlc/6";
const KindeyTumorURL = "https://detect.roboflow.com/kidney-tumor-detection-golwd/2";
const classifierURL = "https://detect.roboflow.com/main-x9qfk/1"
const classifierAPI = "w2BkwXK1FTb2Z8DcWdkp"

// URL for ngrok for local testing
const ngrokURL = "https://4277-103-4-222-252.ngrok-free.app"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Appbar />
      </div>
      <div className="flex  bg-slate-950  border-b-black pb-2 ">

        {/* <BottomWarning buttonText={"Anterior Cruciate Ligament"} to={"/acl"}></BottomWarning> */}
        <BottomWarning buttonText={"Brain Tumor"} to={"/"}></BottomWarning>
        <BottomWarning buttonText={"Alzheimer"} to={"/alz"}></BottomWarning>
        {/* <BottomWarning buttonText={"Kidney Tumor"} to={"/kidenyStone"}></BottomWarning> */}







      </div>



      <Routes>

        <Route
          path="/"
          element={
            <BrainTumor
              api_key={api_key}
              roboURL={roboURLBrain}
              ngrokURL={ngrokURL}
            />
          }
        ></Route>



        <Route
          path="/acl"
          element={
            <ACLdetection
              api_key={api_key}
              roboURL={roboURLACL}
              ngrokURL={ngrokURL}
            />
          }
        ></Route>

        <Route
          path="/alz"
          element={
            <AlzimerDetection
              api_key={api_key}
              roboURL={alzimerURL}
              ngrokURL={ngrokURL}
            />
          }
        ></Route>



        <Route
          path="/kidenyStone"
          element={
            <KindeyTumor
              api_key={api_key}
              roboURL={KindeyTumorURL}
              ngrokURL={ngrokURL}
            />
          }
        ></Route>


      </Routes>
    </BrowserRouter>
  );
};

export default App;

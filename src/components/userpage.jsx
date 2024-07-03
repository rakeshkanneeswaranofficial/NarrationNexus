import axios from "axios";
import React, { useState, useEffect } from "react";
import { Appbar } from "./topbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Userpage() {
  //defening the states
  const [userSelectedFile, setUserSelectedFile] = useState(null);
  const [imageArray, setImageArray] = useState([]);
  const [llavaResponse, setLavaResponse] = useState([])
  const [leftImage, setLeftImage] = useState(null);
  const [inference, setInference] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );
  const [roboflowResponse, setRoboflowResponse] = useState(null);

  function onFileChange(event) {
    setUserSelectedFile(event.target.files);
    console.log(event.target.files);
    // Reset coordinates when a new file is selected
  }

  async function checkAllnarration(){
    if(!llavaResponse){
      toast.error("Please process the files before processing ");
      return;
    }

    else {
      console.log(llavaResponse);
      setInference(llavaResponse);
    }
  }


 async function checkarrrat() {
  if (!imageArray){
    toast.error("Please upload a files before processing ");
    return;
  }
  else {
    for (let index = 0; index < imageArray.length; index++) {
     
      toast.info("sending the image to server ");
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:5000/process_image",
        data: {
          image_base64: imageArray[index],
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLeftImage(imageArray[index])
      console.log(response.data.response);
      setInference(response.data.response);
      setLavaResponse((prevArray) => [...prevArray, response.data.response])

      if (response.data) {
        toast.success("Response from Model Received ");
        console.log(response.data);
        setRoboflowResponse(JSON.stringify(response.data));
      } else {
        toast.error("something went wrong with the model");
      }
    }

  }
    
  }

  async function onFileUpload() {
    if (!userSelectedFile) {
      toast.error("Select a file before uploading.");
      return;
    }

    setInference(null);
    for (let index = 0; index < userSelectedFile.length; index++) {
      console.log("File upload started");
      toast.success("file uploaded successfully");
      toast.info(" Click Process the processing button");

      const reader = new FileReader();

      // Add an event listener to handle the completion of the read operation
      reader.onload = async function () {
        let base64Data = reader.result;
        base64Data = base64Data.replace(/^data:image\/[a-z]+;base64,/, "");
        setLeftImage(base64Data);
        console.log(base64Data);
        setImageArray((prevArray) => [...prevArray, base64Data]);
      };

      // Read the file as a data URL
      reader.readAsDataURL(userSelectedFile[index]);
    }
    console.log("images stored as array are ");
    console.log(imageArray);
  }

  return (
    <div className="flex flex-col h-full  ">
      <div>
        <Appbar></Appbar>
      </div>

      <div className="flex flex-row justify-between items-stretch py-10 px-10 space-x-20 bg- ">
        <div className="w-1/2   flex flex-col text-center justify-center  space-y-3  ">
          <div className=" rounded-lg border-black border-4 text-xl bold font-mono font-bold bg-slate-100">
            <h1>Your image </h1>
          </div>
          <div className="bg-slate-100 flex justify-center items-center py-5 h-full border-black border-4 rounded-lg">
            {!leftImage ? (
              <img className=" w-96 h-96 " src="src/assets/images.png" />
            ) : (
              <img
                className="mt-8 w-min h-96"
                src={`data:image/jpeg;base64,${leftImage}`}
                alt="Uploaded"
              />
            )}
          </div>
        </div>

        <div className="w-1/2   flex flex-col text-center justify-center  space-y-3  ">
          <div className=" rounded-lg border-black border-4 font-mono font-bold text-xl bg-slate-100">
            <h1>generated narration</h1>
          </div>
          <div className="bg-slate- flex justify-center items-center py-5 h-full rounded-lg border-black border-4 font-mono bg-slate-100">
            {inference}
          </div>
        </div>
      </div>

      <div className="flex flex-row space-y-4 justify-center">
        <input
          className="bg-slate-950 text-white w-30 px-4 py-2 rounded mx-4"
          type="file"
          onChange={onFileChange}
          multiple
        />

        <button
          className="bg-slate-950 text-white w-30 px-4 py-2 rounded mx-4"
          onClick={onFileUpload}
        >
          Upload Image
        </button>

        <button
          className="bg-slate-950 text-white w-30 px-4 py-2 rounded mx-4"
          onClick={checkarrrat}
        >
          Process Image
        </button>

        <button
          className="bg-slate-950 text-white w-30 px-4 py-2 rounded mx-4"
          onClick={checkAllnarration}
        >
          check all narration
        </button>
      </div>
    </div>
  );
}

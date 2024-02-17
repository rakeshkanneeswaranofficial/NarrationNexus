import axios from "axios";
import React, { useState, useEffect } from "react";

function BrainTumor({ api_key, roboURL, ngrokURL }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [roboflowResponse, setRoboflowResponse] = useState(null);
  const [inference, setInference] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [responseImage, setResponseImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (
      coordinates.x !== 0 ||
      coordinates.y !== 0 ||
      coordinates.width !== 0 ||
      coordinates.height !== 0
    ) {
      setLoading(true); // Set loading to true

      axios({
        method: "POST",
        url: ngrokURL,
        data: {
          base64: imageUrl,
          disease: "knee ACL detection",
          predictions: roboflowResponse,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.data);
          setInference(response.data.inference);
          setResponseImage(response.data.base64);
          setLoading(false); // Reset loading when response is received
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false); // Reset loading if there's an error
        });
    }
  }, [roboflowResponse, imageUrl, coordinates]);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    // Reset coordinates when a new file is selected
    setCoordinates({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });
  };

  const renderInference = () => {
    if (inference) {
      // Replace asterisks with commas and omit new lines for full stops
      const formattedInference = inference
        .replace(/\*/g, ',') // Replace asterisks with commas

  
      // Split the formatted inference at full stops and map each part to a paragraph element
      return formattedInference.split('.').map((sentence, index) => (
        <React.Fragment key={index}>
          <p>{sentence.trim()}</p>
          <br />
        </React.Fragment>
      ));
    }
    return null;
  };

  const onFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file before upload");
      return;
    }

    setLoading(true); // Set loading state when uploading file

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = async () => {
      let base64Data = reader.result;
      base64Data = base64Data.replace(/^data:image\/[a-z]+;base64,/, "");

      setImageUrl(base64Data);
      setInference(null);

      await axios({
        method: "POST",
        url: roboURL,
        params: {
          api_key: api_key,
        },
        data: base64Data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(function (response) {
          setRoboflowResponse(JSON.stringify(response.data));
          console.log(response.data);
          setCoordinates({
            x: response.data.predictions[0]["x"],
            y: response.data.predictions[0]["y"],
            width: response.data.predictions[0]["width"],
            height: response.data.predictions[0]["height"],
          });
          setResponseImage(response.data.base64);
          setLoading(false); // Reset loading state when image is loaded
        })
        .catch(function (error) {
          console.log(error.message);
          setLoading(false); // Reset loading state if there's an error
        });
    };
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <div>File Details:</div>

          <p>File Type: {selectedFile.type}</p>
          <p>
            Last Modified: {selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div className="font-bold">
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div className="bg-blue-200 h-screen p-10 text-center">
      <div className="container mx-auto py-16 relative h-full">
        <div className="text-start flex flex-row justify-between">
          <div>
            {imageUrl && (
              <img
                className="mt-8 w-min h-96"
                src={`data:image/jpeg;base64,${
                  !responseImage ? imageUrl : responseImage
                }`}
                alt="Uploaded"
              />
            )}
            {fileData()}
          </div>

          <div className="w-1/2 text-xl rounded-lg overflow-y-scroll shadow-2xlh-1/2 -translate-y-6 ">
            <div className="bg-white bg-opacity-25 border font-bold border-black rounded-lg p-2 mb-6">
              Please note the following inference
            </div>
            <div className="2bg-white bg-opacity-25 border min-h-96 border-black rounded-lg p-2">
              {!responseImage && loading && (
                <div className="w-full mt-4 animate-pulse h-96 bg-slate-400 rounded-lg"></div>
              )}
               {renderInference()}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 absolute bottom-20 left-0 w-full">
          <input
            className="rounded-sm ml-auto"
            type="file"
            onChange={onFileChange}
          />
          <button
            className="bg-blue-500 text-white w-30 px-4 py-2 rounded"
            onClick={onFileUpload}
          >
            Upload!
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrainTumor;

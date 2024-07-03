import { BottomWarning } from "./bottomWarning";
export const Appbar = () => {
  return (
   <div  >
    <div className="shadow h-16     bg-black text-white flex justify-center border border-b-0 border-black items-center px-4">
      <div className="font-bold flex ">
        <h1 className="font-mono text-4xl px-3">GOJO.AI</h1>
        <h2 className="font-mono text-2xl flex align-bottom items-end   ">
        Generating Story using images with Artificial Intelligence and Computer Vision
        </h2>
      </div>

      <div className="flex items-center">
        <div className="mr-4 flex items-center">
        </div>
      </div>
    </div>
    <div className="flex  bg-black  border-b-black pb-2 justify-center">
        {/* <BottomWarning buttonText={"Anterior Cruciate Ligament"} to={"/acl"}></BottomWarning> */}
       
        {/* <BottomWarning buttonText={"Kidney Tumor"} to={"/kidenyStone"}></BottomWarning> */}
        <BottomWarning  buttonText={"Main Page"} to={"/main"}>   </BottomWarning>
      </div>

   </div>
    
  );
};

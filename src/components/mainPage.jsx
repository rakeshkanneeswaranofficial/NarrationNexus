import { AnimatedDescription } from "./animationString";
import { BottomWarning } from "./bottomWarning";
BottomWarning;

export function MainPage() {
  return (
    <div className="bg-black h-screen text-white font-mono">
      <div className=" flex flex-col">
        <div>
          <h1 className="text-yellow-300 text-center font-mono font-bold  py-10 text-8xl">
            Introducing RadixAI
          </h1>
        </div>

        <div className="h-40">
          <AnimatedDescription></AnimatedDescription>
        </div>

        <div className="text-black px-10 py-10 text-center  ">
          <h1 className="text-yellow-300 inline-block w-40 h-10 text-2xl rounded-lg  ">
            Get started
          </h1>

          <div className="flex justify-center py-5">
            <BottomWarning
              buttonText={"Detect Brain Tumor"}
              to={"/brain"}
            ></BottomWarning>
            <BottomWarning
              buttonText={"Detect Alzheimer"}
              to={"/alz"}
            ></BottomWarning>
          </div>
        </div>

        <div className="flex justify-center text-xl font-bold  ">
        <ul className="space-y-5">
            <li>
              Developed an advanced machine learning model trained on a dataset
              of over 10,000 medical images.
            </li>
            <li>
              Achieved an outstanding accuracy rate of 98% in detecting brain
              tumors and Alzheimer's disease.
            </li>
            <li>
              Pioneered the development of a cutting-edge segmentation
              algorithm for precise and efficient medical image analysis.
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

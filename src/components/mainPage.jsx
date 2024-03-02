import { AnimatedDescription } from "./animationString";
import { BottomWarning } from "./bottomWarning";
BottomWarning;

export function MainPage() {
  return (
    <div className=" h-screen  bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 ">
      <div className=" flex flex-col">
        <div>
          <h1 className="text-black text-center font-mono font-bold  py-10 text-8xl ">
            Introducing GOJO.AI
          </h1>
        </div>

        <div className="h-40">
          <AnimatedDescription></AnimatedDescription>
        </div>

        <div className="text-black px-10 py-10 text-center  ">
          <h1 className="text-black  inline-block w-40 h-10 text-2xl rounded-lg  ">
            Get started
          </h1>

          <div className="flex justify-center py-5">
            <BottomWarning
              buttonText={"Start a story"}
              to={"/brain"}
            ></BottomWarning>
            
          </div>
        </div>

        <div >
        <h1 className="text-black  text-center font-mono font-bold  py-10 text-4xl ">
        Powered by Ollama LLaVA computer vision model  and davinci with AWS Content delivery network
        </h1>
        </div>
      </div>
    </div>
  );
}

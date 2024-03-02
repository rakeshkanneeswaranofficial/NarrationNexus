import { TypeAnimation } from "react-type-animation";

export function AnimatedDescription() {
  return (
    <div className="text-black px-10 py-3  font-bold text-center">
   <TypeAnimation
  sequence={[
    "Transform your images into engaging narratives with the Dynamic Image-Based Story Generator, where cutting-edge AI meets the art of storytelling.",
    1000, // wait 1s before replacing the first sentence
    "Our intuitive application breathes life into your photos by crafting custom tales and turning them into a cinematic experience, complete with professional narration.",
    1000,
    "Perfect for creators, marketers, and anyone with a story to tell, this tool elevates your images from moments captured to stories shared.",
    1000,
    "Step into a world where your memories become immersive tales, and let your visuals do the talking.",
  ]}
  wrapper="span"
  speed={50}
  style={{ fontSize: "2em", display: "inline-block" }}
  repeat={Infinity}
/>

  </div>
  );
}

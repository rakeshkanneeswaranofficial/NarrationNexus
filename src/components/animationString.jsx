import { TypeAnimation } from "react-type-animation";

export function AnimatedDescription() {
  return (
    <div className="text-white px-10 py-3 text-center">
    <TypeAnimation
      sequence={[
        "Welcome to RadixAI, where cutting-edge technology meets healthcare excellence.",
        1000, // wait 1s before replacing the first sentence
        "With YOLOv8-based ML, Flask, OpenCV, and advanced LLM, we provide precise anomaly detection and contextual analysis.",
        1000,
        "Deployed on Amazon Web Services with high speed Content Delivery Network, RadixAI ensures scalable, reliable performance.",
        1000,
        "Interact effortlessly via React UI for comprehensive diagnostic insights, empowering clinicians for superior patient care.",
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  </div>
  );
}

import { Link } from "react-router-dom";

export function BottomWarning({ buttonText, to }) {
  return (
    <div className="py-2 flex justify-center px-6   ">
      <Link
        to={to}
        className="inline-block shadow-2xl shadow-black bg-slate-950 text-white px-4 py-2 rounded  hover:bg-blue-600 border  border-black   shadow-white shadow-md"   
      // Adding border style to the Link component
      >
        {buttonText}
      </Link>
    </div>
  );
}

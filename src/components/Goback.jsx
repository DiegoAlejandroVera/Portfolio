import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Goback = ({ scrolled }) => {
  function goTop() {
    document.body.scrollIntoView();
  }

  return (
    <div className="fixed bottom-0 w-full duration-200 flex p-10 z-[10]">
      <button
        onClick={goTop}
        className={`ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer ${
          scrolled
            ? "opacity-full pointer-events-auto"
            : "pointer-events-none opacity-0"
        }`}
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default Goback;

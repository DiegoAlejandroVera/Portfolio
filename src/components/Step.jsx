import React from "react";

const Step = ({ step, children }) => {
  return (
    <a
      href={step.href}
      target="_blank"
      className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"
    >
      <div className="bg-slate-950 grid place-items-center px-4 py-2 rounded-lg text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
        {step.icon}
      </div>
      <h3 className="font-medium text-xl sm:text-2xl md:text-3xl">
        {step.name}
      </h3>
      {children}
      <div className="flex flex-1 justify-between gap-4 items-center">
        <div className="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative px-1 py-1 after:absolute after:bg-white after:w-full after:h-full after:right-full after:top-0 after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
          <p className="relative z-4">Go To</p>
        </div>
      </div>
    </a>
  );
};

export default Step;

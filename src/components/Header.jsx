import React from "react";

const Header = ({ scrolled }) => {
  const tabs = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "About Me",
      link: "#about",
    },
    {
      name: "Contact Me",
      link: "#contact",
    },
  ];

  return (
    <header
      className={`sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid py-6 bg-transparent border-transparent text-white ${
        scrolled
          ? "py-4 bg-slate-900 border-violet-950"
          : "py-6 bg-transparent border-transparent"
      }`}
    >
      <h1 className="font-medium text-xl">
        <b className="font-bold poppins ">Diego</b> Vera
      </h1>
      <div className="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {tabs &&
          tabs.map((tab, index) => (
            <a
              key={index}
              href={tab.link}
              className="duration-200 hover:text-violet-400"
            >
              <p>{tab.name}</p>
            </a>
          ))}
      </div>
      <a
        href="mailto:diegoverat1796@outlook.com"
        target="_blank"
        className="relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
      >
        <div className="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
        <h4 className="relative z-9">Get in touch</h4>
      </a>
    </header>
  );
};

export default Header;

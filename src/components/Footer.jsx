import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative py-20 sm:py-32 bg-black bg-opacity-75 border-t border-violet-200 flex flex-col gap-4 sm:gap-8 justify-center items-center"
    >
      <p className="px-4 py-2 bg-white text-slate-950 font-medium">
        Connect with me &darr;
      </p>
      <div className="flex flex-col gap-8 justify-center items-center">
        <p className="flex flex-col justify-center items-center text-violet-200">
          <b className="text-violet-700 text-xl">Email</b>{" "}
          diegoverat1796@outlook.com
        </p>
        <p className="flex flex-col justify-center items-center text-white">
          <b className="text-violet-700 text-xl">Github</b>
          <a
            href="https://github.com/DiegoAlejandroVera"
            target="_blank"
            className="text-violet-200 flex items-center gap-2"
          >
            Diego Vera <FaGithub size={25} />
          </a>
        </p>
        <p className="flex flex-col justify-center items-center">
          <b className="text-violet-700 text-xl">Linkedin</b>
          <a
            href="https://www.linkedin.com/in/diego-alejandro-vera-trujillo/"
            target="_blank"
            className="text-violet-200 flex gap-2 items-center"
          >
            Diego Alejandro Vera Trujillo
            <AiOutlineLinkedin size={30} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

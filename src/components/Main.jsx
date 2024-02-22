import React from "react";
import profileImage from "../assets/portada.png";
import Step from "./Step";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShuffle,
  faUtensilSpoon,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const steps = [
    {
      name: "Get That Home API",
      icon: <FontAwesomeIcon icon={faShuffle} />,
      href: "",
    },
    {
      name: "Eatable",
      icon: <FontAwesomeIcon icon={faUtensilSpoon} />,
      href: "",
    },
    {
      name: "Notes API",
      icon: <FontAwesomeIcon icon={faDiagramProject} />,
      href: "",
    },
  ];

  const benefits = [
    {
      name: "a self taught developer",
      description:
        "I taught myself to code using free online resources and absolutly fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript Frameworks like React, backend services and much more.",
    },
    {
      name: "an excellent communicator",
      description:
        "Communication is key and it's a paramount value of mine. I belive in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any teams",
    },
  ];
  return (
    <main className="relative text-white flex flex-col flex-1 p-4">
      <section
        id="intro-page"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
      >
        <div className="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
          <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
            Hi! I'm <span className="poppins text-violet-400">Diego</span> Vera{" "}
            <br />
            Full Stack
            <span className="poppins text-violet-400">Developer</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            My <span className="poppins text-violet-400">favorite tech</span>{" "}
            includes JavaScript (React), TailwindCSS, Ruby on Rails, PostgreSQL
            and I'm currently learning TypeScript and GoLang!
          </p>
          <a
            href="mailto:diegoverat1796@outlook.com"
            target="_blank"
            className="blueShadow mx-auto lg:mr-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
          >
            <div className="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
            <h4 className="relative z-9">Get in touch &rarr;</h4>
          </a>
        </div>
        <div className="relative shadow-2xl grid place-items-center">
          <img
            src={profileImage}
            alt="portada"
            className="object-cover z-[2] max-h-50vh"
          />
        </div>
      </section>

      <section id="projects" className="py-20 lg:py-32 flex flex-col gap-24">
        <div className="flex flex-col gap-2 text-center">
          <h6 className="text-lg sm:text-xl md:text-2xl">
            A few of my creative endeavors.
          </h6>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Curious to <span className="poppins text-violet-400">see</span> my
            work?
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          <Step step={steps[0]}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum modi
              perferendis tempore ratione, vel soluta.
              <strong className="text-violet-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                eos!
              </strong>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              voluptas!
            </p>
          </Step>
          <Step step={steps[1]}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum modi
              perferendis tempore ratione, vel soluta.
              <strong className="text-violet-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                eos!
              </strong>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              voluptas!
            </p>
          </Step>
          <Step step={steps[2]}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum modi
              perferendis tempore ratione, vel soluta.
              <strong className="text-violet-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                eos!
              </strong>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              voluptas!
            </p>
          </Step>
        </div>
      </section>

      <section
        id="about"
        className="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
      >
        <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
          <h6 className="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            A bit <span className="poppins text-violet-400">about</span> me.
          </h3>
        </div>
        <p className="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
          I am . . .
        </p>
        <div className="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
          {benefits &&
            benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 sm:gap-8">
                <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                  0{index + 1}
                </p>
                <div className="flex flex-col gap-6 sm:gap-8">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl italic">
                    {benefit.name}
                  </h3>
                  <p className="italic">{benefit.description}</p>
                </div>
              </div>
            ))}
        </div>

        <h5 className="text-2xl sm:text-3xl font-semibold text-center poppins">
          The <span className="text-violet-400 poppins">complete</span> package
        </h5>

        <div className="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
          <table className="bg-white text-slate-700 rounded text-center">
            <thead className="border-b border-solid border-slate-200">
              <tr>
                <th></th>
                <th className="whitespace-nowrap p-2 px-4">Candidate #1</th>
                <th className="whitespace-nowrap p-2 px-4">Candidate #3</th>
                <th className="whitespace-nowrap p-2 px-4">Candidate #4</th>
                <th className="whitespace-nowrap bg-violet-700 text-white p-4 px-8">
                  Me
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-solid border-slate-200">
                <td className="whitespace-nowrap border-r border-solid border-slate-200 pl-4 pr-8 py-4 font-semibold text-sm">
                  Critical Thought
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
                <td className="text-slate-500">
                  {<FontAwesomeIcon icon={faXmark} />}
                </td>
                <td className="text-slate-500">
                  {<FontAwesomeIcon icon={faXmark} />}
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
              </tr>
              <tr className="border-b border-solid border-slate-200">
                <td className="whitespace-nowrap border-r border-solid border-slate-200 pl-4 pr-8 py-4 font-semibold text-sm">
                  Interpersonal Skills
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
                <td className="text-slate-500">
                  {<FontAwesomeIcon icon={faXmark} />}
                </td>
                <td className="text-slate-500">
                  {<FontAwesomeIcon icon={faXmark} />}
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
              </tr>
              <tr className="border-b border-solid border-slate-200">
                <td className="whitespace-nowrap border-r border-solid border-slate-200 pl-4 pr-8 py-4 font-semibold text-sm">
                  Active Learner
                </td>
                <td className="text-slate-500">
                  {<FontAwesomeIcon icon={faXmark} />}
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
              </tr>
              <tr className="border-b border-solid border-slate-200">
                <td className="whitespace-nowrap border-r border-solid border-slate-200 pl-4 pr-8 py-4 font-semibold text-sm">
                  Programming Skills
                </td>
                <td className="text-slate-500">
                  {<FontAwesomeIcon icon={faXmark} />}
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
                <td className="text-slate-500">
                  {<FontAwesomeIcon icon={faXmark} />}
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
              </tr>
              <tr className="border-b border-solid border-slate-200">
                <td className="whitespace-nowrap border-r border-solid border-slate-200 pl-4 pr-8 py-4 font-semibold text-sm">
                  Dedication
                </td>
                <td className="text-slate-500">
                  {<FontAwesomeIcon icon={faXmark} />}
                </td>
                <td className="text-slate-500">
                  {<FontAwesomeIcon icon={faXmark} />}
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
                <td className="text-green-500">
                  {<FontAwesomeIcon icon={faCheck} />}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mx-auto -mt-12 italic sm:hidden opacity-50">
          <p>Scroll to see more &rarr;</p>
        </div>

        <p className="mx-auto text-lg sm:text-2xl">
          So why not{" "}
          <span className="text-violet-700 font-semibold">invest?</span>
        </p>
      </section>
    </main>
  );
};

export default Main;

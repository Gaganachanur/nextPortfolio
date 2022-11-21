import React, { useState } from "react";
import { Fragment } from "react";
import Link from "next/link";
import { FcHome } from "react-icons/fc";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillFilePdf,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { WiAlien } from "react-icons/wi";
import Image from "next/image";

import { motion, useScroll } from "framer-motion";
import portfolio from "../assets/dev7.png";
import dangerousdev from "../assets/dangerousdev1.png";
import TechnologyUsed from "./technologyused";

export default function Portfolio() {
  const linkedinUrl = "https://www.linkedin.com/in/gagan-r-achanur-8804181a3/";
  const githubUrl = "https://github.com/Gaganachanur";
  const Resume =
    "https://www.dropbox.com/s/1a1466dylx6ggzv/Gagan%27s%20Resume.pdf?dl=0";
  const { scrollYProgress } = useScroll();
  const [darkMode, setDarkMode] = useState(false);
  const [activeLinkedin, setActiveLinkedin] = useState("#0e76a8");
  const [activeGithub, setActiveGithub] = useState("");
  const [activeMail, setActiveMail] = useState("#BB001B");
  const [myResume, setMyResume] = useState("D5353B");

  return (
    <Fragment>
      <div className={darkMode ? "dark" : ""}>
        <motion.main
          className="bg-white px-10  dark:bg-gray-800"
          initial={{ x: -200, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <motion.div
            style={{
              scaleX: scrollYProgress,
              position: "fixed",
              background: "#F49D1A",
              top: 0,
              left: 0,
              right: 0,
              height: 10,
              transformOrigin: 0,
            }}
          />
          <nav className="py-10 mb-1 flex justify-between">
            <div className="flex">
              <h1 className="font-sans italic font-medium text-xl dark:text-white">
                Developed by Gagan
              </h1>
              <WiAlien className="text-3xl dark:text-white" />
            </div>
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/">
                  <FcHome className="cursor-pointer" />
                </Link>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer"
                  color={darkMode ? "white" : ""}
                />
              </li>
            </ul>
          </nav>

          <div className="text-center text-5xl font-extrabold ...">
            <h2 className="text-5xl py-2 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-500 font-Michroma ">
              Hi, I'm Gagan 👋
            </h2>
            <h2 className="text-2xl py-2 font-burtons dark:text-white">
              Software Engineer{" "}
            </h2>
          </div>
          <div className="flex p-3 justify-center">
            <Image
              src={portfolio}
              alt="Picture of the author"
              width={500}
              automatically
              provided
              height={400}
              // blurDataURL="data:..." automatically provided
              placeholder="dev image" // Optional blur-up while loading
            />
          </div>
          <div className="flex p-1 justify-center">
            <div className="text-5xl flex justify-center py-10 gap-16 dark:text-white text-gray-600">
              <AiFillLinkedin
                title="LinkedIn Profile"
                className="cursor-pointer "
                onMouseOver={() => setActiveLinkedin("#0e76a8")}
                onMouseLeave={() => setActiveLinkedin("")}
                color={activeLinkedin ? activeLinkedin : ""}
                onClick={() => window.open(linkedinUrl)}
              />
              <AiFillGithub
                title="Github Profile"
                className="cursor-pointer "
                onMouseOver={() => setActiveGithub("grey")}
                onMouseLeave={() => setActiveGithub("")}
                color={activeGithub ? activeGithub : ""}
                onClick={() => window.open(githubUrl)}
              />
              <AiFillFilePdf
                title="Resume"
                className="cursor-pointer "
                onMouseOver={() => setMyResume("D5353B")}
                onMouseLeave={() => setMyResume("")}
                color={myResume}
                onClick={() => {
                  window.open(Resume);
                }}
              />
              <AiFillMail
                title="Mail"
                className="cursor-pointer "
                onMouseOver={() => setActiveMail("#BB001B")}
                onMouseLeave={() => setActiveMail("")}
                color={activeMail ? activeMail : ""}
              />
            </div>
          </div>
          <TechnologyUsed />
          <section>
            <div>
              <h3 className="text-3xl py-1 font-Michroma dark:text-gray-200">
                What I Provide
              </h3>
              <div className="text-xl py-2 leading-8 text-gray-800  dark:text-gray-200">
                <h3>
                  - Design, Development, and Maintenance of Web and Mobile
                  Applications.
                </h3>
                <h3>- Highly interactive Front end / User Interfaces.</h3>
                <h3>- code in less time and space complexity .</h3>
                <h3>- DataFix Support.</h3>
              </div>
            </div>
          </section>

          <section className="border-spacing-4 dark:text-black  dark:bg-gray-100 shadow-2xl p-10 m-5 rounded-xl  dark:ring-offset-slate-900 ...">
            <h3 className="text-3xl py-1 mb-3 font-Michroma">About me!</h3>
            <div className="flex flex-wrap gap-4 justify-around md:p-6 rounded-lg shadow-2xl">
              <p className="md:text-xl md:p-5 text-center font-Kalam w-80  ">
                `I am a dedicated and diligent individual toward the world of
                computers. having a self driven attitude to embrace new tools
                and skills. i have niche towards web-development. Living life,
                having fun, enjoying the sunsets. tea, music, dance and nature.`
              </p>
              <Image
                className="rounded-full shadow-2xl "
                alt="DevAvatar"
                width={300}
                height={10}
                objectFit="cover"
                src={dangerousdev}
              />
            </div>
          </section>

          <div className="border-spacing-4 shadow-2xl p-10 m-5 rounded-xl border-4 ... dark:text-black dark:bg-gray-100">
            <h3 className="text-2xl py-1 mb-3 font-Michroma">
              Reach Out to me!
            </h3>
            <div className="font-burtons p-5 md:text-10md flex-col ">
              <div className="flex items-center flex-wrap gap-5 ">
                <h3 className="m-4 font-Kalam">
                  Associate Software Engineer @BYJU's 💭
                </h3>
                <h3 className="m-4font-Kalam">
                  Open for opportunities:{" "}
                  <span className="text-blue-500 text-4xl font-semibold ...">
                    Yes
                  </span>
                </h3>
                <h3 className="m-4 font-Kalam">
                  Mobile:{" "}
                  <span className="text-blue-500 md:text-3xl font-semibold ...">
                    9591557009
                  </span>
                </h3>
                <h3 className="m-4 font-Kalam">
                  Mail:{" "}
                  <span className="text-blue-500 md:text-3xl font-semibold ...">
                    <a>gaganachanur@gmail.com</a>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </motion.main>
      </div>
    </Fragment>
  );
}

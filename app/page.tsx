"use client";
import { Moon, Sun } from "@phosphor-icons/react";
import { Anonymous_Pro, Rowdies } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import {
  FaGithub,
  FaHackerrank,
  FaLinkedin,
  FaRegFilePdf,
  FaTwitter,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";
import HackerAvatar from "./manoel-lopes-hacker-avatar.png";

const fontLogo = Rowdies({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

const fontText = Anonymous_Pro({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  function handleSetDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      className={`flex justify-center items-center h-screen flex-col ${
        darkMode ? "bg-[#121214]" : "bg-slate-50"
      }`}
    >
      <div
        className={`fixed top-0 right-0 m-10 cursor-pointer ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
        onClick={handleSetDarkMode}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </div>
      <Image
        className="w-[200px] mb-5"
        src={HackerAvatar}
        alt="Manoel Lopes, Hacker avatar Pixel-Art like."
      />
      <h1
        className={`text-5xl font-bold uppercase ${fontLogo.className} ${
          darkMode ? "text-slate-50" : "text-[#121214]"
        }`}
      >
        Manoel Lopes
      </h1>
      <h1 className={`text-2xl text-violet-900 ${fontText.className}`}>
        <Typewriter
          options={{
            strings: [
              "QA Developer",
              "Quality Assurance (QA) Tester",
              "Software Tester",
              "Software Developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div
        className={`mt-10 flex gap-2 ${
          darkMode ? "text-slate-50" : "text-gray-900"
        }`}
      >
        <a href="https://github.com/manoellvitor" target="_blank">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/manoellvitor" target="_blank">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.hackerrank.com/manoelvitorka" target="_blank">
          <FaHackerrank size={24} />
        </a>
        <a href="https://twitter.com/manoelvitornl" target="_blank">
          <FaTwitter size={24} />
        </a>
        <a href="https://manoel-cv.tiiny.site" target="_blank">
          <FaRegFilePdf size={24} />
        </a>
      </div>
    </div>
  );
}

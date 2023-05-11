"use client";
import { Moon, Sun } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import { DiGithubAlt } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import HackerAvatar from "./manoel-lopes-hacker-avatar.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function handleSetDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      className={`flex justify-center items-center h-screen flex-col ${
        darkMode ? "bg-slate-100" : "bg-[#121214]"
      }`}
    >
      <div
        className={`fixed top-0 right-0 m-10 cursor-pointer text-white ${
          darkMode ? "text-black" : ""
        }`}
        onClick={handleSetDarkMode}
      >
        {darkMode ? <Moon size={24} /> : <Sun size={24} />}
      </div>
      <Image
        className="w-[200px] mb-5"
        src={HackerAvatar}
        alt="Manoel Lopes, Hacker avatar Pixel-Art like."
      />
      <h1
        className={`text-5xl font-bold uppercase  ${
          darkMode ? "text-[#121214]" : "text-slate-200"
        }`}
      >
        Manoel Lopes
      </h1>
      <h1 className={`text-2xl text-violet-900 font-semibold`}>
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
      <div className={`text-slate-100 mt-10 flex gap-2`}>
        <a
          href="http://github.com/manoellvitor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiGithubAlt size={30} />
        </a>
        <a
          href="http://github.com/manoellvitor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </div>
  );
}

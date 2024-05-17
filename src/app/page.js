/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import "./globals.css"
import React, { useState } from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";
import {motion} from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Navbar from "./navbar";
import Projets from "./projets";
import Image from 'next/legacy/image';

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const text = "Étudiant à la Web@cadémie d'Epitech, je peux réaliser des projets sous tous leurs aspects dans de nombreux langages et framwork : PHP - Javascript - Typescript - MySQL - PostgreSQL - SASS - Symfony - Laravel - React native - React.js - Next.js - jQuery - Supabase - Bootstrap - Tailwind CSS.".split(" ");

  return (
    <div className={darkMode ? "dark font-quicksand" : "font-quicksand"}>
      <title>Portfolio</title>
      <Navbar/>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* <section className="min-h-screen"> */}
        <section>
          <div className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 id="welcome" className="text-black dark:text-white font-glametrix italic text-3xl mt-20">Bienvenue sur mon <span className="whitespace-nowrap">portfolio !</span></h1>
            <ul className="flex">
              <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 1.1}} className="mt-20">
                <BsFillMoonStarsFill
                  style={
                    darkMode ?
                    {color: "white"}
                    : {color: "black"}
                  }
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-3xl"
                />
              </motion.li>
            </ul>
          </div>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 md:text-6xl">
              Maylan Gomes
            </h2>
            <h3 className="text-black text-2xl py-2 dark:text-white sm:text-3xl">
              Développeur full-stack.
              <br></br>
              Recherche alternance septembre 2024.
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-xl">
              {text.map((el, i) => (
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.25, delay: i/10,}} key={i}>{el}{" "}</motion.span>
              ))}
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/maylan-gomes-12093a302/" target="_blank"><AiFillLinkedin /></a>
              <a href="https://github.com/maylangomes?tab=repositories" target="_blank"><AiFillGithub /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={"https://raw.githubusercontent.com/maylangomes/Assets/main/Maylan.JPG"} priority layout="fill" objectFit="cover" alt="photo_profil"/>
            </div>
          </div>
        </section>
        <Projets />
      </main>
    </div>
  );
}

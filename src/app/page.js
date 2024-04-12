/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import "./globals.css"
import { useState } from "react";
import Image from 'next/legacy/image';
//import Puissance4 from '../public/puissance4.png';

// export default function test() {
//   return (
//     <Image
//     src={"/puissance4.png"}
//     alt="picture"
//     width={100}
//     height={100}
//     priority
//     //sizes="100vw"
//     />
//   )
// }


import {
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
//import Image from "next/image";
// import puissance4 from "../public/puissance4.png";


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark font-quicksand" : "font-quicksand"}>
      <title>Portfolio</title>
      <nav className="bg-teal-600">
        <div className="">
          <div className="flex items-center justify-between h-6 sm:h-24">
            {/* <div className="flex sm:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-teal-400 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div> */}
            <div className="hidden sm:block lg:flex items-center mx-auto">
              <a href="#" className="text-white hover:bg-teal-400 rounded-lg px-3 py-2 font-bold mr-20" aria-current="page">Projets</a>
              <div className="mx-auto">
                <a href="#Puissance4" className="text-white hover:bg-teal-500 rounded-lg px-3 py-2">Puissance_4</a>
                <a href="#" className="text-white hover:bg-teal-500 rounded-lg px-3 lg:px-4 py-2">Meetic</a>
                <a href="#" className="text-white hover:bg-teal-500 rounded-lg px-3 lg:px-4 py-2">Twitter</a>
                <a href="#" className="text-white hover:bg-teal-500 rounded-lg px-3 lg:px-4 py-2">Free_ads</a>
                <a href="#" className="text-white hover:bg-teal-500 rounded-lg px-3 lg:px-4 py-2">Spotify</a>
                <a href="#" className="text-white hover:bg-teal-500 rounded-lg px-3 lg:px-4 py-2">Morpion</a>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pb-3 space-y-1">
            <a href="#" className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg font-bold">Projets</a>
            <a href="#Puissance4" className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Puissance 4</a>
            <a href="#" className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Meetic</a>
            <a href="#" className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Twitter</a>
            <a href="#" className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Free ads</a>
            <a href="#" className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Spotify</a>
            <a href="#" className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Morpion</a>
          </div>
        </div>
      </nav>



      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* <section className="min-h-screen"> */}
        <section>
          <div className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className=" font-glametrix italic text-3xl">Welcome to my portfolio</h1>
            <ul className="flex">
              <li className="mt-10">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-3xl"
                />
              </li>
              <li className="lg:fixed hidden lg:block">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-xl ml-8"
                  href="#">
                  Back to menu
                </a>
              </li>
              <li className="fixed lg:hidden sm:block">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-xl ml-8"
                  href="#">
                  &#x2191;
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 md:text-6xl">
              Maylan Gomes
            </h2>
            <h3 className="text-2xl py-2 dark:text-white sm:text-3xl">
              Développeur full-stack.
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-xl">
              Étudiant à la Web@cadémie d'Epitech, je peux réaliser des projets sous tous leurs aspects dans de nombreux langages.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
            {/* <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div> */}
          </div>
        </section>
        <section className="py-10">
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
              <Image
                className="rounded-lg object-cover"
                alt="puissance4"
                width={"100"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Img/main/puissance4.png"}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
            <Image
                className="rounded-lg object-cover"
                alt="puissance4"
                width={"100"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Img/main/puissance4.png"}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
            <Image
                className="rounded-lg object-cover"
                alt="puissance4"
                width={"100"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Img/main/puissance4.png"}
              />
            </div>
            <div id="Puissance4" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
            <Image
                className="rounded-lg object-cover"
                alt="puissance4"
                width={"100"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Img/main/puissance4.png"}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
            <Image
                className="rounded-lg object-cover"
                alt="puissance4"
                width={"100"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Img/main/puissance4.png"}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
            <Image
                className="rounded-lg object-cover"
                alt="puissance4"
                width={"100"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Img/main/puissance4.png"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

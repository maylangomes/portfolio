/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import "./globals.css"
import { useState } from "react";
import Image from 'next/legacy/image';
import { BsDownload } from "react-icons/bs";
import {motion} from "framer-motion";
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
import { GiHamburgerMenu } from "react-icons/gi";
//import Image from "next/image";
// import puissance4 from "../public/puissance4.png";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isMenuShow = useRef(true);
  const isContactShow = useRef(true);
  const text = "Étudiant à la Web@cadémie d'Epitech, je peux réaliser des projets sous tous leurs aspects dans de nombreux langages.".split(" ");

  function showContactHiddenMenu () {
    () => {
      setShowForm(!showForm);

    }
  }

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_t082uo9', 'template_qfojwui', form.current, {
          publicKey: 'Fow1RoFj-MyGR-0J0',
        })
        .then(
          () => {
            console.log('SUCCESS !');
            alert("Message sent successfully, thanks !");
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Error : You're message hasn't been send ! Try again please");
          },
        );
    };

  return (
    <div className={darkMode ? "dark font-quicksand" : "font-quicksand"}>
      <title>Portfolio</title>
      <nav className="bg-teal-600 fixed w-full z-10">
        <div className="">
          <div  className="flex items-center justify-between h-6 sm:h-16">
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
            <a onClick={() => setShowForm(!showForm)} className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg cursor-pointer px-3 py-2 font-bold lg:ml-20 xl:ml-40 hidden sm:block">Contact</a>
            <div className="hidden sm:block lg:flex items-center mx-auto">
              <a href="#" className="text-white text-sm md:text-base hover:bg-teal-400 rounded-lg px-1 py-1 lg:px-3 lg:py-2 font-bold lg:mr-1 xl:mr-20">Projets</a>
              <div className="mx-auto">
                <a href="#Puissance4" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2 whitespace-nowrap">Puissance 4</a>
                <a href="#Twitter" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2">Twitter</a>
                <a href="#Morpion" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2">Morpion</a>
                <a href="#Cinema" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2">Cinema</a>
                <a href="#Battleship" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2 whitespace-nowrap">Battleship</a>
                <a href="#Sprite" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2">Sprite Generator</a>
              </div>
            </div>
            <a href="CV_wac.pdf" download className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg px-3 py-2 font-bold lg:mr-20 xl:mr-40 hidden sm:block"><BsDownload style={{marginLeft: "4px"}}/>CV</a>
          </div>
        <a href="CV_wac.pdf" download className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg px-3 font-bold xl:mr-14 float-right sm:hidden"><BsDownload style={{marginLeft: "4px"}}/>CV</a>
        <a onClick={() => {isMenuShow.current = false; isContactShow.current = true; setShowForm(!showForm);}} className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg cursor-pointer px-3 font-bold float-right xl:ml-14 sm:hidden">Contact</a>
        </div>
        <div className="sm:hidden">
          <GiHamburgerMenu onClick={() => {isMenuShow.current = true; isContactShow.current = false; setShowMenu(!showMenu);}} style={{color: "white", height: "3em", width: "3em"}}/>
        </div>
        <div className={showMenu && isMenuShow.current ? "sm:hidden" : "hidden"} id="mobile-menu">
          <div className="px-2 pb-3 space-y-1">
            <a href="#" onClick={() => setShowMenu(!showMenu)} className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg font-bold">Projets</a>
            <a href="#Puissance4" onClick={() => setShowMenu(!showMenu)} className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Puissance 4</a>
            <a href="#Twitter" onClick={() => setShowMenu(!showMenu)} className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Twitter</a>
            <a href="#Cinema" onClick={() => setShowMenu(!showMenu)} className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Cinema</a>
            <a href="#Battleship" onClick={() => setShowMenu(!showMenu)} className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Battleship</a>
            <a href="#Sprite" onClick={() => setShowMenu(!showMenu)} className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Sprite Generator</a>
            <a href="#Morpion" onClick={() => setShowMenu(!showMenu)} className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg">Morpion</a>
          </div>
        </div>
      <section className={showForm && isContactShow.current ? "" : "hidden"}>
        <div className="relative">
          <div className="absolute">
            <form ref={form} onSubmit={sendEmail} className="bg-teal-600 px-8 lg:px-12 xl:px-16 absolute">
              <h1 className="text-white underline font-extrabold text-lg lg:text-xl xl:text-2xl py-4 lg:py-8 xl:py-10">Contacte-moi ici</h1>
              <div className="py-2">
              <label className="text-white">Nom </label>
              <input type="text" name="user_name" />
              </div>
              <div className="py-2">
              <label className="text-white">Email *</label>
              <input type="email" name="user_email" required />
              </div>
              <div className="py-2">
              <label className="text-white">Message *</label>
              <textarea rows={4} name="message" required/>
              </div>
              <input className="text-white font-bold my-6 mb-8 px-16 py-3 bg-slate-400 cursor-pointer" type="submit" value="Envoyer" />
            </form>
          </div>
        </div>
      </section>
      </nav>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* <section className="min-h-screen"> */}
        <section>
          <div className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 id="welcome" className=" font-glametrix italic text-3xl mt-20">Bienvenue sur mon <span className="whitespace-nowrap">portfolio !</span></h1>
            <ul className="flex">
              {/* <li className="mt-20">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-3xl"
                />
              </li> */}
              <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 1}} className="mt-20">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-3xl"
                />
              </motion.li>

              {/* <li className="lg:fixed hidden lg:block">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-xl ml-8 mt-24"
                  href="#">
                  Back to menu
                </a>
              </li> */}
              {/* <li className="fixed lg:hidden sm:block">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-xl ml-8"
                  href="#">
                  &#x2191;
                </a>
              </li> */}
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
              {text.map((el, i) => (
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.25, delay: i/10,}} key={i}>{el}{" "}</motion.span>
              ))}
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
            <div id="Puissance4" className="basis-1/3 flex-1 ">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
              <Image
                className="rounded-lg object-cover"
                alt="puissance4"
                width={"85"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Img/main/puissance_4.png"}
              />
            </div>
            <div id="Twitter" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
            <Image
                className="rounded-lg object-cover"
                alt="twitter"
                width={"85"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Assets/main/twitter.png"}
              />
            </div>
            <div id="Morpion" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
            <Image
                className="rounded-lg object-cover"
                alt="morpion"
                width={"85"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Assets/main/Morpion.png"}
              />
            </div>
            <div id="Cinema" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
            <Image
                className="rounded-lg object-cover"
                alt="cinema"
                width={"85"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Assets/main/cinema.png"}
              />
            </div>
            <div id="Battleship" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
            <Image
                className="rounded-lg object-cover"
                alt="battleship"
                width={"200"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Assets/main/battleship.png"}
              />
            </div>
            <div id="Sprite" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              Puissance 4 : projet développé en <span className="text-teal-600">javascript natif </span>
              (seul, 2 semaines).
            </p>
            <Image
                className="rounded-lg object-cover"
                alt="sprite"
                width={"200"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Assets/main/sprite.png"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

'use client'
import React, { useRef, useState } from 'react';
import { BsDownload} from "react-icons/bs";
import {motion} from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrHomeOption } from "react-icons/gr";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const isMenuShow = useRef(true);
    const isContactShow = useRef(true);
    const [showForm, setShowForm] = useState(false);

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
                <a onClick={() => setShowForm(!showForm)} className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg cursor-pointer px-0.5 py-1 md:px-3 md:py-2 font-bold lg:ml-20 xl:ml-40 hidden sm:block">Contact</a>
                <div className="hidden sm:flex items-center mx-auto">
                <a href="#" className="text-white text-sm md:text-base hover:bg-teal-400 rounded-lg px-1 py-1 lg:px-3 lg:py-2 font-bold md:mr-5 lg:mr-3 xl:mr-15"><GrHomeOption style={{fontSize: "30px"}}/></a>
                <div className="mx-auto">
                    <a href="#Puissance4" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2 whitespace-nowrap">Puissance 4</a>
                    <a href="#Twitter" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2">Twitter</a>
                    <a href="#Morpion" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2">Morpion</a>
                    <a href="#Cinema" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2">Cinema</a>
                    <a href="#Battleship" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2 whitespace-nowrap">Battleship</a>
                    <a href="#Sprite" className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2 whitespace-nowrap">Sprite Generator</a>
                </div>
                </div>
                <a href="CV_wac.pdf" download className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg px-0.5 md:px-3 py-1 md:py-2 font-bold lg:mr-20 xl:mr-40 hidden sm:block"><BsDownload style={{marginLeft: "4px"}}/>CV</a>
            </div>
            <a href="CV_wac.pdf" download className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg px-3 font-bold xl:mr-14 float-right sm:hidden"><BsDownload style={{marginLeft: "4px"}}/>CV</a>
            <a onClick={() => {isMenuShow.current = false; isContactShow.current = true; setShowForm(!showForm);}} className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg cursor-pointer px-3 font-bold float-right xl:ml-14 sm:hidden">Contact</a>
            </div>
            <div className="sm:hidden">
            <GiHamburgerMenu onClick={() => {isMenuShow.current = true; isContactShow.current = false; setShowMenu(!showMenu);}} style={{color: "white", height: "3em", width: "3em"}}/>
            </div>
            <div className={showMenu && isMenuShow.current ? "sm:hidden" : "hidden"} id="mobile-menu">
            <div className="px-2 pb-3 space-y-1">
                <a href="#" onClick={() => setShowMenu(!showMenu)} className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg font-bold">Home</a>
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
                <motion.form
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                    duration: 0.5
                    }
                }}
                ref={form} onSubmit={sendEmail} className="bg-teal-600 px-8 lg:px-12 xl:px-16 absolute">
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
                </motion.form>
            </div>
            </div>
            </section>
            </nav>
    );
}


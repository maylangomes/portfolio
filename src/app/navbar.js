"use client";
import React, { useRef, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiHome2Line } from "react-icons/ri";
import emailjs from "@emailjs/browser";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const isMenuShow = useRef(true);
  const isContactShow = useRef(true);
  const [showForm, setShowForm] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t082uo9", "template_qfojwui", form.current, {
        publicKey: "Fow1RoFj-MyGR-0J0",
      })
      .then(
        () => {
          console.log("SUCCESS !");
          alert("Message sent successfully, thanks !");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Error : You're message hasn't been send ! Try again please");
        }
      );
  };

  return (
    <nav className="bg-teal-600 fixed w-full z-10">
      <div>
        <div className="flex items-center justify-between md:h-16">
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
          <a
            onClick={() => setShowForm(!showForm)}
            className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg cursor-pointer px-0.5 py-1 md:px-3 md:py-2 font-bold lg:ml-20 xl:ml-40 hidden md:block"
          >
            Contact
          </a>
          <div className="hidden md:flex items-center mx-auto">
            <a
              href="#"
              className="text-white text-sm md:text-base hover:bg-teal-400 rounded-lg px-1 py-1 lg:px-3 lg:py-2 font-bold md:mr-5 lg:mr-3 xl:mr-15"
            >
              <RiHome2Line style={{ fontSize: "30px" }} />
            </a>
            <div className="mx-auto">
              <a
                href="#BasketQuiz"
                className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2 whitespace-nowrap"
              >
                Quiz
              </a>
              <a
                href="#BasketQuiz"
                className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2"
              >
                Dashboard
              </a>
              <a
                href="#Morpion"
                className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2"
              >
                Morpion
              </a>
              <a
                href="#Morpion"
                className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2 whitespace-nowrap"
              >
                Flappy
              </a>
              <a
                href="#Vintage"
                className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2"
              >
                Cinema
              </a>
              <a
                href="#Vintage"
                className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2 whitespace-nowrap"
              >
                Puissance 4
              </a>
              <a
                href="#Sprite"
                className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2"
              >
                Sprite
              </a>
              <a
                href="#Sprite"
                className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2 whitespace-nowrap"
              >
                Filter
              </a>
            </div>
          </div>
          <a
            href="CV_Maylan_Gomes.pdf"
            download
            className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg px-0.5 md:px-3 font-bold lg:mr-20 xl:mr-40 hidden md:block"
          >
            <BsDownload style={{ marginLeft: "4px" }} />
            CV
          </a>
        </div>
        <div>
          <a
            href="CV_Maylan_Gomes.pdf"
            download
            className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg px-3 font-bold xl:mr-14 float-right md:hidden"
          >
            <BsDownload style={{ marginLeft: "4px" }} />
            CV
          </a>
          <a
            onClick={() => {
              isMenuShow.current = false;
              isContactShow.current = true;
              setShowForm(!showForm);
            }}
            className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg cursor-pointer mt-3 px-3 font-bold float-right xl:ml-14 md:hidden"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <GiHamburgerMenu
          onClick={() => {
            isMenuShow.current = true;
            isContactShow.current = false;
            setShowMenu(!showMenu);
          }}
          style={{
            color: "white",
            height: "3em",
            width: "3em",
            cursor: "pointer",
          }}
        />
      </div>
      <div
        className={showMenu && isMenuShow.current ? "md:hidden" : "hidden"}
        id="mobile-menu"
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className="px-2 pb-3 space-y-1"
        >
          <a
            href="#"
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg font-bold"
          >
            Home
          </a>
          <a
            href="#BasketQuiz"
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg"
          >
            Basket Quiz
          </a>
          <a
            href="#BasketQuiz"
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg"
          >
            Dashboard
          </a>
          <a
            href="#Morpion"
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg"
          >
            Morpion
          </a>
          <a
            href="#Morpion"
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg"
          >
            Flappy Turtle
          </a>
          <a
            href="#Vintage"
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg"
          >
            Cinema Vintage
          </a>
          <a
            href="#Vintage"
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg"
          >
            Puissance 4
          </a>
          <a
            href="#Sprite"
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg"
          >
            Sprite
          </a>
          <a
            href="#Sprite"
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg"
          >
            Movie Filter
          </a>
        </motion.div>
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
                  duration: 0.5,
                },
              }}
              ref={form}
              onSubmit={sendEmail}
              className="bg-teal-600 px-8 lg:px-12 xl:px-16 absolute"
            >
              <h1 className="text-white font-extrabold text-lg lg:text-xl xl:text-2xl py-4 lg:py-8 xl:py-10">
                Pour m'envoyer un{" "}
                <span className="whitespace-nowrap">email :</span>
              </h1>
              <div className="py-2 text-black">
                <label className="text-white">Nom </label>
                <input type="text" name="user_name" />
              </div>
              <div className="py-2 text-black">
                <label className="text-white">Email *</label>
                <input type="email" name="user_email" required />
              </div>
              <div className="py-2 text-black">
                <label className="text-white">Message *</label>
                <textarea rows={4} name="message" required />
              </div>
              <motion.input
                whileTap={{ scale: 0.9 }}
                className="text-white font-bold my-6 mb-8 px-16 py-3 bg-slate-400 cursor-pointer"
                type="submit"
                value="Envoyer"
              />
            </motion.form>
          </div>
        </div>
      </section>
    </nav>
  );
}

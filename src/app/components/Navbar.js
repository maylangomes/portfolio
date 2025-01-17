"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import ContactForm from "./ContactForm";
import MobileMenu from "./MobileMenu";
import DownloadButton from "./DownloadButton";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <nav className="bg-teal-600 fixed w-full z-10">
      <div className="flex items-center justify-between md:h-16">
        {/* Bouton Contact */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg cursor-pointer px-0.5 py-1 md:px-3 md:py-2 font-bold lg:ml-20 xl:ml-40 hidden md:block"
        >
          Contact
        </button>

        {/* Liens principaux */}
        <NavLinks />

        {/* Bouton de téléchargement */}
        <DownloadButton />

        {/* Menu mobile */}
        <GiHamburgerMenu
          onClick={() => setShowMenu(!showMenu)}
          className="text-white md:hidden"
          style={{ height: "3em", width: "3em", cursor: "pointer" }}
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && <MobileMenu onClose={() => setShowMenu(false)} />}

      {/* Formulaire de contact */}
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </nav>
  );
}

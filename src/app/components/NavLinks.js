import React from "react";
import { RiHome2Line } from "react-icons/ri";

export default function NavLinks() {
  const links = [
    { href: "#", label: <RiHome2Line style={{ fontSize: "30px" }} />, key: "home" },
    { href: "#BasketQuiz", label: "Quiz", key: "quiz" },
    { href: "#BasketQuiz", label: "Dashboard", key: "dashboard" },
    { href: "#Morpion", label: "Morpion", key: "morpion" },
    { href: "#Morpion", label: "Flappy", key: "flappy" },
    { href: "#Vintage", label: "Cinema", key: "cinema" },
    { href: "#Vintage", label: "Puissance 4", key: "puissance4" },
    { href: "#Sprite", label: "Sprite", key: "sprite" },
    { href: "#Sprite", label: "Filter", key: "filter" },
  ];

  return (
    <div className="hidden md:flex items-center mx-auto">
      {links.map((link) => (
        <a
          href={link.href}
          key={link.key}
          className="text-white text-sm md:text-base hover:bg-teal-500 rounded-lg px-1 py-1 lg:px-3 lg:py-2 whitespace-nowrap"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

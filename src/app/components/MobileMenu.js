import React from "react";
import { motion } from "framer-motion";

export default function MobileMenu({ onClose }) {
  const links = [
    { href: "#", label: "Home" },
    { href: "#BasketQuiz", label: "Basket Quiz" },
    { href: "#BasketQuiz", label: "Dashboard" },
    { href: "#Morpion", label: "Morpion" },
    { href: "#Morpion", label: "Flappy Turtle" },
    { href: "#Vintage", label: "Cinema Vintage" },
    { href: "#Vintage", label: "Puissance 4" },
    { href: "#Sprite", label: "Sprite" },
    { href: "#Sprite", label: "Movie Filter" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-2 pb-3 space-y-1"
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          onClick={onClose}
          className="text-white hover:bg-teal-700 block px-3 py-2 rounded-lg"
        >
          {link.label}
        </a>
      ))}
    </motion.div>
  );
}

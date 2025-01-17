import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactForm({ onClose }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_t082uo9", "template_qfojwui", form.current, {
        publicKey: "Fow1RoFj-MyGR-0J0",
      })
      .then(
        () => {
          alert("Message envoyé avec succès !");
          onClose();
        },
        (error) => {
          alert("Erreur : votre message n'a pas été envoyé. Réessayez, s'il vous plaît.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg"
      >
        <h1 className="text-teal-600 font-extrabold text-lg lg:text-xl xl:text-2xl pb-6 text-center">
          Contactez-moi
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="user_name" className="text-teal-600 font-bold mb-2">
              Nom
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="user_email" className="text-teal-600 font-bold mb-2">
              Email *
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-teal-600 font-bold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition"
            >
              Envoyer
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}

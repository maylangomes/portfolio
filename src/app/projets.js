"use client";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = dynamic(() => import("../app/video"), { ssr: false });

export default function Projets() {
  return (
    <section className="py-10">
      {/* <VideoPlayer url="/videos/sprite.mp4" /> */}
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap shadow-2xl p-10">
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
          id="BasketQuiz"
          className="basis-1/3 flex-1"
        >
          <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">
              Basket Quiz
            </span>
            <span className="text-xl"> [ 1 semaine, projet personnel ]</span>
            <br></br>
            <span className="text-teal-600 dark:text-teal-400 text-lg">
              {" "}
              Next.js,{" "}
            </span>
            <span className="text-lg">
              possibilité de <strong>créer ses propres questions</strong>.
              Design shadcn avec divers types de champs :{" "}
              <strong>Select Multi</strong>, Conditionnel, Dropdown,{" "}
              <strong>Slider</strong>..
            </span>
            <br></br>
            <a href="https://maylangomes.github.io/quiz/" target="_blank">
              <span className="text-xl italic text-teal-600 dark:text-teal-400 font-bold underline">
                Visiter le site en ligne
              </span>
            </a>
          </p>
          <Link href={"https://maylangomes.github.io/quiz/"} target="_blank">
            <Image
              className="rounded-lg object-cover"
              alt="puissance4"
              width={"100"}
              height={"100"}
              layout="responsive"
              priority
              src={
                "https://raw.githubusercontent.com/maylangomes/Img/main/quiz.png"
              }
            />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
          id="Dashboard"
          className="basis-1/3 flex-1"
        >
          <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">
              Dashboard
            </span>
            <span className="text-xl"> [ 2 semaines, projet personnel ]</span>
            <br></br>
            <span className="text-teal-600 dark:text-teal-400 text-lg">
              {" "}
              Python,{" "}
            </span>
            <span className="text-lg">
              <strong>streamlit</strong>, pandas,{" "}
              <strong>filtres croisés</strong>, graphiques à partir d'un csv.
              <br />
              P.-S. - N'hésitez pas à réveiller le site lors de votre visite
              s'il fait une sieste !
            </span>
            <br></br>
            <a href="https://maylangomes.streamlit.app" target="_blank">
              <span className="text-xl italic text-teal-600 dark:text-teal-400 font-bold underline">
                Visiter le site en ligne
              </span>
            </a>
          </p>
          <Link href={"https://maylangomes.streamlit.app"} target="_blank">
            <Image
              className="rounded-lg object-cover"
              alt="cinema"
              width={"100"}
              height={"100"}
              layout="responsive"
              priority
              src={
                "https://raw.githubusercontent.com/maylangomes/Assets/main/dashboard.png"
              }
            />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
          id="Morpion"
          className="basis-1/3 flex-1"
        >
          <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">
              Morpion
            </span>
            <span className="text-xl"> [ 3h30 en examen, 19/20 ]</span>
            <br></br>
            <span className="text-teal-600 dark:text-teal-400 text-lg">
              {" "}
              Javascript,{" "}
            </span>
            <span className="text-lg">
              <strong>manipulation du DOM</strong>, algorithmie, gestion des
              événements, localstorage.
            </span>
            <br></br>
            <a href="https://maylangomes.github.io/morpion/" target="_blank">
              <span className="text-xl italic text-teal-600 dark:text-teal-400 font-bold underline">
                Visiter le site en ligne
              </span>
            </a>
          </p>
          <Link href={"https://maylangomes.github.io/morpion/"} target="_blank">
            <Image
              className="rounded-lg object-cover"
              alt="morpion"
              width={"85"}
              height={"100"}
              layout="responsive"
              priority
              src={
                "https://raw.githubusercontent.com/maylangomes/Assets/main/Morpion.png"
              }
            />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
          id="Flappy"
          className="basis-1/3 flex-1"
        >
          <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">
              Flappy Turtle
            </span>
            <span className="text-xl"> [ 1 semaine, projet personnel ]</span>
            <br></br>
            <span className="text-teal-600 dark:text-teal-400 text-lg">
              {" "}
              Java,{" "}
            </span>
            <span className="text-lg">
              {" "}
              algorithmie, <strong>gestion d'une loop</strong>, gestion de la
              position dans un jeu, implémentation de score en temps réel.
            </span>
            <br></br>
            <a
              href="https://github.com/maylangomes/flappyturtle"
              target="_blank"
            >
              <span className="text-xl italic text-teal-600 dark:text-teal-400 font-bold underline">
                Visiter le github
              </span>
            </a>
          </p>
          <Link
            href={"https://github.com/maylangomes/flappyturtle"}
            target="_blank"
          ></Link>
          <video height="452" width="768" controls>
            <source
              src={
                "https://raw.githubusercontent.com/maylangomes/Assets/main/flappyturtle.mp4"
              }
            />
            Your browser does not support the video tag...
          </video>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
          id="Vintage"
          className="basis-1/3 flex-1"
        >
          <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">
              Cinema Vintage
            </span>
            <span className="text-xl"> [ 1 jour, projet personnel ]</span>
            <br></br>
            <span className="text-teal-600 dark:text-teal-400 text-lg">
              {" "}
              Next.js{" "}
            </span>
            <span className="text-lg">
              , typescript, Fetch JSON, <strong>reproduction figma</strong>,
              structure en Atomic Design Pattern
            </span>
            <br></br>
            <a
              href="https://maylangomescinema.netlify.app/view"
              target="_blank"
            >
              <span className="text-xl italic text-teal-600 dark:text-teal-400 font-bold underline">
                Visiter le site en ligne
              </span>
            </a>
          </p>
          <Link
            href={"https://maylangomescinema.netlify.app/view"}
            target="_blank"
          >
            <Image
              className="rounded-lg object-cover"
              alt="vintage"
              width={"100"}
              height={"100"}
              layout="responsive"
              priority
              src={
                "https://raw.githubusercontent.com/maylangomes/Assets/main/cinema-vintage.png"
              }
            />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
          id="Puissance4"
          className="basis-1/3 flex-1"
        >
          <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">
              Puissance 4 modulable
            </span>
            <span className="text-xl"> [ 2 semaines, 20/20 ]</span>
            <br></br>
            <span className="text-teal-600 dark:text-teal-400 text-lg">
              {" "}
              Javascript,{" "}
            </span>
            <span className="text-lg">
              algorithmie, personnalisation des profils,{" "}
              <strong>animation</strong>, localstorage. Possibilité de{" "}
              <strong>modifier</strong> la taille du puissance 4 (nombre de
              colonnes/lignes).
            </span>
            <br></br>
            <a
              href="https://maylangomes.github.io/puissance_4/"
              target="_blank"
            >
              <span className="text-xl italic text-teal-600 dark:text-teal-400 font-bold underline">
                Visiter le site en ligne
              </span>
            </a>
          </p>
          <Link
            href={"https://maylangomes.github.io/puissance_4/"}
            target="_blank"
          >
            <Image
              className="rounded-lg object-cover"
              alt="puissance4"
              width={"85"}
              height={"100"}
              layout="responsive"
              priority
              src={
                "https://raw.githubusercontent.com/maylangomes/Img/main/puissance_4.png"
              }
            />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
          id="Sprite"
          className="basis-1/3 flex-1"
        >
          <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">
              Sprite Generator
            </span>
            <span className="text-xl"> [ 2 semaines, 20/20 ]</span>
            <br></br>
            <span className="text-teal-600 dark:text-teal-400 text-lg">
              {" "}
              PHP,{" "}
            </span>
            <span className="text-lg">
              <strong>récursivité</strong>, création d'un sprite d'images avec
              options implémentées (taille, nom du fichier créé, récursif),
              création d'un fichier CSS simultanément.
            </span>
            <br></br>
            <a href="https://github.com/maylangomes/sprite" target="_blank">
              <span className="text-xl italic text-teal-600 dark:text-teal-400 font-bold underline">
                Visiter le github
              </span>
            </a>
          </p>
          <Link
            href={"https://github.com/maylangomes/sprite"}
            target="_blank"
          ></Link>
          <video height="452" width="768" controls>
            <source
              src={
                "https://raw.githubusercontent.com/maylangomes/Assets/main/sprite.mp4"
              }
            />
            Your browser does not support the video tag...
          </video>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
          id="Cinema"
          className="basis-1/3 flex-1"
        >
          <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">
              Movie Filter
            </span>
            <span className="text-xl"> [ 2 semaines, 20/20 ]</span>
            <br></br>
            <span className="text-teal-600 dark:text-teal-400 text-lg">
              {" "}
              PHP, SQL,{" "}
            </span>
            <span className="text-lg">
              filtres de recherche croisés, <strong>pagination</strong>
            </span>
            <br></br>
            <a href="https://github.com/maylangomes/cinema" target="_blank">
              <span className="text-xl italic text-teal-600 dark:text-teal-400 font-bold underline">
                Visiter le github
              </span>
            </a>
          </p>
          <Link href={"https://github.com/maylangomes/cinema"} target="_blank">
            <Image
              className="rounded-lg object-cover"
              alt="cinema"
              width={"200"}
              height={"100"}
              layout="responsive"
              priority
              src={
                "https://raw.githubusercontent.com/maylangomes/Assets/main/cinema.png"
              }
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

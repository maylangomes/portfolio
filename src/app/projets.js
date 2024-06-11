'use client'
import Image from 'next/legacy/image';
import {motion} from "framer-motion";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('../app/video'), { ssr: false });

export default function Projets() {
    return (
        <section className="py-10">
            {/* <VideoPlayer url="/videos/sprite.mp4" /> */}
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap shadow-2xl p-10">
            <motion.div
                whileHover={{
                scale: 1.03
                }}
                initial={{
                opacity: 0,
                x: -200
                }}
                whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1
                }
                }}
                viewport={{
                once: true
                }}
                id="BasketQuiz" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
                <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">Basket Quiz</span><span className='text-xl text-nowrap'> [ 1 semaine ]</span>
                <br></br>
                <span className="text-teal-600 dark:text-teal-400 text-lg"> Next.js, </span><span className='text-lg'>Design shadcn avec divers types de champs : Radio, Select Multi, Conditionnel, Dropdown, Slider.</span>
                <br></br>
                <a href="https://maylangomes.github.io/quiz/" target='_blank'>
                    <span className='text-xl italic text-teal-600 dark:text-teal-400 font-bold underline'>Cliquez pour visiter le site en ligne</span>
                </a>
            </p>
            <Link href={"https://maylangomes.github.io/quiz/"} target='_blank'>
                <Image
                className="rounded-lg object-cover"
                alt="puissance4"
                width={"100"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Img/main/quiz.png"}
                />
            </Link>
            </motion.div>
            <motion.div
                whileHover={{
                scale: 1.03
                }}
                initial={{
                opacity: 0,
                x: 200
                }}
                whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1
                }
                }}
                viewport={{
                once: true
                }}
                id="Twitter" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
                <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">Cinema Vintage</span><span className='text-xl text-nowrap'> [ 1 jour ]</span>
                <br></br>
                <span className="text-teal-600 dark:text-teal-400 text-lg"> Next.js </span><span className='text-lg'>Fetch JSON, reproduction figma, structure en Atomic Design Pattern, typescript</span>
                <br></br>
                <a href="https://aquamarine-moonbeam-004d5d.netlify.app/view" target='_blank'>
                    <span className='text-xl italic text-teal-600 dark:text-teal-400 font-bold underline'>Cliquez pour visiter le site en ligne</span>
                </a>
            </p>
            <Link href={"https://aquamarine-moonbeam-004d5d.netlify.app/view"} target='_blank'>
                <Image
                    className="rounded-lg object-cover"
                    alt="twitter"
                    width={"100"}
                    height={"100"}
                    layout="responsive"
                    priority
                    src={"https://raw.githubusercontent.com/maylangomes/Assets/main/cinema-vintage.png"}
                />
            </Link>
            </motion.div>
            <motion.div
                whileHover={{
                scale: 1.03
                }}
                initial={{
                opacity: 0,
                x: -200
                }}
                whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1
                }
                }}
                viewport={{
                once: true
                }}
                id="Morpion" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
                <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">Morpion</span><span className='text-xl text-nowrap'> [ 3h30 en examen ]</span>
                <br></br>
                <span className="text-teal-600 dark:text-teal-400 text-lg"> Javascript, </span><span className='text-lg'>manipulation du DOM, algorithmie, gestion des événements, localstorage.</span>
                <br></br>
                <a href="https://maylangomes.github.io/morpion/" target='_blank'>
                    <span className='text-xl italic text-teal-600 dark:text-teal-400 font-bold underline'>Cliquez pour visiter le site en ligne</span>
                </a>
            </p>
            <Link href={"https://maylangomes.github.io/morpion/"} target='_blank'>
                <Image
                    className="rounded-lg object-cover"
                    alt="morpion"
                    width={"85"}
                    height={"100"}
                    layout="responsive"
                    priority
                    src={"https://raw.githubusercontent.com/maylangomes/Assets/main/Morpion.png"}
                />
            </Link>
            </motion.div>
            <motion.div
                whileHover={{
                scale: 1.03
                }}
                initial={{
                opacity: 0,
                x: 200
                }}
                whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1
                }
                }}
                viewport={{
                once: true
                }}
                id="Puissance4" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
                <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">Puissance 4 modulable</span><span className='text-xl text-nowrap'> [ 2 semaines ]</span>
                <br></br>
                <span className="text-teal-600 dark:text-teal-400 text-lg"> Javascript, </span><span className='text-lg'>algorithmie, personnalisation des profils, animation, localstorage. Possibilité de modifier la taille du puissance 4 (nombre de colonnes/lignes).</span>
                <br></br>
                <a href="https://maylangomes.github.io/puissance_4/" target='_blank'>
                    <span className='text-xl italic text-teal-600 dark:text-teal-400 font-bold underline'>Cliquez pour visiter le site en ligne</span>
                </a>
            </p>
            <Link href={"https://maylangomes.github.io/puissance_4/"} target='_blank'>
                <Image
                className="rounded-lg object-cover"
                alt="puissance4"
                width={"85"}
                height={"100"}
                layout="responsive"
                priority
                src={"https://raw.githubusercontent.com/maylangomes/Img/main/puissance_4.png"}
                />
            </Link>
            </motion.div>
            <motion.div
                whileHover={{
                scale: 1.03
                }}
                initial={{
                opacity: 0,
                x: -200
                }}
                whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1
                }
                }}
                viewport={{
                once: true
                }}
                id="Cinema" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
                <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">Movie Filter</span><span className='text-xl text-nowrap'> [ 2 semaines ]</span>
                <br></br>
                <span className="text-teal-600 dark:text-teal-400 text-lg"> PHP, SQL, </span><span className='text-lg'>filtres de recherche croisés, pagination</span>
                <br></br>
                <a href="https://github.com/maylangomes/cinema" target='_blank'>
                    <span className='text-xl italic text-teal-600 dark:text-teal-400 font-bold underline'>Cliquez pour visiter le github</span>
                </a>
            </p>
            <Link href={"https://github.com/maylangomes/cinema"} target='_blank'>
                <Image
                    className="rounded-lg object-cover"
                    alt="cinema"
                    width={"200"}
                    height={"100"}
                    layout="responsive"
                    priority
                    src={"https://raw.githubusercontent.com/maylangomes/Assets/main/cinema.png"}
                />
            </Link>
            </motion.div>
            <motion.div
                whileHover={{
                scale: 1.03
                }}
                initial={{
                opacity: 0,
                x: 200
                }}
                whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1
                }
                }}
                viewport={{
                once: true
                }}
                id="Sprite" className="basis-1/3 flex-1">
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
                <span className=" text-3xl text-teal-600 dark:text-teal-400 font-bold">Sprite Generator</span><span className='text-xl text-nowrap'> [ 2 semaines ]</span>
                <br></br>
                <span className="text-teal-600 dark:text-teal-400 text-lg"> PHP, </span><span className='text-lg'>récursivité, création d'un sprite d'images avec options implémentées.</span>
                <br></br>
                <a href="https://github.com/maylangomes/sprite" target='_blank'>
                    <span className='text-xl italic text-teal-600 dark:text-teal-400 font-bold underline'>Cliquez pour visiter le github</span>
                </a>
            </p>
            <Link href={"https://github.com/maylangomes/sprite"} target='_blank'>
                <Image
                    className="rounded-lg object-cover"
                    alt="sprite"
                    width={"200"}
                    height={"100"}
                    layout="responsive"
                    priority
                    src={"https://raw.githubusercontent.com/maylangomes/Assets/main/sprite.png"}
                />
            </Link>
            </motion.div>
            </div>
        </section>
    );
}

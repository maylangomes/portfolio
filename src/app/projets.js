'use client'
import Image from 'next/legacy/image';
import {motion} from "framer-motion";

export default function Projets() {
    return (
        <section className="py-10">
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
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
                id="Puissance4" className="basis-1/3 flex-1 ">
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
                id="Cinema" className="basis-1/3 flex-1">
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
                id="Battleship" className="basis-1/3 flex-1">
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
            </motion.div>
            </div>
        </section>
    );
}
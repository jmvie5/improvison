/* @ts-ignore */
import type { MetaFunction } from "@remix-run/deno";

import { BookOpenIcon, PresentationChartLineIcon, PuzzlePieceIcon, UsersIcon, UserIcon } from '@heroicons/react/24/outline'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import { Image, Card, CardHeader, CardBody, CardFooter, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Roblox_Logo } from "../../static/images"

export const meta: MetaFunction = () => {
  return [
    { title: "Improvison" },
    { name: "description", content: "Ce projet vise à développer du matériel pédagogique basé sur les principes de l’apprentissage par le jeu afin de faciliter l’acquisition, chez les instrumentistes de niveau débutant ou intermédiaire, de stratégies d’improvisation musicale qui sont mises en œuvre par les experts du domaine et à documenter les impacts perçus de ce matériel." },
  ];
};

export default function LandingIndex() {

    const itemVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1
        }
      }

    return (
        <motion.div 
            className="flex flex-col gap-4"
            initial='hidden'
            animate='visible'
            variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.3
                  }
                }
              }}
        >
            <motion.div
                variants={itemVariants}
            >
                <Card className="bg-bleu-pale/20 p-4 text-white border border-neutral-500 shadow-md shadow-black" as={Link} href="solo/game">
                    <CardHeader className="justify-center">
                        <p className="font-bold text-xl">Solo</p>
                    </CardHeader>
                    <CardBody>
                        <UserIcon className="w-32 self-center"/>
                    </CardBody>
                    <CardFooter className="justify-center text-center text-lg">
                        <p>Un joueur. Plateforme en ligne d'apprentissage de l'improvisation musicale.</p>
                    </CardFooter>
                </Card>
            </motion.div>
            <motion.div
                variants={itemVariants}
            >
                <Card className="bg-bleu-pale/20 p-4 text-white border border-neutral-500 shadow-md shadow-black" as={Link} href="duo">
                    <CardHeader className="justify-center">
                        <p className="font-bold text-xl">Duo</p>
                    </CardHeader>
                    <CardBody>
                        <UsersIcon className="w-32 self-center"/>
                    </CardBody>
                    <CardFooter className="justify-center text-center text-lg">
                        <p>Deux joueurs. Dyade prof-élève ou pour deux élèves. Joueurs de tous les âges et tous les niveaux.</p>
                    </CardFooter>
                </Card>
            </motion.div>
            
            {/* <Card className="bg-bleu-pale/20 p-4 text-white border border-neutral-500 shadow-md shadow-black" isDisabled>
                <CardHeader className="justify-center">
                    <p className="font-bold text-xl">Résultats</p>
                </CardHeader>
                <CardBody>
                    <PresentationChartLineIcon className="w-32 self-center"/>
                </CardBody>
                <CardFooter className="justify-center text-center text-lg">
                    <p>Nous analysons présentement nos données de recherche. Les résultats seront disponibles ici sous peu.</p>
                </CardFooter>
            </Card> */}
        </motion.div>

    );
}

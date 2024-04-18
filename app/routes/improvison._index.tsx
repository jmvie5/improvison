/* @ts-ignore */
import type { MetaFunction } from "@remix-run/deno";

import { BookOpenIcon, PresentationChartLineIcon, PuzzlePieceIcon, UsersIcon } from '@heroicons/react/24/outline'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import { Image } from "@nextui-org/react";
import { Roblox_Logo } from "../static/images"

export const meta: MetaFunction = () => {
  return [
    { title: "Improvison Roblox" },
    { name: "description", content: "Ce projet vise à développer du matériel pédagogique basé sur les principes de l’apprentissage par le jeu afin de faciliter l’acquisition, chez les instrumentistes de niveau débutant ou intermédiaire, de stratégies d’improvisation musicale qui sont mises en œuvre par les experts du domaine et à documenter les impacts perçus de ce matériel." },
  ];
};

export default function Improvison() {

    return (
        <div className="grid nlg:grid-cols-3 nmd:grid-cols-2 grid-col-1 justify-center gap-4 xl:ml-52">
            <div className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center">
                <p className="font-bold text-xl">C'est quoi?</p>
                <MusicalNoteIcon className="w-32"/>
                Un jeu musical collaboratif pour apprendre à improviser.
            </div>
            
            <div className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center">
                <h1 className="font-bold text-xl">C'est pour qui?</h1>
                <UsersIcon className="w-32"/>
                Deux joueurs. Dyade prof-élève ou pour deux élèves. Joueurs de tous les âges et tous les niveaux.
            </div>
            
            <a href="https://www.roblox.com/games/5984084686/Improvisondon" target="_blank" rel="noreferrer" className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center hover:ring-2">
                <h1 className="font-bold text-xl">Jouer en ligne</h1>
                <Image src={Roblox_Logo} className="w-32 self-center" alt="Logo Roblox"/>
                <p>La version en ligne est accessible gratuitement sur Roblox. Cliquez ici pour s'y rendre!</p>
            </a>

            <a href="app/static/files/Improvison_Règles numériques.pdf" target="_blank" rel="noreferrer" className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center hover:ring-2">
                <h1 className="font-bold text-xl">Règles du jeu</h1>
                <BookOpenIcon className=" w-32"/>
                Consulter et téléchargez les règles ici.
            </a>

            <div className="flex flex-col border border-neutral-500 rounded-lg bg-neutral-400 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center">
                <h1 className="font-bold text-xl">Version physique</h1>
                <PuzzlePieceIcon className="w-32"/>
                La version physique du jeu est en cours de développement. Restez à l’affût!
            </div>

            <div className="flex flex-col border border-neutral-500 rounded-lg bg-neutral-400 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center">
                <h1 className="font-bold text-xl">Résultats</h1>
                <PresentationChartLineIcon className="w-32"/>
                Nous analysons présentement nos données de recherche. Les résultats seront disponibles ici sous peu.
            </div>
        </div>

    );
}

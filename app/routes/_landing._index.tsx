/* @ts-ignore */
import type { MetaFunction } from "@remix-run/deno";

import { BookOpenIcon, PresentationChartLineIcon, PuzzlePieceIcon, UsersIcon, UserIcon } from '@heroicons/react/24/outline'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import { Image, Card, CardHeader, CardBody, CardFooter, Link } from "@nextui-org/react";
import { Roblox_Logo } from "../static/images"

export const meta: MetaFunction = () => {
  return [
    { title: "Improvison" },
    { name: "description", content: "Ce projet vise à développer du matériel pédagogique basé sur les principes de l’apprentissage par le jeu afin de faciliter l’acquisition, chez les instrumentistes de niveau débutant ou intermédiaire, de stratégies d’improvisation musicale qui sont mises en œuvre par les experts du domaine et à documenter les impacts perçus de ce matériel." },
  ];
};

export default function Improvison() {

    return (
        <div className="grid nlg:grid-cols-3 nmd:grid-cols-2 grid-col-1 justify-center gap-4 xl:ml-52">
            <Card className="bg-bleu-pale/20 p-4 text-white border border-neutral-500 shadow-md shadow-black" as={Link} href="solo/jeu">
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
            <Card className="bg-bleu-pale/20 p-4 text-white border border-neutral-500 shadow-md shadow-black" isDisabled>
                <CardHeader className="justify-center">
                    <p className="font-bold text-xl">Résultats</p>
                </CardHeader>
                <CardBody>
                    <PresentationChartLineIcon className="w-32 self-center"/>
                </CardBody>
                <CardFooter className="justify-center text-center text-lg">
                    <p>Nous analysons présentement nos données de recherche. Les résultats seront disponibles ici sous peu.</p>
                </CardFooter>
            </Card>
        </div>

    );
}

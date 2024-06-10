import * as React from "react"

import { PuzzlePieceIcon, UsersIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { Image, Card, CardHeader, CardBody, CardFooter, Link } from "@nextui-org/react"
import { Improvison_Règles_numériques } from "../../static/files"
import { Roblox_Logo, champi, tortue, modulation, latin_jazz, jeu_num_fr, jeu_num2_fr, jeu_num3_fr } from "../../static/images"
import { json, type LoaderFunctionArgs, type MetaFunction} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import i18nextServer from "~/i18next.server";

export async function loader({ request }: LoaderFunctionArgs) {
  
    const t = await i18nextServer.getFixedT(request);
  
    const translations = {
        title: t('pages.landingDuo.title'),
        description: t('<pages className="landingDuo"></pages>description'),
    }
  
    return json({ translations });
  }

export const meta: MetaFunction<typeof loader> = ({ data }) => {

    if (!data) return  []

    return [
        { title: data.translations.title },
        { name: "description", content: data.translations.description },
    ];
};

export default function LandingDuo() {

	const translations = useLoaderData<typeof loader>().translations

  	return (
		<div>
			<h1 className="font-bold text-xl self-center">{translations.title}</h1>
			<div className="flex flex-col xl:flex-row gap-4 justify-center items-center mb-4 flex-1">
				<Card className="bg-bleu-pale/20 h-full w-fit max-w-80 aspect-square xl:w-1/3 p-4 text-white border border-neutral-500 shadow-md shadow-black" as={Link} href="https://www.roblox.com/games/5984084686/Improvisondon" target="_blank" rel="noreferrer">
					<CardHeader className="justify-center">
						<p className="font-bold text-xl">Jouer en ligne</p>
					</CardHeader>
					<CardBody className="items-center">
						<Image src={Roblox_Logo} className="w-24 self-center" alt="Logo Roblox"/>
					</CardBody>
					<CardFooter className="justify-center text-center text-lg">
						<p>La version en ligne est accessible gratuitement sur Roblox. Cliquez ici pour y jouer!</p>
					</CardFooter>
				</Card>
				<Card className="bg-bleu-pale/20 h-full w-fit xl:w-1/3 max-w-80 aspect-square p-4 text-white border border-neutral-500 shadow-md shadow-black" as={Link} href="app/static/files/Improvison_Règles numériques.pdf" target="_blank" rel="noreferrer">
					<CardHeader className="justify-center">
						<p className="font-bold text-xl">Règles du jeu en ligne</p>
					</CardHeader>
					<CardBody className="items-center">
						<BookOpenIcon className=" w-32"/>
					</CardBody>
					<CardFooter className="justify-center text-center text-lg">
						<p>Consulter et téléchargez les règles du jeu en ligne ici.</p>
					</CardFooter>
				</Card>
				<Card className="bg-bleu-pale/20 h-full w-fit xl:w-1/3 max-w-80 aspect-square p-4 text-white border border-neutral-500 shadow-md shadow-black" isDisabled>
					<CardHeader className="justify-center">
						<p className="font-bold text-xl">Version physique</p>
					</CardHeader>
					<CardBody className="items-center">
						<PuzzlePieceIcon className="w-32"/>
					</CardBody>
					<CardFooter className="justify-center text-center text-lg">
						<p>Les règles et fichiers à imprimer pour jouer à la version physique du jeu sont disponibles ici.</p>
					</CardFooter>
				</Card>
			</div>
			<div className="flex flex-col">
				<div className="py-8 flex flex-col">           
					<div className="">
						<div className="md:float-right flex flex-col p-8 items-center">
							<Image src={champi} className="max-w-xxs -rotate-12" alt="Exemple de carte thème d'improvison: Champignons"/>
							<Image src={tortue} className="max-w-xxs rotate-12" alt="Exemple de carte thème d'improvison: Tortue de mer" />
						</div>
						Improvison Duo est un jeu collaboratif qui se joue à 2 joueurs. À chaque tour, les joueurs s’échangent les rôles d’improvisateur et de devineur. L’improvisateur choisi des cartes « thèmes » et « contraintes » qu’il devra faire deviner au devineur grâce à une improvisation musicale. Le but du jeu est de deviner collectivement un nombre prédéterminé de cartes « thème » et « contraintes » avant que le minuteur arrive à 00:00.
						<p className="italic pt-2">Vous pouvez aussi jouer en mode infini pour enlever la contrainte de temps.</p>
					</div>
					<div>
						<div className="md:float-left flex flex-col p-8 items-center">
							<Image src={modulation} className="max-w-xxs border-2 border-bleu-fonce rounded-lg rotate-12" alt="Exemple de carte contrainte d'improvison: Modulation"/>
							<Image src={latin_jazz} className="max-w-xxs border-2 border-bleu-fonce rounded-lg -rotate-12" alt="Exemple de carte contrainte d'improvison: Latin Jazz"/>
						</div>
						<h1 className="text-lg font-bold">Déroulement d'une partie</h1>
						<ol className="ml-4">
							<li>1. L’improvisateur choisit 1-2 thème et 0-2 contraintes et les place face cachée.</li>
							<li>1b. (Optionnel). L’improvisateur tourne la roulette des catégories.</li>
							<li>2. L’improvisateur improvise.</li>
							<li>3. Le devineur place ses choix face cachée.</li>
							<li>4. L’improvisateur arrête de jouer, puis les deux joueurs tournent leurs cartes sélection.</li>
							<li>5. Avancez les pions selon le nombre de cartes devinées.</li>
							<li>6. Remplacez les cartes du plateau de jeu.</li>
							<li>7. Les rôles sont inversés.</li>
							<li>8. Le jeu se poursuit jusqu’à ce que les pions franchissent la ligne d’arrivée (partie gagnée) ou si le sablier arrive à sa fin (partie perdue).</li>
						</ol>
					</div>
				</div>
				<Link href={Improvison_Règles_numériques} target="_blank" rel="noreferrer" aria-label="Règles d'improvison" className="underline hover:text-neutral-400">Consulter et télécharger les règles complètes ici.</Link>
				<p>Voici un apperçu du jeu en ligne :</p>
				<div className="flex flex-col gap-2 mt-8">
					<Image src={jeu_num_fr} className="w-fit self-end rounded-md" removeWrapper alt="Capture d'écran d'Improvison sur Roblox : page principale."/>
					<Image src={jeu_num2_fr} className="w-fit rounded-md" alt="Capture d'écran d'Improvison sur Roblox : pop-up."/>
					<Image src={jeu_num3_fr} className="w-fit self-end rounded-md" removeWrapper alt="Capture d'écran d'Improvison sur Roblox : menu d'accueil"/>
				</div>
				{/* <div className={`${intl.locale === "en-CA" ? "inline": "hidden"} flex flex-col gap-2 mt-8 self-end`}>
					<Image src="../images/jeu_num_en.webp" className="w-fit self-end rounded-md" alt="Capture d'écran d'Improvison sur Roblox : page principale."/>
					<Image src="../images/jeu_num2_en.webp" className="w-fit rounded-md" alt="Capture d'écran d'Improvison sur Roblox : pop-up."/>
					<Image src="../images/jeu_num3_en.webp" className="w-fit self-end rounded-md" alt="Capture d'écran d'Improvison sur Roblox : menu d'accueil"/>
				</div> */}
			</div>
		</div>
	)
}


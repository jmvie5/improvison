import * as React from "react"
import Layout from "../components/Layout"
import { PuzzlePieceIcon } from '@heroicons/react/24/outline'
import { Seo } from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import regles from "../../downloads/regles_fr.pdf"

const GamePage = () => {
  return (
    <Layout pageTitle="Le jeu">
        <div className="flex flex-col xs:flex-row gap-4 justify-center items-center mb-4">
			<a href="https://www.roblox.com/games/5984084686/Improvisondon" className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 gap-2 items-center">
				<h1 className="font-bold text-xl">Jouer en ligne</h1>
				<StaticImage src="../images/Roblox_Logo.svg" className="w-32 self-center" alt="Logo Roblox"/>
				<p>Version en ligne : la version en ligne est accessible gratuitement sur Roblox. Cliquez ici pour s'y rendre!</p>
			</a>
			<div className="flex flex-col border border-neutral-500 rounded-lg bg-gray-500 p-4 shadow-md shadow-black w-64 gap-2 items-center">
				<h1 className="font-bold text-xl">Version physique</h1>
				<PuzzlePieceIcon className="w-32"/>
				<p>La version physique du jeu est en cours de développement. Restez à l’affût!</p>
            </div>
        </div>
		<div>
			<div className="py-8 flex flex-col">           
				<div className="">
					<div className="md:float-right flex flex-col p-8 items-center">
						<StaticImage src="../images/champi.png" className="max-w-xxs -rotate-12" alt="Exemple de carte thème d'improvison: Champignons"/>
						<StaticImage src="../images/tortue.png" className="max-w-xxs rotate-12" alt="Exemple de carte thème d'improvison: Tortue de mer" />
					</div>
					Improvisondon est un jeu collaboratif qui se joue à 2 joueurs. À chaque tour, les joueurs s’échangent les rôles d’improvisateur et de devineur. L’improvisateur choisi des cartes « thèmes » et « contraintes » qu’il devra faire deviner au devineur grâce à une improvisation musicale. Le but du jeu est de deviner collectivement un nombre prédéterminé de cartes « thème » et « contraintes » avant que le minuteur arrive à 00:00.
					<p className="italic pt-2">Vous pouvez aussi jouer en mode infini pour enlever la contrainte de temps. </p>
				</div>
				<div>
					<div className="md:float-left flex flex-col p-8 items-center">
						<StaticImage src="../images/modulation.png" className="max-w-xxs border-2 border-bleu-fonce rounded-lg rotate-12" alt="Exemple de carte contrainte d'improvison: Modulation"/>
						<StaticImage src="../images/latin-jazz.png" className="max-w-xxs border-2 border-bleu-fonce rounded-lg -rotate-12" alt="Exemple de carte contrainte d'improvison: Latin Jazz"/>
					</div>
					<h1 className="text-lg font-bold">Déroulement d'une partie</h1>
					<ol className="ml-4">
						<li>1. L’improvisateur choisit 1-2 thème et 0-2 contraintes et les place face cachée. </li>
						<li>1b. (Optionnel). L’improvisateur tourne la roulette des catégories.</li>
						<li>2. L’improvisateur improvise.</li>
						<li>3. Le devineur place ses choix face cachée.</li>
						<li>4. L’improvisateur arrête de jouer, puis les deux joueurs tournent leurs cartes sélection. </li>
						<li>5. Avancez les pions selon le nombre de cartes devinées.</li>
						<li>6. Remplacez les cartes du plateau de jeu.</li>
						<li>7. Les rôles sont inversés</li>
						<li>8. Le jeu se poursuit jusqu’à ce que les pions franchissent la ligne d’arrivée (partie gagnée) ou si le sablier arrive à sa fin (partie perdue).</li>
					</ol>
				</div>
			</div>
			
			<a href={regles} target="_blank" rel="noreferrer" className="underline">Consulter et télécharger les règles complètes ici.</a>
		</div>    
        
    </Layout>
  )
}

export default GamePage

export const Head = () => (
	<Seo title="Jeu" description="Description du jeu, lien vers le jeu en ligne et lien pour consulter et télécharger les règles."/>
)

	

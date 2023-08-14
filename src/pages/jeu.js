import * as React from "react"
import Layout from "../components/Layout"
import { PuzzlePieceIcon } from '@heroicons/react/24/outline'
import { Seo } from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import { FormattedMessage } from "react-intl"
import { useIntl } from "react-intl"
import { graphql } from "gatsby"

const GamePage = () => {
	const intl = useIntl()
  	return (
		<Layout pageTitle="Le jeu">
			<div className="flex flex-col xs:flex-row gap-4 justify-center items-center mb-4">
				<a href="https://www.roblox.com/games/5984084686/Improvisondon" target="_blank" rel="noreferrer" className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center hover:ring-2">
					<h1 className="font-bold text-xl"><FormattedMessage id="Jouer en ligne"/></h1>
					<StaticImage src="../images/Roblox_Logo.svg" className="w-32 self-center" alt="Logo Roblox"/>
					<FormattedMessage id="La version en ligne est accessible gratuitement sur Roblox. Cliquez ici pour s'y rendre!"/>
				</a>
				<div className="flex flex-col border border-neutral-500 rounded-lg bg-neutral-400 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center">
					<h1 className="font-bold text-xl"><FormattedMessage id="Version physique"/></h1>
					<PuzzlePieceIcon className="w-32"/>
					<FormattedMessage id="La version physique du jeu est en cours de développement. Restez à l’affût!"/>
				</div>
			</div>
			<div>
				<div className="py-8 flex flex-col">           
					<div className="">
						<div className="md:float-right flex flex-col p-8 items-center">
							<StaticImage src="../images/champi.png" className="max-w-xxs -rotate-12" alt="Exemple de carte thème d'improvison: Champignons"/>
							<StaticImage src="../images/tortue.png" className="max-w-xxs rotate-12" alt="Exemple de carte thème d'improvison: Tortue de mer" />
						</div>
						<FormattedMessage id="Improvison est un jeu collaboratif qui se joue à 2 joueurs. À chaque tour, les joueurs s’échangent les rôles d’improvisateur et de devineur. L’improvisateur choisi des cartes « thèmes » et « contraintes » qu’il devra faire deviner au devineur grâce à une improvisation musicale. Le but du jeu est de deviner collectivement un nombre prédéterminé de cartes « thème » et « contraintes » avant que le minuteur arrive à 00:00."/>
						<p className="italic pt-2"><FormattedMessage id="Vous pouvez aussi jouer en mode infini pour enlever la contrainte de temps."/></p>
					</div>
					<div>
						<div className="md:float-left flex flex-col p-8 items-center">
							<StaticImage src="../images/modulation.png" className="max-w-xxs border-2 border-bleu-fonce rounded-lg rotate-12" alt="Exemple de carte contrainte d'improvison: Modulation"/>
							<StaticImage src="../images/latin-jazz.png" className="max-w-xxs border-2 border-bleu-fonce rounded-lg -rotate-12" alt="Exemple de carte contrainte d'improvison: Latin Jazz"/>
						</div>
						<h1 className="text-lg font-bold"><FormattedMessage id="Déroulement d'une partie"/></h1>
						<ol className="ml-4">
							<li><FormattedMessage id="1. L’improvisateur choisit 1-2 thème et 0-2 contraintes et les place face cachée."/></li>
							<li><FormattedMessage id="1b. (Optionnel). L’improvisateur tourne la roulette des catégories."/></li>
							<li><FormattedMessage id="2. L’improvisateur improvise."/></li>
							<li><FormattedMessage id="3. Le devineur place ses choix face cachée."/></li>
							<li><FormattedMessage id="4. L’improvisateur arrête de jouer, puis les deux joueurs tournent leurs cartes sélection."/></li>
							<li><FormattedMessage id="5. Avancez les pions selon le nombre de cartes devinées."/></li>
							<li><FormattedMessage id="6. Remplacez les cartes du plateau de jeu."/></li>
							<li><FormattedMessage id="7. Les rôles sont inversés."/></li>
							<li><FormattedMessage id="8. Le jeu se poursuit jusqu’à ce que les pions franchissent la ligne d’arrivée (partie gagnée) ou si le sablier arrive à sa fin (partie perdue)."/></li>
						</ol>
					</div>
				</div>
				<a href={`${intl.locale === "fr-CA" ? "/Improvison_Règles numériques.pdf" : "/Improvison_Digital Rules.pdf"}`} target="_blank" rel="noreferrer" aria-label="Règles d'improvison" className="underline hover:text-neutral-400"><FormattedMessage id="Consulter et télécharger les règles complètes ici."/></a>
				<p><FormattedMessage id="Voici un apperçu du jeu en ligne :"/></p>
				<div className={`${intl.locale === "fr-CA" ? "inline": "hidden"} flex flex-col gap-2 mt-8 self-end`}>
					<StaticImage src="../images/jeu_num_fr.webp" className="w-fit self-end rounded-md" alt="Capture d'écran d'Improvison sur Roblox : page principale."/>
					<StaticImage src="../images/jeu_num2_fr.webp" className="w-fit rounded-md" alt="Capture d'écran d'Improvison sur Roblox : pop-up."/>
					<StaticImage src="../images/jeu_num3_fr.webp" className="w-fit self-end rounded-md" alt="Capture d'écran d'Improvison sur Roblox : menu d'accueil"/>
				</div>
				<div className={`${intl.locale === "en-CA" ? "inline": "hidden"} flex flex-col gap-2 mt-8 self-end`}>
					<StaticImage src="../images/jeu_num_en.webp" className="w-fit self-end rounded-md" alt="Capture d'écran d'Improvison sur Roblox : page principale."/>
					<StaticImage src="../images/jeu_num2_en.webp" className="w-fit rounded-md" alt="Capture d'écran d'Improvison sur Roblox : pop-up."/>
					<StaticImage src="../images/jeu_num3_en.webp" className="w-fit self-end rounded-md" alt="Capture d'écran d'Improvison sur Roblox : menu d'accueil"/>
				</div>
			</div>
		</Layout>
	)
}

export default GamePage


export const Head = (props) => (
	<Seo title={props.data.pageTitle.message} description={props.data.pageDescription.message}/>
)

export const query = graphql`
  query GamePage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "Le jeu" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "Description du jeu, lien vers le jeu en ligne et lien pour consulter et télécharger les règles." }) {
      message
    }
  }
`;

	

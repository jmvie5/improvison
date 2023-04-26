import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import { BookOpenIcon, PresentationChartLineIcon, PuzzlePieceIcon, UsersIcon } from '@heroicons/react/24/outline'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import regles from "../../downloads/regles_fr.pdf"


const IndexPage = () => {

    return (
        <Layout>
            <div className="grid nlg:grid-cols-3 nmd:grid-cols-2 grid-col-1 justify-center gap-4 xl:ml-52">
                <div className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 gap-2 items-center">
                    <h1 className="font-bold text-xl">C'est quoi?</h1>
                    <MusicalNoteIcon className="w-32"/>
                    <p>Un jeu musical collaboratif pour apprendre à improviser. </p>
                </div>
                
                <div className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 gap-2 items-center">
                    <h1 className="font-bold text-xl">C'est pour qui?</h1>
                    <UsersIcon className="w-32"/>
                    <p>Deux joueurs. Dyade prof-élève ou pour deux élèves. Joueurs de tous les âges et tous les niveaux. </p>
                </div>
                
                <a href="https://www.roblox.com/games/5984084686/Improvisondon" className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 gap-2 items-center">
                    <h1 className="font-bold text-xl">Jouer en ligne</h1>
                    <StaticImage src="../images/Roblox_Logo.svg" className="w-32 self-center" alt="Logo Roblox"/>
                    <p>Version en ligne : la version en ligne est accessible gratuitement sur Roblox. Cliquez ici pour s'y rendre!</p>
                </a>

                <a href={regles} target="_blank" rel="noreferrer" className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 gap-2 items-center">
                    <h1 className="font-bold text-xl">Règles du jeu</h1>
                    <BookOpenIcon className=" w-32"/>
                    <p>Consulter et téléchargez les règles ici.</p>
                </a>

                <div className="flex flex-col border border-neutral-500 rounded-lg bg-gray-500 p-4 shadow-md shadow-black w-64 gap-2 items-center">
                    <h1 className="font-bold text-xl">Version physique</h1>
                    <PuzzlePieceIcon className="w-32"/>
                    <p>La version physique du jeu est en cours de développement. Restez à l’affût!</p>
                </div>

                <div className="flex flex-col border border-neutral-500 rounded-lg bg-gray-500 p-4 shadow-md shadow-black w-64 gap-2 items-center">
                    <h1 className="font-bold text-xl">Résultats</h1>
                    <PresentationChartLineIcon className="w-32"/>
                    <p>Nous analysons présentement nos données de recherche. Les résultats seront disponibles ici sous peu.</p>
                </div>
            </div>
            
            
        </Layout>
  )
}

export default IndexPage

export const Head = () => {
  <Seo />
}

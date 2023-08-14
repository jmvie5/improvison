import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import { BookOpenIcon, PresentationChartLineIcon, PuzzlePieceIcon, UsersIcon } from '@heroicons/react/24/outline'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import { graphql } from "gatsby"
import { useIntl, FormattedMessage } from "react-intl"


const IndexPage = () => {
    const intl = useIntl()
    return (
        <Layout>
            <div className="grid nlg:grid-cols-3 nmd:grid-cols-2 grid-col-1 justify-center gap-4 xl:ml-52">
                <div className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center">
                    <p className="font-bold text-xl"><FormattedMessage id="C'est quoi?"/></p>
                    <MusicalNoteIcon className="w-32"/>
                    <FormattedMessage id="Un jeu musical collaboratif pour apprendre à improviser."/>
                </div>
                
                <div className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center">
                    <h1 className="font-bold text-xl"><FormattedMessage id="C'est pour qui?"/></h1>
                    <UsersIcon className="w-32"/>
                    <FormattedMessage id="Deux joueurs. Dyade prof-élève ou pour deux élèves. Joueurs de tous les âges et tous les niveaux."/>
                </div>
                
                <a href="https://www.roblox.com/games/5984084686/Improvisondon" className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center hover:ring-2">
                    <h1 className="font-bold text-xl"><FormattedMessage id="Jouer en ligne"/></h1>
                    <StaticImage src="../images/Roblox_Logo.svg" className="w-32 self-center" alt="Logo Roblox"/>
                    <FormattedMessage id="La version en ligne est accessible gratuitement sur Roblox. Cliquez ici pour s'y rendre!"/>
                </a>

                <a href={`${intl.locale === "fr-CA" ? "/Improvison_Règles numériques.pdf" : "/Improvison_Digital Rules.pdf"}`} className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center hover:ring-2">
                    <h1 className="font-bold text-xl"><FormattedMessage id="Règles du jeu"/></h1>
                    <BookOpenIcon className=" w-32"/>
                    <FormattedMessage id="Consulter et téléchargez les règles ici."/>
                </a>

                <div className="flex flex-col border border-neutral-500 rounded-lg bg-neutral-400 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center">
                    <h1 className="font-bold text-xl"><FormattedMessage id="Version physique"/></h1>
                    <PuzzlePieceIcon className="w-32"/>
                    <FormattedMessage id="La version physique du jeu est en cours de développement. Restez à l’affût!"/>
                </div>

                <div className="flex flex-col border border-neutral-500 rounded-lg bg-neutral-400 p-4 shadow-md shadow-black w-64 h-80 gap-2 items-center">
                    <h1 className="font-bold text-xl"><FormattedMessage id="Résultats"/></h1>
                    <PresentationChartLineIcon className="w-32"/>
                    <FormattedMessage id="Nous analysons présentement nos données de recherche. Les résultats seront disponibles ici sous peu."/>
                </div>
            </div>
        </Layout>
  )
}

export default IndexPage


export const Head = () => (
  <Seo />
)

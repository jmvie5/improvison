import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import { BookOpenIcon, PresentationChartLineIcon, PuzzlePieceIcon, UsersIcon } from '@heroicons/react/24/outline'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import { Trans } from 'gatsby-plugin-react-i18next';
import { graphql } from "gatsby"


const IndexPage = () => {

    return (
        <Layout>
            <div className="grid nlg:grid-cols-3 nmd:grid-cols-2 grid-col-1 justify-center gap-4 xl:ml-52">
                <div className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 gap-2 items-center">
                    <p className="font-bold text-xl"><Trans>C'est quoi?</Trans></p>
                    <MusicalNoteIcon className="w-32"/>
                    <Trans>Un jeu musical collaboratif pour apprendre à improviser.</Trans>
                </div>
                
                <div className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 gap-2 items-center">
                    <h1 className="font-bold text-xl">C'est pour qui?</h1>
                    <UsersIcon className="w-32"/>
                    <p>Deux joueurs. Dyade prof-élève ou pour deux élèves. Joueurs de tous les âges et tous les niveaux. </p>
                </div>
                
                <a href="https://www.roblox.com/games/5984084686/Improvisondon" className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 gap-2 items-center hover:ring-2">
                    <h1 className="font-bold text-xl">Jouer en ligne</h1>
                    <StaticImage src="../images/Roblox_Logo.svg" className="w-32 self-center" alt="Logo Roblox"/>
                    <p>Version en ligne : la version en ligne est accessible gratuitement sur Roblox. Cliquez ici pour s'y rendre!</p>
                </a>

                <a href="/Improvison_Règles numériques.pdf" className="flex flex-col border border-neutral-500 rounded-lg bg-bleu-pale/20 p-4 shadow-md shadow-black w-64 gap-2 items-center hover:ring-2">
                    <h1 className="font-bold text-xl">Règles du jeu</h1>
                    <BookOpenIcon className=" w-32"/>
                    <p>Consulter et téléchargez les règles ici.</p>
                </a>

                <div className="flex flex-col border border-neutral-500 rounded-lg bg-neutral-400 p-4 shadow-md shadow-black w-64 gap-2 items-center">
                    <h1 className="font-bold text-xl">Version physique</h1>
                    <PuzzlePieceIcon className="w-32"/>
                    <p>La version physique du jeu est en cours de développement. Restez à l’affût!</p>
                </div>

                <div className="flex flex-col border border-neutral-500 rounded-lg bg-neutral-400 p-4 shadow-md shadow-black w-64 gap-2 items-center">
                    <h1 className="font-bold text-xl">Résultats</h1>
                    <PresentationChartLineIcon className="w-32"/>
                    <p>Nous analysons présentement nos données de recherche. Les résultats seront disponibles ici sous peu.</p>
                </div>
            </div>
            
            
        </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export const Head = () => (
  <Seo />
)

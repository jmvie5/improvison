import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"

const GamePage = () => {
  return (
    <Layout pageTitle="Jeu">
        <div>
            <p>Le jeu est disponible sur Roblox avec le lien suivant: <a href="https://www.roblox.com/games/5984084686/Improvisondon" className="underline">https://www.roblox.com/games/5984084686/Improvisondon</a></p>
        </div>
        <div className="float-right flex flex-col">
                    <StaticImage src="../images/champi.png" className="max-w-xxs -rotate-12"/>
                    <StaticImage src="../images/tortue.png" className="max-w-xxs rotate-12" />
                </div>
        <div className="py-4">            
            <h1 className="text-lg font-bold">Règles</h1>
            <div>
                Improvisondon est un jeu collaboratif qui se joue à 2 joueurs. À chaque tour, les joueurs s’échangent les rôles d’improvisateur et de devineur. L’improvisateur choisi des cartes « thèmes » et « contraintes » qu’il devra faire deviner au devineur grâce à une improvisation musicale. Le but du jeu est de deviner collectivement un nombre prédéterminé de cartes « thème » et « contraintes » avant que le minuteur arrive à 00:00. 
                <p className="italic pt-2">Vous pouvez aussi jouer en mode infini pour enlever la contrainte de temps. </p>
            </div>
        </div>
        
    </Layout>
  )
}

export default GamePage

export const Head = () => {
  <Seo title="Jeu"/>
}

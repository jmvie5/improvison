import * as React from "react"
import NavLinks from "../components/NavLinks"
import { Seo } from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import useWindowSize from "../hooks/useWindowSize"

const IndexPage = () => {

    let isMobile

    var windowWidth = useWindowSize().width

    if ( windowWidth < 700) {
        isMobile = true;
    } else if (windowWidth > 700) {
        isMobile = false;
    };

    return (
        <main className="bg-bleu-pale flex flex-col min-h-screen">
            <NavLinks />
            <div className="flex m-4">
                {isMobile ? <div/>: 
                    <div className="flex flex-col justify-center float-left">
                        <StaticImage src="../images/fantastique.png" className="lg:w-60 lg:h-32 w-44 h-24 -rotate-12"/>
                        <StaticImage src="../images/surpris.png" className="lg:w-60 lg:h-32 w-44 h-24 rotate-12" />
                    </div>
                }
                <StaticImage src="../images/improvison_accueil.png" className="m-8"/>
                {isMobile ? <dix/> : 
                    <div className="flex flex-col justify-center">
                        <div className="grid place-content-center text-2xl font-bold border-4 lg:w-60 lg:h-32 w-44 h-24 rounded-xl bg-white text-bleu-fonce rotate-12">Crescendo</div>
                        <div className="grid place-content-center text-2xl font-bold border-4 lg:w-60 lg:h-32 w-44 h-24 rounded-xl bg-white text-bleu-fonce -rotate-12 "><p className="border">3/4</p></div>
                    </div>}
                
            </div>
            
            <div className="flex flex-col gap-4 pb-4">
                <div className="mx-8 p-6 bg-bleu-fonce rounded-xl text-white w-9/12">
                    <p>Jeu d'improvisation musicale développé et testé à l'aide d'une approche de recherche-développement.</p>
                </div>
            </div>
            
            
        </main>

  )
}

export default IndexPage

export const Head = () => {
  <Seo />
}

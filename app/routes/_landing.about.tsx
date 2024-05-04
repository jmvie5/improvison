import * as React from "react"
import { Image } from "@nextui-org/react"
import { thumbnail_Photo_JPD } from "../static/images"
import { MetaFunction } from "@remix-run/node"

export default function AboutPage() {
    return (

        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl self-center">L'histoire du jeu</h1>
            <div className="flex flex-col xs:inline">
                <h2 className="font-semi-bold text-xl">Chercheur principal</h2>

                <Image 
                    className="float-right max-w-xs aspect-square rounded-lg m-2 self-center" 
                    src={thumbnail_Photo_JPD} alt="Jean-Philippe Després, Ph. D."
                    removeWrapper    
                />
                
                <p>
                    <a className="underline hover:text-neutral-400" href="https://www.mus.ulaval.ca/notre-faculte/repertoire-du-personnel/jean-philippe-despres">Jean-Philippe Després</a> (Ph. D.) est professeur agrégé à la Faculté de musique de l’Université Laval. Il mène des projets de recherches subventionnés autour des approches inclusives en enseignement-apprentissage de la musique et du développement de matériel pédagogique ludique en musique. Ses recherches ont mené à diverses publications, notamment dans les revues scientifiques British Journal of Learning Disabilities, Frontiers in Education, Research Studies in Music Education, Journal of Research in Music Education, Thinking Skills and Creativity, la Revue scientifique en ligne de l’Observatoire interdisciplinaire de création et de recherche en musique, Intersections : Canadian Journal of Music/Revue canadienne de musique, Les Cahiers de la Société québécoise de recherche en musique et Revista internacional de educación musical. Ses principaux centres d’intérêt sont les approches innovantes et inclusives en pédagogie musicale, la créativité, l’improvisation et l’apprentissage par le jeu.
                </p>

                <h2 className="font-semi-bold text-xl mt-8">Idéation</h2>
                <p>
                    Improvison découle des résultats de mon projet doctoral (FRQ-SC, CRSH et OICRM), intitulé <a href=" https://doi.org/10.7202/1040300ar" className="underline hover:text-neutral-400">Processus d’apprentissage et de création des improvisateurs experts en musique classique</a> qui a offert un nouvel éclairage sur le parcours d’apprentissage, les stratégies de création et les approches d’enseignement des improvisateurs experts en musique classique. 
                </p>
                Plus précisément, les résultats de mon projet doctoral ont montré un certain écart entre les méthodes pédagogiques disponibles et la pratique des experts en improvisation musicale (Després, 2017; Després, Burnard, Dubé et Stévance, 2015, 2017). En effet, selon mes résultats, les experts font appel à bon nombre de stratégies d’improvisation musicale qui ne sont pas centrées sur le choix de la hauteur des notes, alors que les méthodes d’improvisation actuellement disponibles se concentrent principalement sur l’acquisition de stratégies centrées sur celui-ci. Ce projet s’intéresse également à l’apport de l’apprentissage par le jeu pour soutenir le développement de compétences créatives, telles que manifestées lors de l’improvisation musicale.
                Ainsi, ce projet vise à développer du matériel pédagogique basé sur les principes de l’apprentissage par le jeu afin de faciliter l’acquisition, chez les instrumentistes de niveau débutant ou intermédiaire, de stratégies d’improvisation musicale qui sont mises en œuvre par les experts du domaine et à documenter les impacts perçus de ce matériel.
            </div>
            
        </div>
            
    )
}

export const meta: MetaFunction = () => {
    return [
      { title: "À propos" },
      { name: "description", content: "Ce projet vise à développer du matériel pédagogique basé sur les principes de l’apprentissage par le jeu afin de faciliter l’acquisition, chez les instrumentistes de niveau débutant ou intermédiaire, de stratégies d’improvisation musicale qui sont mises en œuvre par les experts du domaine et à documenter les impacts perçus de ce matériel." },
    ];
  };
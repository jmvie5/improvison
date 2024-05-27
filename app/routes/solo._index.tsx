import { Button } from '@nextui-org/react';
import { Link } from '@remix-run/react';


export default function SoloIndex() {


    return (
        <div className='flex flex-col p-8'>
            <div className='flex flex-col sm:flex-row justify-around sm:px-8 pb-8 gap-4'>
                <Button as={Link} to={'/solo/jeu'} className='w-full sm:w-96 h-24 text-4xl'>Jouer</Button>
                <Button as={Link} to={'/solo/profile'} className='w-full sm:w-96 h-24 text-4xl'>Mon profil</Button>
            </div>
            <div className='flex flex-col gap-2 max-w-[800px] self-center'>
                <p className='border-b-2 pb-8'>
                    Improvisathon est une plateforme gamifiée en développement dédiée à l’apprentissage autonome de l’improvisation musicale. Elle s’adresse aux apprenants de niveau intermédiaire (collège ou universitaire) qui souhaitent apprendre à improviser en ligne, à leur rythme, tout en joignant une communauté d’apprentissage. L’apprenant peut cheminer avec une certaine liberté à travers les activités proposées et choisir une concentration « classique » ou « jazz »
                </p>
                <h3 className='font-bold pt-8'>Pour en savoir plus</h3>
                <p>
                    Improvisathon est le 2e projet pédagogique issu d’un projet de recherche intitulé L'improvisation musicale : Une approche ludique pour soutenir la littératie musicale, soutenu par le FRQ-SC. 
                </p>
                <p>
                    Ce projet découle des résultats de mon doctorat  (FRQ-SC, CRSH et OICRM), intitulé <a href=" https://doi.org/10.7202/1040300ar" className="underline hover:text-neutral-400">Processus d’apprentissage et de création des improvisateurs experts en musique classique</a> qui a offert un nouvel éclairage sur le parcours d’apprentissage, les stratégies de création et les approches d’enseignement des improvisateurs experts en musique classique. 
                </p>
                <p>
                    Plus précisément, les résultats de mon projet doctoral ont montré un certain écart entre les méthodes pédagogiques disponibles et la pratique des experts en improvisation musicale (Després, 2017; Després, Burnard, Dubé et Stévance, 2015, 2017). En effet, selon mes résultats, les experts font appel à bon nombre de stratégies d’improvisation musicale qui ne sont pas centrées sur le choix de la hauteur des notes, alors que les méthodes d’improvisation actuellement disponibles se concentrent principalement sur l’acquisition de stratégies centrées sur celui-ci. 
                </p>
                <p>
                    Ce projet s’intéresse également à l’apport de l’apprentissage par le jeu pour soutenir le développement de compétences créatives, telles que manifestées lors de l’improvisation musicale. Ainsi, ce projet vise à développer du matériel pédagogique basé sur les principes de l’apprentissage par le jeu afin de faciliter l’acquisition, chez les instrumentistes de niveau intermédiaire, de stratégies d’improvisation musicale qui sont mises en œuvre par les experts du domaine et à documenter les impacts perçus de ce matériel. 
                </p>
            </div>
        </div>
    )
}
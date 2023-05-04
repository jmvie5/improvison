import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import strategies from "../../downloads/Stratégies_d'improvisation_2022.pdf"

const SavoirPlusPage = () => {
  return (
    <Layout pageTitle="Pour en savoir plus">
		<div className="grid grid-cols-1 justify-center mb-4">
			<h1 className="font-bold text-xl pb-2">Autres jeux et matériels pédagogiques pour apprendre à improviser</h1>
			<div className="flex flex-col gap-2 ml-4 pb-8">
				<a href="https://tonic-music.myshopify.com/" className="underline text-xl">Tonic. The Music Improvisation Card Game</a>
				<ul className="ml-6 mb-2">
					<li>Jeu d’improvisation avec des cartes à piger.</li>
					<li>Une version PDF à télécharger (gratuite) du jeu est disponible en français et en anglais.</li>
					<li>Une version commerciale est également disponible. </li>
				</ul>
				<a href={strategies} target="_blank" rel="noreferrer" className="underline text-xl">Stratégies d'improvisations (PDF)</a>
				<p className="ml-6 mb-2">Liste de stratégie d’improvisation développée par Jean-Philippe Després. </p>
			</div>
			<div className="break-words grid grid-cols-1">
				<h1 className="font-bold text-xl mb-2">Références théoriques et scientigiques</h1>
				<ul className="inline-grid grid-col-1 gap-2 ml-4">
					<li className="-indent-4 break-words">Boller, S., et Kapp, K. (2017). Play to learn: Everything you need to know about designing effective learning games. Association for talent development.</li>
					<li className="-indent-4 break-words ">Després, J.-P. (2017a). Processus d’apprentissage et de création des improvisateurs experts en musique classique. Revue musicale OICRM, 4(1), 67‑85. <a href="https://doi.org/10.7202/1040300ar" className="underline">https://doi.org/10.7202/1040300ar</a></li>
					<li className="-indent-4 break-words ">Després, J.-P. (2017b). Processus d’apprentissage et de création des improvisateurs experts en musique classique [thèse de doctorat, Université Laval]. <a href="http://hdl.handle.net/20.500.11794/27566" className="underline">http://hdl.handle.net/20.500.11794/27566</a></li>
					<li className="-indent-4 break-words ">Després, J.-P., Burnard, P., Dubé, F. et Stévance, S. (2016). Expert improvisers in Western classical music learning pathways. Thinking Skills and Creativity, 22, 167‑179. <a href="https://doi.org/10.1016/j.tsc.2016.10.006" className="underline">https://doi.org/10.1016/j.tsc.2016.10.006</a></li>
					<li className="-indent-4 break-words ">Després, J.-P., Burnard, P., Dubé, F. et Stévance, S. (2017). Expert Western Classical Music Improvisers’ Strategies. Journal of Research in Music Education, 65(2), 139‑162. <a href="https://doi-org.acces.bibl.ulaval.ca/10.1177/0022429417710777" className="underline">https://doi-org.acces.bibl.ulaval.ca/10.1177/0022429417710777</a></li>
					<li className="-indent-4 break-words ">Easterday, M. W., Lewis, D. R., et Gerber, E. M. (2014). Design-based research process: Problems, phases, and applications. Boulder, CO: International Society of the Learning Sciences.</li>
					<li className="-indent-4 break-words ">Kratus, J. (1991). Growing with improvisation. Music Educators Journal, 78(4), 36‑40.</li>
					<li className="-indent-4 break-words ">Kratus, J. (1995). A Developmental Approach to Teaching Music Improvisation. International Journal of Music Education, 26(1), 27‑38. <a href="https://doi.org/10.1177/025576149502600103" className="underline">https://doi.org/10.1177/025576149502600103</a></li>
				</ul>
			</div>
		</div>
        
		
    </Layout>
  )
}

export default SavoirPlusPage

export const Head = () => (
  <Seo title="Pour en savoir plus" description="Matériel supplémentaire à consulter ainsi que les références théoriques et scientifiques"/>
)

import * as React from "react"
import { Link } from "@remix-run/react"
import { Stratégies_d_improvisation_2022 } from "../../static/files"
import { t } from "i18next"

export default function ImprovisonSavoirPlusPage() {
	return (

        <div className="grid grid-cols-1 justify-center mb-4">
            <h1 className="font-bold text-2xl pb-4">{t("pages.landingLearnMore.title")}</h1>
            <h2 className="font-bold text-xl pb-2">{t("pages.landingLearnMore.otherGames")}</h2>
            <div className="flex flex-col gap-2 ml-4 pb-8">
                <Link to={Stratégies_d_improvisation_2022} className="underline text-xl hover:text-neutral-400">Tonic. The Music Improvisation Card Game</Link>
                <ul className="ml-6 mb-2 list-disc">
                    <li>{t("pages.landingLearnMore.tonic1")}</li>
                    <li>{t("pages.landingLearnMore.tonic2")}</li>
                    <li>{t("pages.landingLearnMore.tonic3")}</li>
                    <li>{t("pages.landingLearnMore.tonic4")}</li>
                </ul>
                <Link to={Stratégies_d_improvisation_2022} className="underline text-xl hover:text-neutral-400" aria-label="Stratégies d'improvisations (PDF)">{t("pages.landingLearnMore.strategies.link")}</Link>
                <ul className="ml-6 mb-2 list-disc"> 
                    <li>{t("pages.landingLearnMore.strategies.desc")}</li>
                </ul>
            </div>
            <div className="break-words grid grid-cols-1">
                <h1 className="font-bold text-xl mb-2">{t("pages.landingLearnMore.refTitle")}</h1>
                <ul className="inline-grid grid-col-1 gap-2 ml-4">
                    {/* <li className="-indent-4 break-words">Boller, S., et Kapp, K. (2017). Play to learn: Everything you need to know about designing effective learning games. Association for talent development.</li> */}
                    <li className="-indent-4 break-words ">Després, J.-P. (2017a). Processus d’apprentissage et de création des improvisateurs experts en musique classique. Revue musicale OICRM, 4(1), 67‑85. <Link to="https://doi.org/10.7202/1040300ar" className="underline hover:text-neutral-400">https://doi.org/10.7202/1040300ar</Link></li>
                    <li className="-indent-4 break-words ">Després, J.-P. (2017b). Processus d’apprentissage et de création des improvisateurs experts en musique classique [thèse de doctorat, Université Laval]. <Link to="http://hdl.handle.net/20.500.11794/27566" className="underline hover:text-neutral-400">http://hdl.handle.net/20.500.11794/27566</Link></li>
                    <li className="-indent-4 break-words ">Després, J.-P., Burnard, P., Dubé, F. et Stévance, S. (2016). Expert improvisers in Western classical music learning pathways. Thinking Skills and Creativity, 22, 167‑179. <Link to="https://doi.org/10.1016/j.tsc.2016.10.006" className="underline hover:text-neutral-400">https://doi.org/10.1016/j.tsc.2016.10.006</Link></li>
                    <li className="-indent-4 break-words ">Després, J.-P., Burnard, P., Dubé, F. et Stévance, S. (2017). Expert Western Classical Music Improvisers’ Strategies. Journal of Research in Music Education, 65(2), 139‑162. <Link to="https://doi-org.acces.bibl.ulaval.ca/10.1177/0022429417710777" className="underline hover:text-neutral-400">https://doi-org.acces.bibl.ulaval.ca/10.1177/0022429417710777</Link></li>
                    {/* <li className="-indent-4 break-words ">Easterday, M. W., Lewis, D. R., et Gerber, E. M. (2014). Design-based research process: Problems, phases, and applications. Boulder, CO: International Society of the Learning Sciences.</li> */}
                    <li className="-indent-4 break-words ">Kratus, J. (1991). Growing with improvisation. Music Educators Journal, 78(4), 36‑40.</li>
                    <li className="-indent-4 break-words ">Kratus, J. (1995). A Developmental Approach to Teaching Music Improvisation. International Journal of Music Education, 26(1), 27‑38. <Link to="https://doi.org/10.1177/025576149502600103" className="underline hover:text-neutral-400">https://doi.org/10.1177/025576149502600103</Link></li>
                </ul>
            </div>
        </div>	
	)
}

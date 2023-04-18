import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"

const ReferencesPage = () => {
  return (
    <Layout pageTitle="Références">
        <ul className="flex flex-col gap-2 pl-8">
            <li className="-indent-4">Boller, S., et Kapp, K. (2017). Play to learn: Everything you need to know about designing effective learning games. Association for talent development.</li>
            <li className="-indent-4">Després, J.-P. (2017a). Processus d’apprentissage et de création des improvisateurs experts en musique classique. Revue musicale OICRM, 4(1), 67‑85. <a href="https://doi.org/10.7202/1040300ar" className="underline">https://doi.org/10.7202/1040300ar</a></li>
            <li className="-indent-4">Després, J.-P. (2017b). Processus d’apprentissage et de création des improvisateurs experts en musique classique [thèse de doctorat, Université Laval]. <a href="http://hdl.handle.net/20.500.11794/27566" className="underline">http://hdl.handle.net/20.500.11794/27566</a></li>
            <li className="-indent-4">Després, J.-P., Burnard, P., Dubé, F. et Stévance, S. (2016). Expert improvisers in Western classical music learning pathways. Thinking Skills and Creativity, 22, 167‑179. <a href="https://doi.org/10.1016/j.tsc.2016.10.006" className="underline">https://doi.org/10.1016/j.tsc.2016.10.006</a></li>
            <li className="-indent-4">Després, J.-P., Burnard, P., Dubé, F. et Stévance, S. (2017). Expert Western Classical Music Improvisers’ Strategies. Journal of Research in Music Education, 65(2), 139‑162. <a href="https://doi-org.acces.bibl.ulaval.ca/10.1177/0022429417710777" className="underline">https://doi-org.acces.bibl.ulaval.ca/10.1177/0022429417710777</a></li>
            <li className="-indent-4">Easterday, M. W., Lewis, D. R., et Gerber, E. M. (2014). Design-based research process: Problems, phases, and applications. Boulder, CO: International Society of the Learning Sciences.</li>
            <li className="-indent-4">Kratus, J. (1991). Growing with improvisation. Music Educators Journal, 78(4), 36‑40.</li>
            <li className="-indent-4">Kratus, J. (1995). A Developmental Approach to Teaching Music Improvisation. International Journal of Music Education, 26(1), 27‑38. <a href="https://doi.org/10.1177/025576149502600103" className="underline">https://doi.org/10.1177/025576149502600103</a></li>
        </ul>
    </Layout>
  )
}

export default ReferencesPage

export const Head = () => {
  <Seo title="Références"/>
}

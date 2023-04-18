import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"

const AboutPage = () => {
  return (
    <Layout pageTitle="À propos">
      <p>Improvison est un jeu favorisant l'apprentissage de l'improvisation musicale.</p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => {
  <Seo title="À propos"/>
}

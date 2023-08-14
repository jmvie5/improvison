import * as React from "react"
import { LocalizedLink } from "gatsby-plugin-i18n-l10n"
import { FormattedMessage } from "react-intl"
import Layout from "../components/Layout"


const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 : Page introuvable">
      <LocalizedLink to="/" className="underline hover:text-neutral-400"><FormattedMessage id="Retour à l'accueil"/></LocalizedLink>.
    </Layout>
        
  )
}

export default NotFoundPage

export const Head = () => <title>404</title>

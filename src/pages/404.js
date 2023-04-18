import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"


const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 : Page introuvalbe">
      <Link to="/" className="underline">Retour à l'accueil</Link>.
    </Layout>
        
  )
}

export default NotFoundPage

export const Head = () => <title>404</title>

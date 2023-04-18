import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          menuLinks {
            name
            link
            }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
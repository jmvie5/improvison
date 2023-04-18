import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Link } from "gatsby"

const NavLinks = () => {

    const siteMetadata = useSiteMetadata()

    return (
        <nav className="p-4">
            <ul className="flex flex-row gap-4 justify-center">
                {siteMetadata.menuLinks.map(link => (
                    <li key={link.name} className="list-none text-white hover:text-black">
                        <Link to={link.link}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavLinks
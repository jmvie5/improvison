import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Link } from "gatsby"

const NavLinks = () => {

    const siteMetadata = useSiteMetadata()

    return (
        <nav className="sm:p-4">
            <ul className="flex flex-row sm:flex-col divide-x sm:divide-x-0 sm:divide-y sm:max-w-xxs justify-center">
                {siteMetadata.menuLinks.map(link => (
                    <li key={link.name} className="flex list-none px-2 sm:px-0 sm:py-2 sm:pl-4 ">
                        <Link to={link.link} className="text-white hover:text-neutral-400 self-center">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavLinks
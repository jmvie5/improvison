import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { LocalizedLink, LanguageSwitcher } from "gatsby-plugin-i18n-l10n"
import { useIntl } from "react-intl"
import { FormattedMessage } from "react-intl"

const NavLinks = () => {

    const siteMetadata = useSiteMetadata()
    const intl = useIntl();
    
    return (
        <nav className="sm:p-4">
            <ul className="flex justify-center gap-4 mb-2">
                <LanguageSwitcher resolveLanguageName={(locale) => intl.formatMessage({ id: `${locale}` })} />
            </ul>
            <ul className="flex flex-row sm:flex-col divide-x sm:divide-x-0 sm:divide-y sm:max-w-xxs justify-center">
                {siteMetadata.menuLinks.map(link => (
                    <li key={link.name} className="flex list-none px-2 sm:px-0 sm:py-2 sm:pl-4 ">
                        <LocalizedLink to={link.link} className="text-white hover:text-neutral-400 self-center">
                            <FormattedMessage id={link.name}/>
                        </LocalizedLink>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default NavLinks
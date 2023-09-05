import * as React from "react";
import NavLinks from "./NavLinks";
import { StaticImage } from "gatsby-plugin-image";
import { LocalizedLink } from "gatsby-plugin-i18n-l10n";
import { useIntl } from "react-intl";
import { FormattedMessage } from "react-intl";
import { LanguageSwitcher } from "gatsby-plugin-i18n-l10n";

const Layout = ({ pageTitle, children }) => {
  const intl = useIntl();

  return (
    <body className="flex bg-bleu-fonce min-h-screen text-white font-josef text-lg justify-center">
      <div className="flex flex-col justify-between max-w-screen-xl">
        <div className="flex flex-col sm:flex-row justify-between xl:mt-4 w-full">
          <header>
            <div className="flex flex-col justify-center sm:justify-start sm:w-60 shrink-0">
              <LocalizedLink
                to="/"
                className="mt-4 mx-4 max-w-xxs self-center sm:self-start"
              >
                <StaticImage
                  src="../images/improvison_accueil.png"
                  alt="Logo Improvison"
                />
              </LocalizedLink>
              <NavLinks />
            </div>
          </header>
          <div>
            <div className="flex flex-row-reverse">
              <LanguageSwitcher
                resolveLanguageName={(locale) =>
                  intl.formatMessage({ id: `${locale}` })
                }
                className="sm:my-2 mt-6 mx-4 underline hover:text-neutral-400 self-end"
              />
            </div>

            <div className="flex flex-row-reverse">
              <h1 className="text-4xl font-bold p-4 sm:mb-10 mb-6 mx-4 border-b">
                <FormattedMessage id="Apprendre à improviser en jouant" />
              </h1>
            </div>
            <div className="mx-6">
              <h1 className="text-2xl font-bold mb-6">
                {intl.formatMessage({ id: `${pageTitle}` }) === "undefined"
                  ? " "
                  : intl.formatMessage({ id: `${pageTitle}` })}
              </h1>
              <main>{children}</main>
            </div>
          </div>
        </div>
        <footer className="mx-4 mt-4 p-4 border-t">
          <p>Contact :</p>
          <a href="mailto:info@improvison.ca" className="hover:underline">
            info@improvison.ca
          </a>
        </footer>
      </div>
    </body>
  );
};

export default Layout;

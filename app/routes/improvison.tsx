import * as React from "react";
import { NavLink } from "@remix-run/react";
import { Image } from "@nextui-org/react";
import ImprovisonLogo from "../static/images/improvison_accueil.png"
import { Outlet } from "@remix-run/react";


export default function ImprovisonLayout() {

    const menuLinks = [
        {
          name: "Accueil",
          link: "/improvison",
        },
        {
          name: "À propos",
          link: "/improvison/a-propos",
        },
        {
          name: "Le jeu",
          link: "/improvison/jeu",
        },
        {
          name: "Pour en savoir plus",
          link: "/improvison/savoir-plus",
        },
    ]

    return (
        <body className="flex bg-bleu-fonce min-h-screen text-white font-josef text-lg justify-center">
        <div className="flex flex-col justify-between max-w-screen-xl">
            <div className="flex flex-col sm:flex-row justify-between xl:mt-4 w-full">
            <header>
                <div className="flex flex-col justify-center sm:justify-start sm:w-60 shrink-0">
                    <NavLink
                        to="/improvison"
                        className="mt-4 mx-4 max-w-xxs self-center sm:self-start"
                    >
                        <Image
                            src={ImprovisonLogo}
                            alt="Logo Improvison"
                        />
                    </NavLink>
                    <nav className="flex flex-col sm:p-4 mt-4">
                        <ul className="flex flex-row sm:flex-col divide-x sm:divide-x-0 sm:divide-y sm:max-w-xxs justify-center">
                            {menuLinks.map((link) => (
                            <li
                                key={link.name}
                                className="flex list-none px-2 sm:px-0 sm:py-2 sm:pl-4 "
                            >
                                <NavLink
                                    to={link.link}
                                    className="text-white hover:text-neutral-400 self-center"
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
            <div>
                <div className="flex flex-row-reverse">
                <h1 className="text-4xl font-bold p-4 sm:mb-10 mb-6 mx-4 border-b">
                    Apprendre à improviser en jouant
                </h1>
                </div>
                <div className="mx-6">

                    <Outlet />
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

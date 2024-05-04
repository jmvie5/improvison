/* @ts-ignore */
import type { MetaFunction } from "@remix-run/deno";
import { Image, Link } from "@nextui-org/react";
import ImprovisonLogo from "../static/images/improvison_accueil.png"
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Improvison" },
		{ name: "description", content: "Application web pour apprendre l'improvisation musicale" },
	];
};

export default function Landing() {

  const menuLinks = [
    {
      name: "Accueil",
      link: "/",
    },
    {
      name: "À propos",
      link: "/about",
    },
    {
        name: "Solo",
        link: "/solo/jeu"
    },
    {
      name: "Duo",
      link: "/duo",
    },
    {
      name: "Pour en savoir plus",
      link: "/savoir-plus",
    },
]

return (
    <div className="flex justify-center h-dvh">
        <div className="flex flex-col justify-between max-w-screen-xl">
            <div className="flex flex-col sm:flex-row justify-between xl:mt-4 w-full">

            <div className="flex flex-col justify-center sm:justify-start sm:w-60 shrink-0">
                <Link
                    href="/"
                    className="mt-4 mx-4 max-w-xxs self-center sm:self-start"
                >
                    <Image
                        src={ImprovisonLogo}
                        alt="Logo Improvison"
                    />
                </Link>
                <nav className="flex flex-col sm:p-4 mt-4">
                    <ul className="flex flex-row sm:flex-col divide-x sm:divide-x-0 sm:divide-y sm:max-w-xxs justify-center">
                        {menuLinks.map((link) => (
                        <li
                            key={link.name}
                            className="flex list-none px-2 sm:px-0 sm:py-2 sm:pl-4 "
                        >
                            <Link
                                href={link.link}
                                className="text-white hover:text-neutral-400 self-center"
                            >
                                {link.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </nav>
            </div>

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
        <div className="mx-4 mt-4 p-4 border-t ">
            <p>Contact :</p>
            <a href="mailto:info@improvison.ca" className="hover:underline">
                info@improvison.ca
            </a>
        </div>
        </div>
    </div>
);
}

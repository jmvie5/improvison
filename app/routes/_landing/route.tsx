/* @ts-ignore */
import type { MetaFunction } from "@remix-run/deno";
import { Image, Button } from "@nextui-org/react";
import ImprovisonLogo from "../../static/images/improvison_accueil.png"
import { Outlet, useLoaderData, Form, Link } from "@remix-run/react";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { motion } from 'framer-motion'
import i18nServer from "../../i18next.server";

export async function loader({ request }: LoaderFunctionArgs) {
  
    const t = await i18nServer.getFixedT(request);
    const title = t("home.title")
    const description = t("home.description")
  
    const pagesTranslatedTitle = {
      landingIndex: t('pages.landingIndex.title'),
      landingAbout: t('pages.landingAbout.title'),
      landingDuo: t('pages.landingDuo.title'),
      landingKnowMore: t('pages.landingKnowMore.title'),
      soloIndex: t('pages.soloGame.title'),
    }
  
    return json({ title, description, pagesTranslatedTitle });
  }

  export const meta: MetaFunction<typeof loader> = ({ data }:any) => {

    if (!data) return [];
  
    return [
      { title: data.title },
      { name: "description", content: data.description },
    ];
  };

export default function LandingLayout() {

    const translationsData = useLoaderData<typeof loader>()

    const pagesTranslatedTitle = translationsData.pagesTranslatedTitle;


  const menuLinks = [
    {
        name: pagesTranslatedTitle.landingIndex,
        link: "/",
    },
    {
        name: pagesTranslatedTitle.landingAbout,
        link: "/about",
    },
    {
        name: pagesTranslatedTitle.soloIndex,
        link: "/solo/game"
    },
    {
        name: pagesTranslatedTitle.landingDuo,
        link: "/duo",
    },
    {
        name: pagesTranslatedTitle.landingKnowMore,
        link: "/know-more",
    },
]

return (
    <div className="flex justify-center h-dvh">
        <div className="flex flex-col justify-between max-w-screen-xl">
            <div className="flex flex-col sm:flex-row justify-between xl:mt-4 w-full">

            <div className="flex flex-col justify-center sm:justify-start sm:w-60 shrink-0">
                <Link
                    to="/"
                    className="mt-4 mx-4 max-w-xxs self-center sm:self-start"
                >
                    <Image
                        src={ImprovisonLogo}
                        alt="Logo Improvison"
                    />
                </Link>
                <Form className="flex gap-2 self-center mt-4">
                    <Button type="submit" name="lng" value="fr" className="bg-white">
                    Français
                    </Button>
                    <Button type="submit" name="lng" value="en" className="bg-white">
                    English
                    </Button>
                </Form>
                <nav className="flex flex-col p-4">
                    <motion.ul
                        
                        className="flex flex-row sm:flex-col divide-x sm:divide-x-0 sm:divide-y sm:max-w-xxs justify-center"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                opacity:0
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                  delayChildren: 0.1,
                                  staggerChildren: 0.15
                                }
                            }
                        }}
                    >
                        {menuLinks.map((link) => (
                        <motion.li
                            key={link.name}
                            className="flex list-none px-2 sm:px-0 sm:py-2 sm:pl-4 "
                            variants={{
                                hidden: {
                                    opacity:0,
                                    x:-25
                                },
                                visible: {
                                    opacity:1,
                                    x:0
                                }
                            }}
                        >
                            <Link
                                to={link.link}
                                className="text-white hover:text-neutral-400 self-center"
                            >
                                {link.name}
                            </Link>
                        </motion.li>
                        ))}
                    </motion.ul>
                </nav>
            </div>

            <div>
                <div className="flex flex-row-reverse">
                <h1 className="text-4xl font-bold p-4 sm:mb-10 mb-6 mx-4 border-b">
                   {translationsData.description}
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

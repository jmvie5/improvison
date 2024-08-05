import * as React from "react"

import { PuzzlePieceIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { Image, Card, CardHeader, CardBody, CardFooter, Link } from "@nextui-org/react"
import { Improvison_Règles_numériques } from "../../static/files"
import { Roblox_Logo, champi, tortue, modulation, latin_jazz, jeu_num_fr, jeu_num2_fr, jeu_num3_fr } from "../../static/images"
import { json, type LoaderFunctionArgs, type MetaFunction} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import i18nextServer from "~/i18next.server";

import { t } from "i18next"

export async function loader({ request }: LoaderFunctionArgs) {
  
    const t = await i18nextServer.getFixedT(request);
  
    const translations = {
        title: t('pages.landingDuo.title'),
        description: t('pages.landingDuo.description'),

    }
  
    return json({ translations });
  }

export const meta: MetaFunction<typeof loader> = ({ data }) => {

    if (!data) return  []

    return [
        { title: data.translations.title },
        { name: "description", content: data.translations.description },
    ];
};

export default function LandingDuo() {

	const translations = useLoaderData<typeof loader>().translations

  	return (
		<div>
			<h1 className="font-bold text-2xl pb-4">{translations.title}</h1>
			<div className="flex flex-col xl:flex-row gap-4 justify-center items-center mb-4 flex-1">
				<Card className="bg-bleu-pale/20 h-full w-fit max-w-80 aspect-square xl:w-1/3 p-4 text-white border border-neutral-500 shadow-md shadow-black" as={Link} href="https://www.roblox.com/games/5984084686/Improvisondon" target="_blank" rel="noreferrer">
					<CardHeader className="justify-center">
						<p className="font-bold text-xl">{t("pages.landingDuo.playOnlineCard.title")}</p>
					</CardHeader>
					<CardBody className="items-center">
						<Image src={Roblox_Logo} className="w-24 self-center" alt="Logo Roblox"/>
					</CardBody>
					<CardFooter className="justify-center text-center text-lg">
						<p>{t("pages.landingDuo.playOnlineCard.description")}</p>
					</CardFooter>
				</Card>
				<Card className="bg-bleu-pale/20 h-full w-fit xl:w-1/3 max-w-80 aspect-square p-4 text-white border border-neutral-500 shadow-md shadow-black" as={Link} href="app/static/files/Improvison_Règles numériques.pdf" target="_blank" rel="noreferrer">
					<CardHeader className="justify-center">
						<p className="font-bold text-xl">{t("pages.landingDuo.rulesCard.title")}</p>
					</CardHeader>
					<CardBody className="items-center">
						<BookOpenIcon className=" w-32"/>
					</CardBody>
					<CardFooter className="justify-center text-center text-lg">
						<p>{t("pages.landingDuo.rulesCard.description")}</p>
					</CardFooter>
				</Card>
				<Card className="bg-bleu-pale/20 h-full w-fit xl:w-1/3 max-w-80 aspect-square p-4 text-white border border-neutral-500 shadow-md shadow-black" isDisabled>
					<CardHeader className="justify-center">
						<p className="font-bold text-xl">{t("pages.landingDuo.boardGameCard.title")}</p>
					</CardHeader>
					<CardBody className="items-center">
						<PuzzlePieceIcon className="w-32"/>
					</CardBody>
					<CardFooter className="justify-center text-center text-lg">
						<p>{t("pages.landingDuo.boardGameCard.description")}</p>
					</CardFooter>
				</Card>
			</div>
			<p className="text-xl pt-4">{t("pages.landingDuo.gamePreview")}</p>
				<div className="flex flex-col gap-2 mt-8">
					<Image src={jeu_num_fr} className="w-fit self-end rounded-md" removeWrapper alt="Capture d'écran d'Improvison sur Roblox : page principale."/>
					<Image src={jeu_num2_fr} className="w-fit rounded-md" alt="Capture d'écran d'Improvison sur Roblox : pop-up."/>
					<Image src={jeu_num3_fr} className="w-fit self-end rounded-md" removeWrapper alt="Capture d'écran d'Improvison sur Roblox : menu d'accueil"/>
				</div>
				{/* <div className={`${intl.locale === "en-CA" ? "inline": "hidden"} flex flex-col gap-2 mt-8 self-end`}>
					<Image src="../images/jeu_num_en.webp" className="w-fit self-end rounded-md" alt="Capture d'écran d'Improvison sur Roblox : page principale."/>
					<Image src="../images/jeu_num2_en.webp" className="w-fit rounded-md" alt="Capture d'écran d'Improvison sur Roblox : pop-up."/>
					<Image src="../images/jeu_num3_en.webp" className="w-fit self-end rounded-md" alt="Capture d'écran d'Improvison sur Roblox : menu d'accueil"/>
				</div> */}

			<div className="flex flex-col">
				<div className="py-8 flex flex-col">
					<h2 className="font-bold italic text-xl">{t("pages.landingDuo.gameDescription.title")}</h2>           
					<div className="">
						<div className="md:float-right flex flex-col p-8 items-center">
							<Image src={champi} className="max-w-xxs -rotate-12" alt="Exemple de carte thème d'improvison: Champignons"/>
							<Image src={tortue} className="max-w-xxs rotate-12" alt="Exemple de carte thème d'improvison: Tortue de mer" />
						</div>
						<p>{t("pages.landingDuo.gameDescription.one")}</p>
						<p className="italic pt-2">{t("pages.landingDuo.gameDescription.two")}</p>
					</div>
					<div className="">
						<div className="md:float-left flex flex-col p-8 items-center">
							<Image src={modulation} className="max-w-xxs border-2 border-bleu-fonce rounded-lg rotate-12" alt="Exemple de carte contrainte d'improvison: Modulation"/>
							<Image src={latin_jazz} className="max-w-xxs border-2 border-bleu-fonce rounded-lg -rotate-12" alt="Exemple de carte contrainte d'improvison: Latin Jazz"/>
						</div>
						<h3 className="text-lg font-bold pb-2">{t("pages.landingDuo.gameFlow.title")}</h3>
						<h4 className="text-lg font-semibold ">{t("pages.landingDuo.gameFlow.beforeTitle")}</h4>
						<p>{t("pages.landingDuo.gameFlow.playerNeed")}</p>
						<ul className=" list-disc list-inside pl-4">
							<li className="">{t("pages.landingDuo.gameFlow.before-1")}</li>
							<li>{t("pages.landingDuo.gameFlow.before-2")}</li>
							<li>{t("pages.landingDuo.gameFlow.before-3")}</li>
						</ul>
						<h4 className="text-lg font-semibold pt-4">{t("pages.landingDuo.gameFlow.startTitle")}</h4>
						<ol className="pl-4 list-decimal list-inside">
							<li>{t("pages.landingDuo.gameFlow.start-1")}</li>
							<li>{t("pages.landingDuo.gameFlow.start-2")}</li>
							<li>{t("pages.landingDuo.gameFlow.start-3")}</li>
							<li>{t("pages.landingDuo.gameFlow.start-4")}</li>
							<li>{t("pages.landingDuo.gameFlow.start-5")}</li>
							<li>{t("pages.landingDuo.gameFlow.start-6")}</li>
						</ol>
					</div>
				</div>
				<div className="inline">
					{t("pages.landingDuo.downloadRules")}
					<Link href={Improvison_Règles_numériques} target="_blank" rel="noreferrer" aria-label="Règles d'improvison" className="underline hover:text-neutral-400">{t("pages.landingDuo.onlineRules")}</Link>
					{t("pages.landingDuo.and")}
					<Link href={Improvison_Règles_numériques} target="_blank" rel="noreferrer" aria-label="Règles d'improvison" className="underline hover:text-neutral-400">{t("pages.landingDuo.boardRules")}</Link>
				</div>
				
				
			</div>
		</div>
	)
}


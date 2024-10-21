import { PuzzlePieceIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  useDisclosure,
} from "@nextui-org/react";
import {
  Roblox_Logo,
  champi,
  tortue,
  modulation,
  latin_jazz,
  jeu_num_fr,
  jeu_num2_fr,
  jeu_num3_fr,
  jeu_num_en,
  jeu_num2_en,
  jeu_num3_en,
} from "../../static/images";
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import i18nextServer from "~/i18next.server";

import { t } from "i18next";
import DownloadModal from './DownloadModal';
import { Improvison_Digital_Rules, Improvison_Règles_numériques } from "../../static/files";

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18nextServer.getFixedT(request);
  const locale = await i18nextServer.getLocale(request);
  const translations = {
    title: t("pages.landingDuo.title"),
    description: t("pages.landingDuo.description"),
    playOnlineCard: {
      title : t("pages.landingDuo.playOnlineCard.title"),
      description: t("pages.landingDuo.playOnlineCard.description")
    },
    rulesCard: {
      title: t("pages.landingDuo.rulesCard.title"),
      description: t("pages.landingDuo.rulesCard.description")
    },
    boardGameCard: {
      title: t("pages.landingDuo.boardGameCard.title"),
      description: t("pages.landingDuo.boardGameCard.description")
    },
    gamePreview: t("pages.landingDuo.gamePreview"),
    gameDescription : {
      title: t("pages.landingDuo.gameDescription.title"),
      one: t("pages.landingDuo.gameDescription.one"),
      two: t("pages.landingDuo.gameDescription.two"),
    },
    gameFlow: {
      title: t("pages.landingDuo.gameFlow.title"),
      beforeTitle: t("pages.landingDuo.gameFlow.beforeTitle"),
      playerNeed: t("pages.landingDuo.gameFlow.playerNeed"),
      before1: t("pages.landingDuo.gameFlow.before-1"),
      before2: t("pages.landingDuo.gameFlow.before-2"),
      before3: t("pages.landingDuo.gameFlow.before-3"),
      startTitle: t("pages.landingDuo.gameFlow.startTitle"),
      start1: t("pages.landingDuo.gameFlow.start-1"),
      start2: t("pages.landingDuo.gameFlow.start-2"),
      start3: t("pages.landingDuo.gameFlow.start-3"),
      start4: t("pages.landingDuo.gameFlow.start-4"),
      start5: t("pages.landingDuo.gameFlow.start-5"),
      start6: t("pages.landingDuo.gameFlow.start-6"),
    },
    downloadRules : t("pages.landingDuo.downloadRules"),
    onlineRules : t("pages.landingDuo.onlineRules"),
    and : t("pages.landingDuo.and"),
    boardRules : t("pages.landingDuo.boardRules"),
    downloadModal: {
      title: t("pages.landingDuo.downloadModal.title"),
      themeCards: t("pages.landingDuo.downloadModal.theme-cards"),
      selectionCards: t("pages.landingDuo.downloadModal.selection-cards")
    },

  };

  return json({ translations, locale });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];

  return [
    { title: data.translations.title },
    { name: "description", content: data.translations.description },
  ];
};

export default function LandingDuo() {
  const loaderData = useLoaderData<typeof loader>();
  const locale = loaderData.locale;
  const translations = loaderData.translations;
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div>
      <h1 className="font-bold text-2xl pb-4">{translations.title}</h1>
      <div className="flex flex-col xl:flex-row gap-4 justify-center items-center mb-4 flex-1">
        <Card className="bg-bleu-pale/20 h-full w-fit max-w-80 aspect-square xl:w-1/3 p-4 text-white border border-neutral-500 shadow-md shadow-black" as={Link} href="https://www.roblox.com/games/5984084686/Improvisondon" target="_blank" rel="noreferrer">
					<CardHeader className="justify-center">
						<p className="font-bold text-xl">{translations.playOnlineCard.title}</p>
					</CardHeader>
					<CardBody className="items-center">
						<Image src={Roblox_Logo} className="self-center max-h-full " alt="Logo Roblox" removeWrapper/>
					</CardBody>
					<CardFooter className="justify-center text-center text-lg h-full">
						<p>{translations.playOnlineCard.description}</p>
					</CardFooter>
				</Card>
				<Card 
					className="bg-bleu-pale/20 h-full w-fit xl:w-1/3 max-w-80 aspect-square p-4 text-white border border-neutral-500 shadow-md shadow-black" 
					as={Link} 
					href={locale === 'en' 
						? Improvison_Digital_Rules
            : Improvison_Règles_numériques
					}
					target="_blank" 
					rel="noreferrer"
				>
					<CardHeader className="justify-center">
						<p className="font-bold text-xl">{translations.rulesCard.title}</p>
					</CardHeader>
					<CardBody className="items-center">
						<BookOpenIcon className=" w-32"/>
					</CardBody>
					<CardFooter className="justify-center text-center text-lg">
						<p>{translations.rulesCard.description}</p>
					</CardFooter>
				</Card>
				<Card 
					className="bg-bleu-pale/20 h-full w-fit xl:w-1/3 max-w-80 aspect-square p-4 text-white border border-neutral-500 shadow-md shadow-black" 
					isPressable
					onPress={() => {
						onOpen()
					}}
				>
					<CardHeader className="justify-center">
						<p className="font-bold text-xl">{translations.boardGameCard.title}</p>
					</CardHeader>
					<CardBody className="items-center">
						<PuzzlePieceIcon className="w-32"/>
					</CardBody>
					<CardFooter className="justify-center text-center text-lg">
						<p>{translations.boardGameCard.description}</p>
					</CardFooter>
				</Card>
				<DownloadModal isOpen={isOpen} onOpenChange={onOpenChange}/>
      </div>
      <p className="text-xl pt-4">{translations.gamePreview}</p>
      <div className="flex flex-col gap-2 mt-8">
        {locale === "fr" && (
          <>
            <Image
              src={jeu_num_fr}
              className="w-fit self-end rounded-md"
              removeWrapper
              alt="Capture d'écran d'Improvison sur Roblox : page principale."
            />
            <Image
              src={jeu_num2_fr}
              className="w-fit rounded-md"
              alt="Capture d'écran d'Improvison sur Roblox : pop-up."
            />
            <Image
              src={jeu_num3_fr}
              className="w-fit self-end rounded-md"
              removeWrapper
              alt="Capture d'écran d'Improvison sur Roblox : menu d'accueil"
            />
          </>
        )}
        {locale === "en" && (
          <>
            <Image
              src={jeu_num_en}
              className="w-fit self-end rounded-md"
              removeWrapper
              alt="Screenshot of Improvison on Roblox: main page."
            />
            <Image
              src={jeu_num2_en}
              className="w-fit rounded-md"
              alt="Screenshot of Improvison on Roblox: pop-up."
            />
            <Image
              src={jeu_num3_en}
              className="w-fit self-end rounded-md"
              removeWrapper
              alt="Improvison on Roblox screenshot: home menu"
            />
          </>
        )}
      </div>

      <div className="flex flex-col">
        <div className="py-8 flex flex-col">
          <h2 className="font-bold italic text-xl">
            {translations.gameDescription.title}
          </h2>
          <div className="">
            <div className="md:float-right flex flex-col p-8 items-center">
              <Image
                src={champi}
                className="max-w-xxs -rotate-12"
                alt="Exemple de carte thème d'improvison: Champignons"
              />
              <Image
                src={tortue}
                className="max-w-xxs rotate-12"
                alt="Exemple de carte thème d'improvison: Tortue de mer"
              />
            </div>
            <p>{translations.gameDescription.one}</p>
            <p className="italic pt-2">
              {translations.gameDescription.two}
            </p>
          </div>
          <div className="">
            <div className="md:float-left flex flex-col p-8 items-center">
              <Image
                src={modulation}
                className="max-w-xxs border-2 border-bleu-fonce rounded-lg rotate-12"
                alt="Exemple de carte contrainte d'improvison: Modulation"
              />
              <Image
                src={latin_jazz}
                className="max-w-xxs border-2 border-bleu-fonce rounded-lg -rotate-12"
                alt="Exemple de carte contrainte d'improvison: Latin Jazz"
              />
            </div>
            <h3 className="text-lg font-bold pb-2">
              {translations.gameFlow.title}
            </h3>
            <h4 className="text-lg font-semibold ">
              {translations.gameFlow.beforeTitle}
            </h4>
            <p>{translations.gameFlow.playerNeed}</p>
            <ul className=" list-disc list-inside pl-4">
              <li className="">{translations.gameFlow.before1}</li>
              <li>{translations.gameFlow.before2}</li>
              <li>{translations.gameFlow.before3}</li>
            </ul>
            <h4 className="text-lg font-semibold pt-4">
              {translations.gameFlow.startTitle}
            </h4>
            <ol className="pl-4 list-decimal list-inside">
              <li>{translations.gameFlow.start1}</li>
              <li>{translations.gameFlow.start2}</li>
              <li>{translations.gameFlow.start3}</li>
              <li>{translations.gameFlow.start4}</li>
              <li>{translations.gameFlow.start5}</li>
              <li>{translations.gameFlow.start6}</li>
            </ol>
          </div>
        </div>
        <div className="inline">
          {translations.downloadRules}
          <Link
            href={locale === 'en' 
              ? Improvison_Digital_Rules
              : Improvison_Règles_numériques
            }
            target="_blank"
            rel="noreferrer"
            aria-label="Règles d'improvison"
            className="underline hover:text-neutral-400"
          >
            {translations.onlineRules}
          </Link>
          {translations.and}
          <Link
            className="underline hover:text-neutral-400 cursor-pointer"
            onPress={onOpen}
          >
            {translations.boardRules}
          </Link>
        </div>
      </div>
    </div>
  );
}

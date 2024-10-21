import * as React from "react"
import { Image, Link } from "@nextui-org/react"
import { thumbnail_Photo_JPD } from "../../static/images"
import { json, type LoaderFunctionArgs, type MetaFunction} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import i18nextServer from "~/i18next.server";

export async function loader({ request }: LoaderFunctionArgs) {
  
    const t = await i18nextServer.getFixedT(request);
  
    const translations = {
        title: t('pages.landingAbout.title'),
        description: t('pages.landingAbout.description'),
        principalInvestigator: t('pages.landingAbout.principalInvestigator'),
        piText1: t('pages.landingAbout.piText1'),
        piTextJournals1: t('pages.landingAbout.piTextJournals1'),
        andThe : t('pages.landingAbout.andThe'),
        piTextJournals2: t('pages.landingAbout.piTextJournals2'),
        piText2: t('pages.landingAbout.piText2'),
        gameIdeation: t('pages.landingAbout.gameIdeation'),
        giText1: t('pages.landingAbout.giText1'),
        researchTitle: t('pages.landingAbout.researchTitle'),
        giText2: t('pages.landingAbout.giText2'),
        giText3: t('pages.landingAbout.giText3')

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

export default function LandingAbout() {

    const translations = useLoaderData<typeof loader>().translations


    return (

        <div className="">
            <h1 className="font-bold text-4xl pb-8 lg:pb-12">{translations.title}</h1>
            <div className="flex flex-col xs:inline">
                <h2 className="font-semi-bold text-2xl pb-6">{translations.principalInvestigator}</h2>

                <Image 
                    className="float-right max-w-xs aspect-square rounded-lg m-2 self-center" 
                    src={thumbnail_Photo_JPD} alt="Jean-Philippe Després, Ph. D."
                    removeWrapper    
                />
                
                <p className="leading-loose">
                    <Link className="underline text-white decoration-secondary " href="https://www.mus.ulaval.ca/notre-faculte/repertoire-du-personnel/jean-philippe-despres">
                        Jean-Philippe Després (Ph.D.)
                    </Link>
                    <span>
                        {translations.piText1} 
                    </span>
                    <span className="italic">
                        {translations.piTextJournals1}
                    </span>
                    <span>
                        {translations.andThe} 
                    </span>
                    <span className="italic">
                        {translations.piTextJournals2}
                    </span>
                    <span>
                        {translations.piText2} 
                    </span>
                </p>

                <h2 className="font-semi-bold text-2xl pt-16 pb-6">{translations.gameIdeation}</h2>
                <p className="pb-2 leading-loose ">
                {translations.giText1} <a href=" https://doi.org/10.7202/1040300ar"  className="underline hover:opacity-80 transition-opacity text-large text-white decoration-secondary">{translations.researchTitle}</a>{translations.giText2}
                </p>
                <p className="pb-2 leading-loose">
                {translations.giText3}
                </p>
                
            </div>
            
        </div>
            
    )
}

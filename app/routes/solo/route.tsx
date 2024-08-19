import { Outlet, Form, useLoaderData } from "@remix-run/react";
import { improvison_accueil } from "~/static/images";
import {Button, ButtonGroup, Image} from "@nextui-org/react";
import {
    json,
    type LoaderFunctionArgs,
    type MetaFunction,
  } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import i18nextServer from "~/i18next.server";



export async function loader({ request }: LoaderFunctionArgs) {

    const t = await i18nextServer.getFixedT(request);
    const title =  t('pages.soloLayout.title');
    const description = t('pages.soloLayout.description');
     
	const translations = {
        game: t('pages.soloLayout.game'),
        profile: t('pages.soloLayout.profile'),
    }
	return json({ title, description, translations });
}


export const meta: MetaFunction<typeof loader> = ({ data }) => {

    if (!data) return [];

    return [
      { title: data.title },
      { name: "description", content: data.description },
    ];
  };


export default function SoloLayout() {

	const data = useLoaderData<typeof loader>()

	const [currentTransposition, setCurrentTransposition] = useState<string>("C")
	
    return (
        <div className="flex flex-col grow">
            <div className=" flex flex-col md:flex-row gap-2 p-4 shadow-lg justify-between items-center">
                
                <div className="flex gap-8 items-center">
                    <Link to="/"><Image src={improvison_accueil} width={100}/></Link>
                    <Link to="/solo/game" className="text-white hover:text-neutral text-xl">{data.translations.game}</Link>
					<Link to="/solo/profile" className="text-white hover:text-neutral text-xl">{data.translations.profile}</Link>
                </div>

				<div className="flex items-center gap-2">
					<Form className="flex gap-2 self-center mt-4">
						<ButtonGroup>
							<Button onPress={() => setCurrentTransposition("C")}>C</Button>
							<Button onPress={() => setCurrentTransposition("Bb")}>Bb</Button>
							<Button onPress={() => setCurrentTransposition("Eb")}>Eb</Button>
						</ButtonGroup>
                    </Form>

				</div>
                
            </div>

			<div className="flex flex-col grow w-full bg-bleu-pale/20">
				<Outlet context={currentTransposition}/>
			</div>
            
      
        </div>
    );
};

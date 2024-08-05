import { Outlet, Form, useLoaderData } from "@remix-run/react";
import { improvison_accueil } from "~/static/images";
import {Button, ButtonGroup, Link, Image} from "@nextui-org/react";
import {
    json,
    type LoaderFunctionArgs,
    type MetaFunction,
  } from "@remix-run/node";
import { useState } from "react";



export async function loader({ request }: LoaderFunctionArgs) {
    const title = 'Improvison - Solo'
    const description = "Jeu d'apprentissage autonome de l'improvisation musicale"
	const translations = ""

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
                
                <div className="flex gap-8 ">
                    <Link href="/"><Image src={improvison_accueil} width={100}/></Link>
                    <Link href="/solo/game" className="text-white hover:text-neutral text-xl">Jeu</Link>
					<Link href="/solo/profile" className="text-white hover:text-neutral text-xl">Profil</Link>
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

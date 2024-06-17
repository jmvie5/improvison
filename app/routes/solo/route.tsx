import { Outlet, useMatches, Form, useLoaderData } from "@remix-run/react";
import { Image } from "@nextui-org/react";
import { improvison_accueil } from "~/static/images";
import {Button, ButtonGroup, Link} from "@nextui-org/react";
import {
    json,
	redirect,
    type LoaderFunctionArgs,
    type MetaFunction,
	type ActionFunctionArgs
  } from "@remix-run/node";
import { localParams } from "~/cookies.server";


export async function loader({ request }: LoaderFunctionArgs) {
	const cookieHeader = request.headers.get("Cookie");
	const cookie = (await localParams.parse(cookieHeader)) || { transposition: 'C' };
    const title = 'Improvison - Solo'
    const description = "Jeu d'apprentissage autonome de l'improvisation musicale"
	return json({ transposition: cookie.transposition, title, description });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {

    if (!data) return [];

    return [
      { title: data.title },
      { name: "description", content: data.description },
    ];
  };

export async function action({ request }: ActionFunctionArgs) {
	const cookieHeader = request.headers.get("Cookie");
	const cookie =
		(await localParams.parse(cookieHeader)) || {};
	const bodyParams = await request.formData();

	cookie.transposition = bodyParams.get('transposition')
	const redirectTo = bodyParams.get('redirectTo')?.toString()

	return redirect(redirectTo!, {
		headers: {
			"Set-Cookie": await localParams.serialize(cookie),
		},
	});
}


export default function SoloLayout() {

	const matches = useMatches();

    return (
        <div className="flex flex-col grow">
            <div className=" flex flex-col md:flex-row gap-2 p-4 shadow-lg justify-between items-center">
                
                <div className="flex gap-8 ">
                    <Link href="/"><Image src={improvison_accueil} width={100}/></Link>
                    <Link href="/solo/game" className="text-white hover:text-neutral text-xl">Jeu</Link>
					<Link href="/solo/profile" className="text-white hover:text-neutral text-xl">Profil</Link>
                </div>
                
                <Form method="post">
					<ButtonGroup>
						<Button value="C" name="transposition" type="submit">C</Button>
						<Button value="Bb" name="transposition" type="submit">Bb</Button>
						<Button value="Eb" name="transposition" type="submit">Eb</Button>
					</ButtonGroup>
					<input name="redirectTo" value={matches[matches.length - 1].pathname} hidden readOnly/>
					
				</Form>
            </div>

			<div className="flex flex-col grow w-full bg-bleu-pale/20">
				<Outlet/>
			</div>
            
      
        </div>
    );
};

import { Outlet, useMatches, Form, useLoaderData } from "@remix-run/react";
import { Image } from "@nextui-org/react";
import { improvison_accueil } from "~/static/images";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import {Button, ButtonGroup, Link} from "@nextui-org/react";
import { json, redirect } from "@remix-run/node";
import { localParams } from "~/cookies.server";


export async function loader({ request }: LoaderFunctionArgs) {
	const cookieHeader = request.headers.get("Cookie");
	const cookie = (await localParams.parse(cookieHeader)) || { transposition: 'C' };
	return json({ transposition: cookie.transposition });
}

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
        <div className="h-full flex flex-col">
            <div className=" flex gap-2 p-4 shadow-lg justify-between items-center">
                
                <div className="flex gap-8 ">
                    <Link href="/"><Image src={improvison_accueil} width={100}/></Link>
					<Link href="/" className="text-white hover:text-neutral text-xl">Accueil</Link>
                    <Link href="/solo/jeu" className="text-white hover:text-neutral text-xl">Menu des niveaux</Link>
					<Link href="/solo/profile" className="text-white hover:text-neutral text-xl">Profil</Link>
                </div>
                
                <Form method="post">
					<ButtonGroup>
						<Button value="C" name="transposition" type="submit">C</Button>
						<Button value="Bb" name="transposition" type="submit">Bb</Button>
						<Button value="Eb" name="transposition" type="submit">Eb</Button>
					</ButtonGroup>
					<input name="redirectTo" value={matches[matches.length - 1].pathname} hidden/>
					
				</Form>
            </div>

            <Outlet/>
      
        </div>
    );
};

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import { json, redirect } from "@remix-run/node";
// import { prisma } from "../services/prisma.server";

import { localParams } from "~/cookies.server";

/* export async function loader() {
return json(await prisma.users.findMany());
} */

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

	return redirect("/solo/profile", {
		headers: {
			"Set-Cookie": await localParams.serialize(cookie),
		},
	});
}

export default function ProfilePage() {

	const { transposition } = useLoaderData<typeof loader>();

	return (
		<div>
		<div className="flex flex-col gap-2 p-2">
			<h1 className="font-medium">Profile</h1>
			{/* <ul>
				{data.map((user) => (
					<li key={user.id}>{user.username}, {user.email}, {user.mainInstrument}, {user.transposition}</li>
				))}
			</ul> */}
			<Form method="post">
				<ButtonGroup>
					<Button value="C" name="transposition" type="submit">C</Button>
					<Button value="Bb" name="transposition" type="submit">Bb</Button>
					<Button value="Eb" name="transposition" type="submit">Eb</Button>
				</ButtonGroup>
				
			</Form>
			<p>Your Tonality : {transposition}</p>
		</div>
		</div>
	);
}

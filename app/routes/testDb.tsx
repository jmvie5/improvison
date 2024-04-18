/* @ts-ignore */
import type { MetaFunction } from "@remix-run/deno";

import authService from "~/services/authService";
import RegisterForm from "~/components/userComponents/RegisterForm";
import UserInterface, { emptyUser } from "../components/userComponents/UserInterface";

export const meta: MetaFunction = () => {
	return [
		{ title: "Improvison" },
		{ name: "description", content: "Application web pour apprendre l'improvisation musicale" },
	];
};

async function handleClick(e: React.FormEvent) {
	e.preventDefault();

	await authService.test("Jean-Michel").then((res: any) => {
		window.alert(res.message);
	});
}

async function onSubmit(e: React.FormEvent) {
	e.preventDefault();
	await authService.register({
		id: "",
		username: "Jean-Michel Viel",
		email: "",
		password: "",
		mainInstrument: "",
		transposition: "",
		secondaryInstrument: [],
		role: "",
		karma: 0,
		progress: "",
	}).then((res: any) => {
		window.alert(res.message);
	});
}


export default function Test() {
	return (
		<div className="bg-blue-700 h-screen">
			<button
				onClick={(e) => {
					onSubmit(e)
				}}
			>
				db
			</button>
			{/* <RegisterForm formTitle="Register" initialState={emptyUser} onSubmit={onSubmit}/> */}
		</div>
	);
}

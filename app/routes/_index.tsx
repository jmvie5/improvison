/* @ts-ignore */
import type { MetaFunction } from "@remix-run/deno";
import { Link } from "@nextui-org/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Improvison" },
		{ name: "description", content: "Application web pour apprendre l'improvisation musicale" },
	];
};

export default function Index() {

  return (
    <div className="">
      <div className="flex flex-col gap-2 p-2">
        <h1 className="font-medium">Improvison</h1>
        <Link href="/solo/jeu">Solo</Link>
        <Link href="/duo">Duo</Link>
      </div>
    </div>
  );
}

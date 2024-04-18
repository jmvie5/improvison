/* @ts-ignore */
import type { MetaFunction } from "@remix-run/deno";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Improvison" },
		{ name: "description", content: "Application web pour apprendre l'improvisation musicale" },
	];
};

export default function Index() {

  return (
    <div>
      <h1 className="font-medium">Improvison</h1>
      <Link to="/improvison">Ici!</Link>
    </div>
  );
}

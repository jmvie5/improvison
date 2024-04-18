/* @ts-ignore */
import type { MetaFunction } from "@remix-run/deno";

export const meta: MetaFunction = () => {
  return [
    { title: "À propos" },
    { name: "description", content: "Ce projet vise à développer du matériel pédagogique basé sur les principes de l’apprentissage par le jeu afin de faciliter l’acquisition, chez les instrumentistes de niveau débutant ou intermédiaire, de stratégies d’improvisation musicale qui sont mises en œuvre par les experts du domaine et à documenter les impacts perçus de ce matériel." },
  ];
};

export default function About() {

  return (
    <div>
      <h1 className="font-medium">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

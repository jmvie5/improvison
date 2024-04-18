import { Outlet } from "@remix-run/react";
import { Image, Link } from "@nextui-org/react";
import { improvison_accueil } from "~/static/images";


export default function SoloLayout() {

    return (
        <div>
            <div className=" flex border-b-1 gap-2 p-2">
                <Link href="/"><Image src={improvison_accueil} width={100}/></Link>
                <Link href="/solo/jeu">Solo</Link>
                <Link href="/duo">Duo</Link>
            </div>
            <Outlet/>
        </div>
    );
};

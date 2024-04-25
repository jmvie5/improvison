import { Outlet, Link } from "@remix-run/react";
import { Image } from "@nextui-org/react";
import { improvison_accueil } from "~/static/images";


export default function SoloLayout() {

    return (
        <div>
            <div className=" flex border-b-1 gap-2 p-2">
                <Link to="/"><Image src={improvison_accueil} width={100}/></Link>
                <Link to="/solo/jeu">Solo</Link>
                <Link to="/duo">Duo</Link>
                <Link to="/solo/profile">Profil</Link>
            </div>
            <Outlet/>
        </div>
    );
};

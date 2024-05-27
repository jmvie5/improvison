import { useState, useRef } from "react";
import MyModal from "../../components/MyModal";
import ErrorMsg from "../../components/ErrorMsg"
import SubLvl from "./SubLvl";
import Guide from "./levels/Guide";
import PentaMaj from "./levels/tutorial/PentaMaj";
import PentaMin from "./levels/tutorial/PentaMin";
import Motifs from "./levels/tutorial/Motifs";
import MajorScale from './levels/tutorial/MajorScale'
import TargetNotes from "./levels/lvl2/TargetNotes";
import { Button } from "@nextui-org/react";
import { SubLvlInterface, LevelInterface } from "./levels/types";

import {
    json,
    type LoaderFunctionArgs,
    type MetaFunction,
  } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { localParams } from "~/cookies.server";
import MinorScale from "./levels/tutorial/MinorScale";

export async function loader({ request }: LoaderFunctionArgs) {
	const cookieHeader = request.headers.get("Cookie");
	const cookie = (await localParams.parse(cookieHeader)) || { transposition: 'C' };
	return json({ transposition: cookie.transposition });
}

export default function Game() {

    const { transposition } = useLoaderData<typeof loader>();

    /* Page principale du jeu
    
    Une fois log in, les utilisateurs voient le menu de tous les niveaux, puis ils choisissent quel niveau ouvrir, ce qui cache le menu et affiche le component lié au niveau.

    Role de la page:
    - Navigation entre le menu et les niveaux
    - (TODO) Vérification de la complétion du niveau lorsque demandé par l'utilisateur
    - (TODO) Appels à la BD pour changer les valeurs "locked" et "completed" de chaque niveau une fois complété
    */
    const [isMenu, setIsMenu] = useState(true);
    const [currentLvl, setCurrentLvl] = useState({} as LevelInterface);
    const [currentSubLvl, setCurrentSubLvl] = useState({} as SubLvlInterface);
    const subLevelRef = useRef<any>()
    const levelList:LevelInterface[] = [
        /*  Liste des niveaux du jeu
            TODO 
            - Appels à la BD pour les valeurs de "locked" et "completed"
        */
        PentaMaj,
        PentaMin,
        Motifs,
        MajorScale,
        MinorScale,
        TargetNotes
    ];

    return (
        <div className="flex flex-col grow justify-between">
            {isMenu ? (
                <div className="flex flex-col gap-4 p-4">
                    {/* <div className="flex gap-4">
                        <p>Description</p>
                        <Button
                            key={Guide.name}
                            className="max-w-xs"
                            onPress={() => {
                                setIsMenu(false);
                                setCurrentLvl(Guide);
                                setCurrentSubLvl(Guide.intro);
                            }}
                            disabled={Guide.locked}
                        >
                            {Guide.name}
                        </Button>
                    </div> */}
                    
                    <div className="self-center text-4xl font-bold pt-4">Niveaux</div>
                    <div className="flex flex-col gap-2">
                        {levelList.map((level) => (
                            <Button
                                size="lg"
                                key={level.name}
                                className="max-w-xs"
                                onPress={() => {
                                    setIsMenu(false);
                                    setCurrentLvl(level);
                                    setCurrentSubLvl(level.intro);
                                }}
                                disabled={level.locked}
                            >
                                {level.name}
                            </Button>
                        ))}
                    </div>
                </div>

                
            ) : (
                <SubLvl
                    name={currentSubLvl.name}
                    title={currentSubLvl.title}
                    description={currentSubLvl.description}
                    transposition={transposition}
                    vfProps={currentSubLvl.vfProps}
                    vf_w={currentSubLvl.vf_w}
                    vf_h={currentSubLvl.vf_h}
                    reRender={currentSubLvl.reRender}
                    ref={subLevelRef}
                />
            )}
            {isMenu ? (
                <></>
            ) : (
                <div className="flex  shadow-lg-rev  justify-between p-4 bg-bleu-fonce">
                    <div className="flex gap-2 self-end">
                        <Button
                            onPress={() => {
                                setIsMenu(true);
                            }}
                        >
                            Retour au menu
                        </Button>
                    </div>
                    <div className="flex gap-2">
                        {
                            currentSubLvl.name !== "intro" &&
                                <Button
                                    onPress={() => {
                                        if (currentSubLvl.name === "intro") {
                                        } else if (currentSubLvl.name === "freeImprov") {
                                            setCurrentSubLvl(currentLvl.intro);
                                        } else if (currentSubLvl.name === "repertoireImprov") {
                                            setCurrentSubLvl(currentLvl.freeImprov);
                                        }
                                    }}
                                >
                                    Retour
                                </Button>
                        }
                        {
                            currentSubLvl.name === "intro" &&
                            <Button
                                onPress={() => {
                                    if (currentSubLvl.name === "intro") {
                                        setCurrentSubLvl(currentLvl.freeImprov);
                                    } else if (currentSubLvl.name === "freeImprov") {
                                        setCurrentSubLvl(currentLvl.repertoireImprov);
                                    } else if (currentSubLvl.name === "repertoireImprov") {
                                    }
                                }}
                            >
                                Prochaine étape
                            </Button>
                        }
                        {currentSubLvl.name === "freeImprov" &&
                            <MyModal
                                title="Prochaine étape"
                                content="Prêt à soumettre votre audio? Il sera disponible dans votre profil."
                                isAction={true}
                                confirmatonButton="Oui!"
                                cancelButton="Non! Je ne suis pas prêt."
                                onConfirmation={() => {
                                    const audioDiv = document.getElementById("recorded-audio");
                                    if (audioDiv?.hasChildNodes()) {
                                        if (subLevelRef.current) {
                                            subLevelRef.current.saveAudioToProfile()
                                        }
                                        setCurrentSubLvl(currentLvl.repertoireImprov);
                                    } else {
                                        window.alert("Vous n'avez aucun audio enregistré.");
                                    }
                                }}
                            />
                        }
                        {currentSubLvl.name === "repertoireImprov" &&
                            <MyModal
                                title="Niveau suivant"
                                content="Vous avez complété les trois sous-exercices et êtes pret à passer au niveau suivant?"
                                isAction={true}
                                confirmatonButton="Oui! Je suis prêt pour le niveau suivant."
                                cancelButton="Non! Je ne suis pas prêt."
                                onConfirmation={() => {
                                    const audioDiv = document.getElementById("recorded-audio");
                                    console.log(audioDiv);
                                    if (audioDiv?.hasChildNodes()) {
                                        if (subLevelRef.current) {
                                            subLevelRef.current.saveAudioToProfile()
                                        }
                                        window.alert("Niveau terminé!");
                                        setIsMenu(true);
                                    } else {
                                        window.alert("Vous n'avez aucun audio enregistré.");
                                    }
                                }}
                            />
                        }
                    </div>
                    
                </div>
            )}
        </div>
    );
}

import { useState } from "react";
import Modal from "../../components/Modal";
import SubLvl, { SubLvlInterface } from "./SubLvl";
import Guide from "./levels/Guide";
import PentaMaj from "./levels/tutorial/PentaMaj";
import PentaMin from "./levels/tutorial/PentaMin";
import Motifs from "./levels/tutorial/Motifs";
import { Button } from "@nextui-org/react";

export default function Game() {
    interface LevelInterface {
        id: string;
        name: string;
        locked: boolean;
        completed: boolean;
        intro: SubLvlInterface;
        freeImprov: SubLvlInterface;
        repertoireImprov: SubLvlInterface;
    }
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
    const levelList:LevelInterface[] = [
        /*  Liste des niveaux du jeu
            TODO 
            - Appels à la BD pour les valeurs de "locked" et "completed"
        */
        Guide,
        PentaMaj,
        PentaMin,
        Motifs
    ];

    return (
        <div className="p-4">
            {isMenu ? (
                <div className="flex flex-col gap-2">
                    {levelList.map((level) => (
                        <Button
                            key={level.name}
                            className="max-w-xs"
                            onClick={() => {
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
            ) : (
                <SubLvl
                    name={currentSubLvl.name}
                    title={currentSubLvl.title}
                    description={currentSubLvl.description}
                    vfProps={currentSubLvl.vfProps}
                    vf_w={currentSubLvl.vf_w}
                    vf_h={currentSubLvl.vf_h}
                    reRender={currentSubLvl.reRender}
                />
            )}
            {isMenu ? (
                <></>
            ) : (
                <div>
                    <div className="flex mb-2 gap-2">
                        {
                            currentSubLvl.name !== "intro" ? 
                                <Button
                                    onClick={() => {
                                        if (currentSubLvl.name === "intro") {
                                        } else if (currentSubLvl.name === "freeImprov") {
                                            setCurrentSubLvl(currentLvl.intro);
                                        } else if (currentSubLvl.name === "repertoireImprov") {
                                            setCurrentSubLvl(currentLvl.freeImprov);
                                        }
                                    }}
                                >
                                    Retour
                                </Button> : <></>
                        }
                        {
                            currentSubLvl.name !== "repertoireImprov" ? 
                            <Button
                                onClick={() => {
                                    if (currentSubLvl.name === "intro") {
                                        setCurrentSubLvl(currentLvl.freeImprov);
                                    } else if (currentSubLvl.name === "freeImprov") {
                                        setCurrentSubLvl(currentLvl.repertoireImprov);
                                    } else if (currentSubLvl.name === "repertoireImprov") {
                                    }
                                }}
                            >
                                Prochaine étape
                            </Button> : <></>
                        }
                    </div>
                    <div className="flex gap-2">
                        <Button
                            onClick={() => {
                                setIsMenu(true);
                            }}
                        >
                            Retour au menu
                        </Button>
                        {currentSubLvl.name === "repertoireImprov" ? (
                            <Modal
                                title="Niveau suivant"
                                content="Vous avez complété les trois sous-exercices et êtes pret à passer au niveau suivant?"
                                isAction={true}
                                confirmatonButton="Oui! Je suis prêt pour le niveau suivant."
                                cancelButton="Non! Je ne suis pas prêt."
                                onConfirmation={() => {
                                    const audioDiv = document.getElementById("recorded-audio");
                                    console.log(audioDiv);
                                    if (audioDiv?.hasChildNodes()) {
                                        window.alert("Niveau terminé!");
                                        setIsMenu(true);
                                    } else {
                                        window.alert("Vous n'avez aucun audio enregistré.");
                                    }
                                }}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

import React from "react";
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
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db';

import {
    json,
    type LoaderFunctionArgs,
    type MetaFunction,
  } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { localParams } from "../../cookies.server";
import MinorScale from "./levels/tutorial/MinorScale";
import i18nextServer from "~/i18next.server";


export async function loader({ request }: LoaderFunctionArgs) {
	const cookieHeader = request.headers.get("Cookie");
	const cookie = (await localParams.parse(cookieHeader)) || { transposition: 'C' };

    const t = await i18nextServer.getFixedT(request);
  
    const translations = {
        title: t('pages.soloGame.title'),
        description: t('pages.soloGame.description'),
        description2: t('pages.soloGame.index.description2'),
        presentation: t('pages.soloGame.index.presentation'),
        exploration: t('pages.soloGame.index.exploration'),
        and : t('pages.soloGame.index.and'),
        integration: t('pages.soloGame.index.integration'),
        description3: t('pages.soloGame.index.description3'),
        playOnline: t('pages.soloGame.index.playOnline'),
        playOnlineDesc: t('pages.soloGame.index.playOnlineDesc'),
        levels: t('pages.soloGame.levels'),
        lvlTitles : {
            "1-1" : t('pages.soloGame.lvlTitles.1-1'),
            "1-2" : t('pages.soloGame.lvlTitles.1-2'),
            "1-3" : t('pages.soloGame.lvlTitles.1-3'),
            "1-4" : t('pages.soloGame.lvlTitles.1-4'),
            "1-5" : t('pages.soloGame.lvlTitles.1-5'),

            "2-1" : t('pages.soloGame.lvlTitles.2-1')
        } as {[key :string] : string},
        buttons : {
            newMotif : t('pages.soloGame.buttons.newMotif'),
            backToMenu : t('pages.soloGame.buttons.backToMenu'),
            nextStep : t('pages.soloGame.buttons.nextStep'),
            back : t('pages.soloGame.buttons.back')
        },
        modal : {
            titleNextStep : t('pages.soloGame.modal.titleNextStep'),
            titleNextLevel : t('pages.soloGame.modal.titleNextLevel'),
            contentNextStep : t('pages.soloGame.modal.contentNextStep'),
            contentNextLevel : t('pages.soloGame.modal.contentNextLevel'),
            confirmationButton : t('pages.soloGame.modal.confirmationButton'),
            cancelButton : t('pages.soloGame.modal.cancelButton')
        },

        noAudioRecorded : t('pages.soloGame.noAudioRecorded')

    }

	return json({ transposition: cookie.transposition, translations:translations });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {

    if (!data) return  []

    return [
        { title: data.translations.title },
        { name: "description", content: data.translations.description },
    ];
};

/*
 * TODO
    titres des niveaux présentation, exploration et intégration.
    canvas musique toujours meme taille avec les boutons enregistrer et nouveau motif intégré ; bg-white, w-[50%]
    fleches prog des niveaux défilement vers le bas
    soloIndx dans game
 * 
 */

export default function SoloGame() {

    const { transposition, translations } = useLoaderData<typeof loader>();
    const recordings = useLiveQuery(() => db.recordings.toArray());

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

    function isSubLevelCompleted(subLvlTitle:string) {

        if (!recordings) return false

        console.log(subLvlTitle)

        for (let i = 0; i < recordings.length; i++) {

            const r = recordings[i]

            if (r.levelName === subLvlTitle) {
                return true
            }

        }

        return false
    }

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
                    <div className='flex flex-col gap-2 max-w-[800px] self-center'>
                        <h2 className="text-4xl font-bold self-center pb-2">{translations.title}</h2>
                        <p className=''>
                            {translations.description}
                        </p>
                        <p>
                            {translations.description2}<span className='font-bold'>{translations.presentation}</span>, <span className='font-bold'>{translations.exploration}</span> {translations.and} <span className='font-bold'>{translations.integration}</span>.
                        </p>
                        <p>
                            {translations.description3}
                        </p>
                        <h3 className='text-xl font-bold'>{translations.playOnline}</h3>
                        <p>
                            {translations.playOnlineDesc}
                        </p>
                    </div>
                    
                    <div className="self-center text-4xl font-bold pt-4">{translations.levels}</div>
                    <div className="flex flex-col gap-2">
                        {levelList.map((level, index) => (
                            <div key={level.id} className=" flex flex-col gap-2 max-w-xs items-center self-center">
                                <Button
                                    size="lg"
                                    key={level.name}
                                    
                                    onPress={() => {
                                        console.log('change lvl')
                                        window.scrollTo({top:0})
                                        setIsMenu(false);
                                        setCurrentLvl(level);
                                        setCurrentSubLvl(level.intro);
                                        
                                    }}
                                    disabled={level.locked}
                                >
                                    {translations.lvlTitles[level.url]}
                                </Button>
                                {index !== levelList.length - 1 && <ArrowDownIcon className="w-8"/>}
                            </div>
                            
                        ))}
                    </div>
                </div>

                
            ) : (
                <SubLvl
                    name={currentSubLvl.name}
                    title={currentSubLvl.title}
                    description={currentSubLvl.description}
                    transposition={transposition}
                    vfTitle={currentSubLvl.vfTitle}
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
                            {translations.buttons.backToMenu}
                        </Button>
                    </div>
                    <div className="flex gap-2">
                        {
                            currentSubLvl.name !== "intro" &&
                                <Button
                                    onPress={() => {
                                        if (currentSubLvl.name === "freeImprov") {
                                            setCurrentSubLvl(currentLvl.intro);
                                        } else if (currentSubLvl.name === "repertoireImprov") {
                                            setCurrentSubLvl(currentLvl.freeImprov);
                                        }
                                    }}
                                >
                                    {translations.buttons.back}
                                </Button>
                        }
                        {
                            currentSubLvl.name === "intro" &&
                            <Button
                                onPress={() => {

                                    setCurrentSubLvl(currentLvl.freeImprov);

                                }}
                            >
                                {translations.buttons.nextStep}
                            </Button>
                        }
                        {currentSubLvl.name === "freeImprov" &&
                            <>
                                {isSubLevelCompleted(currentSubLvl.title) ? (
                                    <Button
                                        onPress={() => {
                                            if (subLevelRef.current) {
                                                subLevelRef.current.removeAudio()
                                            }
                                            setCurrentSubLvl(currentLvl.repertoireImprov);
                                        }}
                                    >
                                        {translations.buttons.nextStep}
                                    </Button>
                                ) : (
                                    <MyModal
                                        title={translations.modal.titleNextStep}
                                        content={translations.modal.contentNextStep}
                                        isAction={true}
                                        confirmatonButton={translations.modal.confirmationButton}
                                        cancelButton={translations.modal.cancelButton}
                                        onConfirmation={() => {
                                            const audioDiv = document.getElementById("recorded-audio");
                                            if (audioDiv?.hasChildNodes()) {
                                                if (subLevelRef.current) {
                                                    subLevelRef.current.saveAudioToProfile(true)
                                                }
                                                setCurrentSubLvl(currentLvl.repertoireImprov);
                                            } else {
                                                window.alert(translations.noAudioRecorded);
                                            }
                                        }}
                                    />
                                )}
                            </>
                        }
                        {currentSubLvl.name === "repertoireImprov" &&
                            <>
                                {isSubLevelCompleted(currentSubLvl.title) ? (
                                    <Button
                                        onPress={() => {
                                            if (subLevelRef.current) {
                                                subLevelRef.current.removeAudio()
                                            }
                                            setIsMenu(true);
                                        }}
                                    >
                                        Niveau suivant
                                    </Button>
                                ) : (
                                    <MyModal
                                        title={translations.modal.titleNextLevel}
                                        content={translations.modal.contentNextLevel}
                                        isAction={true}
                                        confirmatonButton={translations.modal.confirmationButton}
                                        cancelButton={translations.modal.cancelButton}
                                        onConfirmation={() => {
                                            const audioDiv = document.getElementById("recorded-audio");
                                            console.log(audioDiv);
                                            if (audioDiv?.hasChildNodes()) {
                                                if (subLevelRef.current) {
                                                    subLevelRef.current.saveAudioToProfile(true)
                                                }
                                                setIsMenu(true);
                                            } else {
                                                window.alert(translations.noAudioRecorded);
                                            }
                                        }}
                                    />
                                )}
                            </>                     
                        }
                    </div>
                    
                </div>
            )}
        </div>
    );
}

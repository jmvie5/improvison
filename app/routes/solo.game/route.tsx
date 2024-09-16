import PentaMaj from "../solo.game.$level/levels/tutorial/PentaMaj";
import PentaMin from "../solo.game.$level/levels/tutorial/PentaMin";
import Motifs from "../solo.game.$level/levels/tutorial/Motifs";
import MajorScale from '../solo.game.$level/levels/tutorial/MajorScale'
import TargetNotes from "../solo.game.$level/levels/lvl2/TargetNotes";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { LevelInterface } from "../solo.game.$level/levels/types";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import {
    json,
    type LoaderFunctionArgs,
    type MetaFunction,
  } from "@remix-run/node";
import { Outlet , useLoaderData, useLocation, useOutletContext, useNavigate } from "@remix-run/react";
import MinorScale from "../solo.game.$level/levels/tutorial/MinorScale";
import i18nextServer from "~/i18next.server";

export async function loader({ request, params }: LoaderFunctionArgs) {

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
            nextLevel : t('pages.soloGame.buttons.nextLevel'),
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

	return json({ translations:translations, level:params.level });
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

    const location = useLocation().pathname

    const navigate = useNavigate()

    const { translations } = useLoaderData<typeof loader>();
    const transposition:string = useOutletContext()

    const errorModal = useDisclosure()

    /* Page principale du jeu
    
    Une fois log in, les utilisateurs voient le menu de tous les niveaux, puis ils choisissent quel niveau ouvrir, ce qui cache le menu et affiche le component lié au niveau.

    Role de la page:
    - Navigation entre le menu et les niveaux
    - (TODO) Vérification de la complétion du niveau lorsque demandé par l'utilisateur
    - (TODO) Appels à la BD pour changer les valeurs "locked" et "completed" de chaque niveau une fois complété
    */

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
            <Modal isOpen={errorModal.isOpen} onOpenChange={errorModal.onOpenChange} size="xl">
                <ModalContent>
                    <ModalHeader>Error</ModalHeader>
                    <ModalBody>
                        {translations.noAudioRecorded}
                    </ModalBody>
                    <ModalFooter>
                            <Button
                                color="success"
                                onPress={() => {
                                    errorModal.onClose()
                                }}
                            >
                                Ok
                            </Button>
                    </ModalFooter>
                </ModalContent>
                
            </Modal>
            {location === "/solo/game" ? (
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
                        <h3 className='text-xl font-bold pt-4'>{translations.playOnline}</h3>
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
                                        window.scrollTo({top:0})
                                        // setCurrentLvl(level);
                                        // setCurrentSubLvl(level.intro);
                                        navigate(`/solo/game/${level.url}`) // as={Link} does not work
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
                <Outlet
                    context={{transposition}}
                />
            )}
        </div>
    );
}

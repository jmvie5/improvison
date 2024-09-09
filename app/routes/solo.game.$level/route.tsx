import { useState, useRef } from "react";
import SubLvl from "./components/SubLvl"
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useOutletContext, useRouteError, useNavigate, Navigate } from "@remix-run/react";
import { LevelInterface, SubLvlInterface } from "./levels/types";
import tutoLvls from "./levels/tutorial/levelIndex"
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "~/db";
import MyModal from "~/components/MyModal";
import i18nextServer from "~/i18next.server";

export async function loader({ request, params }: LoaderFunctionArgs) {

    const lvlUrl = params.level;
    const t = await i18nextServer.getFixedT(request);

    if (!lvlUrl) {
        throw new Error("Not a valid URL")
    }

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

    return json({ lvlUrl, translations })

}

export default function level() {

    const navigate = useNavigate()
    const { lvlUrl, translations } = useLoaderData<typeof loader>()

    const context:{
        currentSubLvl: SubLvlInterface,
        transposition: string,
        subLevelRef: React.MutableRefObject<any>
    } = useOutletContext()

    const currentSubLvl = context.currentSubLvl


   /*  const firstSubLvl = tutoLvls.find((lvl) => lvl.url === lvlUrl);

    const [currentLvl, setCurrentLvl] = useState(firstSubLvl ? firstSubLvl : {} as LevelInterface);
    const [currentSubLvl, setCurrentSubLvl] = useState(firstSubLvl ? firstSubLvl.intro : {} as SubLvlInterface);
    const subLevelRef = useRef<any>()
    const recordings = useLiveQuery(() => db.recordings.toArray());
    const errorModal = useDisclosure() */

    /* function isSubLevelCompleted(subLvlTitle:string) {

        if (!recordings) return false

        console.log(subLvlTitle)

        for (let i = 0; i < recordings.length; i++) {

            const r = recordings[i]

            if (r.levelName === subLvlTitle) {
                return true
            }

        }

        return false
    } */
    
    return (
        <div className="h-full flex flex-col grow justify-between">
            {/* <Modal isOpen={errorModal.isOpen} onOpenChange={errorModal.onOpenChange} size="xl">
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
                
            </Modal> */}
            <SubLvl
                name={currentSubLvl.name}
                title={currentSubLvl.title}
                description={currentSubLvl.description}
                transposition={context.transposition}
                vfTitle={currentSubLvl.vfTitle}
                vfProps={currentSubLvl.vfProps}
                vf_w={currentSubLvl.vf_w}
                vf_h={currentSubLvl.vf_h}
                reRender={currentSubLvl.reRender}
                ref={context.subLevelRef}
            />
            {/* <footer>
            <div className="flex  shadow-lg-rev  justify-between p-4 bg-bleu-fonce">
                    <div className="flex gap-2 self-end">
                        <Button
                            onPress={() => {
                                navigate("/solo/game")
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
                                                errorModal.onOpen()
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
                                            navigate("/solo/game")
                                        }}
                                    >
                                        {translations.buttons.nextLevel}
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
                                                navigate("/solo/game")
                                            } else {
                                                errorModal.onOpen()
                                            }
                                        }}
                                    />
                                )}
                            </>                     
                        }
                    </div>
                    
                </div>
            </footer> */}
        </div>
        
    )
}

export function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);

    Navigate({ to: "/solo/game" });
    return (
     <div></div>
    );
  }
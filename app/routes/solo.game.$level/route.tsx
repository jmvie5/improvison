import { useState, useEffect, useRef } from "react";
import SubLvl from "./components/SubLvl"
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useOutletContext, useRouteError, useNavigate, Navigate, Link } from "@remix-run/react";
import { SubLvlInterface } from "./levels/types";
import allLevels from "./levels";
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
        buttons : {
            newMotif : t('pages.soloGameLevels.footer.newMotif'),
            backToMenu : t('pages.soloGameLevels.footer.backToMenu'),
            nextStep : t('pages.soloGameLevels.footer.nextStep'),
            nextLevel : t('pages.soloGameLevels.footer.nextLevel'),
            back : t('pages.soloGameLevels.footer.back')

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

let isHydrating = true;

export default function Level() {
    const [isHydrated, setIsHydrated] = useState(
        !isHydrating
    );

    const navigate = useNavigate()
    const { lvlUrl, translations } = useLoaderData<typeof loader>()

    const context:{
        transposition: string,
    } = useOutletContext()

    // const currentSubLvl = context.currentSubLvl
    const currentLvl = allLevels.find((lvl) => lvl.url === lvlUrl)!;
    const [currentSubLvl, setCurrentSubLvl] = useState(currentLvl.intro as SubLvlInterface);
    const subLevelRef = useRef<{removeAudio: () => void, saveAudioToProfile: (remove: boolean) => Promise<void>}>()
    const recordings = useLiveQuery(() => db.recordings.toArray());
    const errorModal = useDisclosure()

    useEffect(() => {
        isHydrating = false;
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }, [currentSubLvl])

    function isSubLevelCompleted(subLvlTitle:string) {

        if (!recordings) return false

        for (let i = 0; i < recordings.length; i++) {

            const r = recordings[i]

            if (r.levelName === subLvlTitle) {
                return true
            }

        }

        return false
    }
    if (isHydrated) {
        return (
            <div className="h-full flex flex-col grow justify-between">
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
                    ref={subLevelRef}
                />
                <footer>
                <div className="flex  shadow-lg-rev  justify-between p-4 bg-bleu-fonce">
                        <div className="flex gap-2 self-end">
                            <Button
                                as={Link}
                                to={"/solo/game"}
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
                                            as={Link}
                                            to={"/solo/game"}
                                            onPress={() => {
                                                if (subLevelRef.current) {
                                                    subLevelRef.current.removeAudio()
                                                }
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
                </footer>
            </div>
            
        );
    } else {
        return <div></div>;
    }
}

export function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);

    Navigate({ to: "/solo/game" });
    return (
     <div></div>
    );
  }
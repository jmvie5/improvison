import { useEffect, useState, useCallback, forwardRef, useImperativeHandle } from "react";
import { Factory } from "vexflow";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import transpose, { transposeProps } from "../../../utils/transposition";
// import UserInterface from "./userComponents/UserInterface";
// import authService from "../services/authService";
import { Button, Chip } from "@nextui-org/react";
import { SubLvlInterface } from "../levels/types";
import { CheckIcon } from "@heroicons/react/24/outline";
import { db } from '../../../db';
import { t } from "i18next";
import { twMerge } from 'tailwind-merge'
import { useLocale } from "remix-i18next/react";


type SubLvlProps = {
    name: string;
    title: string;
    description: (transposition?:string) => JSX.Element;
    transposition: string;
    vfTitle?: string;
    vfProps: {
        template: (vf: Factory, keySignature: string, scaleNotes: string[], nbBars: number, timeSignature: number, chords: string[]) => Factory;
        keySignature: string;
        scaleNotes: string[];
        nbBars: number;
        timeSignature: number;
        chords: string[];
    };
    vf_w: number;
    vf_h: number;
    reRender: boolean
}

const SubLvl = forwardRef(function SubLvl({ name, title, vfTitle, description, transposition, vfProps, vf_w, vf_h, reRender }: SubLvlProps, ref) {

    const [audioUrl, setAudioUrl] = useState("");
    const [audioBlob, setAudiBlob] = useState<Blob>()
    // const [playerKey, _setPlayerKey] = useState("C");
    const [showSaved, setShowSaved] = useState(false)
    const [desc, setDesc] = useState<JSX.Element>()
    const locale = useLocale()

    const recorderControls = useAudioRecorder({noiseSuppression:false}, (err) => console.table(err), {audioBitsPerSecond: 128000})

    useImperativeHandle(ref, () => {

        return {
            saveAudioToProfile,
            removeAudio
        }
    })

    const drawVf = useCallback(() => {
        clearVf();
        // transpose() if needed
        let transposedVf:SubLvlInterface["vfProps"]
        if (vfProps.template.name === "randomRhythmGenerator") {
            transposedVf = vfProps;
        } else {
            const transposedVfProps:transposeProps = transpose(transposition, {
                keySignature: vfProps.keySignature,
                scaleNotes: vfProps.scaleNotes,
                chords: vfProps.chords
            })!

            transposedVf = {
                template: vfProps.template,
                keySignature: transposedVfProps.keySignature,
                scaleNotes: transposedVfProps.scaleNotes,
                nbBars: vfProps.nbBars,
                timeSignature: vfProps.timeSignature,
                chords: transposedVfProps.chords
            }
        }
        // create empty Factory
        let vf = new Factory({
            renderer: { elementId: "vf", width: -1, height: -1 },
        });
        // render sheet music
        vf = transposedVf.template(
            new Factory({
                renderer: { elementId: "vf", width: vf_w, height: vf_h },
            }),
            transposedVf.keySignature,
            transposedVf.scaleNotes,
            transposedVf.nbBars,
            transposedVf.timeSignature,
            transposedVf.chords,
        )
        vf.draw();
    }, [transposition, vfProps, vf_w, vf_h]);

    /* useEffect(() => {
        authService.getLoginStatus(
            (user: UserInterface) => {
                setPlayerKey(user.transposition);
                drawVf();
            },
            () => {
                window.alert("failed to auth");
            },
        );
    }, [drawVf]); */

    useEffect(() => {
        drawVf()
    }, [vfProps, transposition])

    useEffect(() => {
        removeAudio();
        setShowSaved(false);
    }, [name])

    useEffect(() => {
        console.log(locale)
        setTimeout(() => {
            setDesc(description(transposition))
        }, 10)
        
    }, [locale])

    function clearVf() {
        const staff = document.getElementById("vf");
        while (staff?.hasChildNodes()) {
            staff.removeChild(staff.lastChild!);
        }
    }

    const addAudioElement = (blob: Blob) => {
        setAudiBlob(blob)
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        const audioDiv = document.getElementById("recorded-audio");
        while (audioDiv?.hasChildNodes()) {
            audioDiv.removeChild(audioDiv.lastChild!);
        }
        audioDiv?.appendChild(audio);
        setAudioUrl(url);
    };

    function removeAudio() {
        URL.revokeObjectURL(audioUrl);
        const audioDiv = document.getElementById("recorded-audio");
        while (audioDiv?.hasChildNodes()) {
            audioDiv.removeChild(audioDiv.lastChild!);
        }
        setAudioUrl("");
    }

    async function saveAudioToProfile(remove:boolean) {
        try {
            
            if (audioBlob) {
                const newRecordingId = await db.recordings.add({
                    audioBlob: audioBlob,
                    levelName: title,
                });
                console.log(`Recording successfully added. Got id ${newRecordingId}.`)
                if (remove) {
                    removeAudio();
                }
            } else {
                console.warn('No Blob!')
            }
                
        } catch (error) {
            console.warn('Error when intereacting with db')
        }
    }

    return (
        <div className="grid grid-cols-1 2xl:grid-cols-3 h-full  mb-8 p-4 gap-4 justify-around">
            <div>
                {/* <h2 className="mb-2 font-semibold">{title}</h2> */}
                {desc}
            </div>

            <div className="col-span-2 flex flex-col w-full h-fit ">
                <div className="flex flex-col gap-2 w-full h-full bg-slate-200 ring-2  ring-slate-200 border-bleu-pale border-3 roudnded-sm p-4">
                    <span className="text-black text-xl font-semibold">{vfTitle}</span>
                    <div
                        id="vf"
                        className={`mt-2 w-full h-full place-self-center rounded`}
                    />
                    <div className="flex flex-col gap-2 justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between w-full border flex-wrap gap-y-4">

                                <div className={twMerge(" hover:ring ring-blue-900 w-fit", recorderControls.isRecording ? "rounded-xl" : "rounded-full")}>
                                    <AudioRecorder
                                        onRecordingComplete={(blob) => addAudioElement(blob)}
                                        recorderControls={recorderControls}
                                        downloadOnSavePress={false}
                                        downloadFileExtension="webm"
                                        showVisualizer={true}
                                    />
                                </div>
                                {reRender ? (
                                    <Button
                                        onClick={drawVf}
                                        className="btn-primary col-start-2 justify-self-end self-center"
                                    >
                                        {t('pages.soloGame.buttons.newMotif')}
                                    </Button>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 w-fit">
                                <div id="recorded-audio"></div>
                                {audioUrl !== "" && 

                                    <div className={twMerge("grid grid-cols-2 w-full", showSaved ? "" : "")}>

                                        <Button 
                                            onPress={() => {
                                                removeAudio();
                                                setShowSaved(false);
                                            }} 
                                            className="btn-primary"
                                        >
                                            Effacer l{"'"}enregistrement
                                        </Button>
                                        <div className="flex flex-col sm:flex-row items-center gap-2">
                                            <Button 
                                                onPress={() => {
                                                    saveAudioToProfile(false)
                                                    setShowSaved(true)
                                                }} 
                                                className="btn-primary mx-2 ">
                                                Sauvegarder
                                            </Button>
                                            {showSaved &&       
                                            <Chip
                                                className="self-center row-span-2"
                                                color="success"
                                            >
                                                <CheckIcon className="w-8 p-1" />
                                            </Chip>
                                        }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>


                    </div>
                </div>
                <iframe 
                    src="https://guitarapp.com/metronome.html?embed=true&tempo=120&timeSignature=2&pattern=0" 
                    title="Online Metronome" 
                    className="h-[520px] w-[360px] mt-4 self-center"
                /> 
            </div>
        </div>
    );
})

export default SubLvl
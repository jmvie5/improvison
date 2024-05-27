import { ReactElement, useEffect, useState, useCallback, forwardRef, useImperativeHandle } from "react";
import { Factory } from "vexflow";
import { AudioRecorder } from "react-audio-voice-recorder";
// import Metronome from "@kevinorriss/react-metronome";
import transpose, { transposeProps } from "../../utils/transposition";
// import UserInterface from "./userComponents/UserInterface";
// import authService from "../services/authService";
import { Button } from "@nextui-org/react";
import { SubLvlInterface } from "./levels/types";

import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db';


type SubLvlProps = {
    name: string;
    title: string;
    description: (transposition?:string) => JSX.Element;
    transposition: string;
    vfProps: {
        template: Function;
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

const SubLvl = forwardRef(function SubLvl({ name, title, description, transposition, vfProps, vf_w, vf_h, reRender }: SubLvlProps, ref) {

    const [audioUrl, setAudioUrl] = useState("");
    const [audioBlob, setAudiBlob] = useState<Blob>()
    // const [playerKey, _setPlayerKey] = useState("C");


    useImperativeHandle(ref, () => {

        return {
            async saveAudioToProfile() {
                try {
                    
                    if (audioBlob) {
                        const newRecordingId = await db.recordings.add({
                            audioBlob: audioBlob,
                            levelName: title,
                        });
                        console.log(`Recording successfully added. Got id ${newRecordingId}.`)
                        removeAudio();
                    } else {
                        console.warn('No Blob!')
                    }
                        
                } catch (error) {
                    console.warn('Error when intereacting with db')
                }
            }
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

    return (
        <div className="flex flex-col xl:flex-row mb-8 p-4 gap-4 justify-around">
            <div>
                <h2 className="mb-2 font-semibold">{title}</h2>
                {description(transposition)}
            </div>

            <div className="flex flex-col items-center rounded-sm">
                <div>
                    <div>
                        <div
                            id="vf"
                            className={`bg-slate-200 mt-2 w-[${String(vf_w)}px] h-[${String(
                                vf_h,
                            )}px] place-self-center rounded`}
                        ></div>
                    </div>
                    <div className="grid grid-cols-2 justify-between">
                        {name === "freeImprov" || name === "repertoireImprov" ? (
                            <div className="flex flex-col gap-2 m-2">
                                <div className="rounded-full hover:ring ring-blue-900 w-fit">
                                    <AudioRecorder
                                        onRecordingComplete={addAudioElement}
                                        audioTrackConstraints={{
                                            noiseSuppression: true,
                                            echoCancellation: true,
                                            // autoGainControl,
                                            // channelCount,
                                            // deviceId,
                                            // groupId,
                                            // sampleRate,
                                            // sampleSize,
                                        }}
                                        onNotAllowedOrFound={(err) => console.table(err)}
                                        downloadOnSavePress={false}
                                        downloadFileExtension="webm"
                                        mediaRecorderOptions={{
                                            audioBitsPerSecond: 128000,
                                        }}
                                        showVisualizer={true}
                                    />
                                </div>

                                <div className="">
                                    <div id="recorded-audio"></div>
                                    {audioUrl !== "" ? (
                                        <Button onClick={removeAudio} className="btn-primary mt-2">
                                            Effacer l'enregistrement
                                        </Button>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        {reRender ? (
                            <Button
                                onClick={drawVf}
                                className="btn-primary m-2 col-start-2 justify-self-end self-center"
                            >
                                Nouveau motif
                            </Button>
                        ) : (
                            <></>
                        )}
                    </div>
                    {/* <div className="max-w-xs my-4 min-w-full">
                        <Metronome
                            playPauseStyle={{ backgroundColor: "rgb(23 37 84)" }}
                            plusStyle={{ backgroundColor: "rgb(23 37 84)" }}
                            minusStyle={{ backgroundColor: "rgb(23 37 84)" }}
                            handleStyle={{ backgroundColor: "rgb(23 37 84)" }}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
})

export default SubLvl
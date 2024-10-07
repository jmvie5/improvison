import { useEffect, useState, useCallback } from "react";
import { Factory } from "vexflow";
import transpose, { transposeProps } from "../utils/transposition";
import { Button } from "@nextui-org/react";
import { t } from "i18next";

export interface sheetMusicInterface {
    transposition?:string;
    vfProps: {
        template: (
            vf: Factory,
            keySignature: string,
            scaleNotes: string[],
            nbBars: number,
            timeSignature: number,
            chords: string[]
        ) => Factory;
        keySignature: string;
        scaleNotes: string[];
        nbBars: number;
        timeSignature: number;
        chords: string[];
    };
    vf_w: number;
    vf_h: number;
    reRender: boolean;
}

export default function SheetMusic({ transposition, vfProps, vf_h, vf_w, reRender }: sheetMusicInterface) {
    const sheetId = Math.floor(Math.random() * 1000);
    const playerKey = transposition || "C";

    const drawVf = useCallback(() => {
        clearVf();
       // transpose() if needed
       let transposedVf:sheetMusicInterface["vfProps"]
       if (vfProps.template.name === "randomRhythmGenerator") {
           transposedVf = vfProps;
       } else {
           const transposedVfProps:transposeProps = transpose(playerKey, {
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

        const vfElement = document.getElementById(`sheetMusic_${sheetId}`)
        if (vfElement) {
            // create empty Factory
            let vf = new Factory({
                renderer: { elementId: `sheetMusic_${sheetId}`, width: -1, height: -1 },
            });
            // render sheet music
            vf = transposedVf.template(
                new Factory({
                    renderer: { elementId: `sheetMusic_${sheetId}`, width: vf_w, height: vf_h },
                }),
                transposedVf.keySignature,
                transposedVf.scaleNotes,
                transposedVf.nbBars,
                transposedVf.timeSignature,
                transposedVf.chords,
            )
            vf.draw();
        }
        
    }, [playerKey, vfProps, sheetId, vf_h, vf_w]);

    useEffect(() => {
        drawVf();
    }, [transposition, vfProps]);

    function clearVf() {
        const staff = document.getElementById(`sheetMusic_${sheetId}`);
        while (staff?.hasChildNodes()) {
            staff.removeChild(staff.lastChild!);
        }
    }

    return (

        <div className={`flex flex-col bg-slate-200 my-2 p-4 w-fit h-fit place-self-center rounded`}>
            <div
                id={`sheetMusic_${sheetId}`}
                
            >
                
            </div>
            {reRender ? (
                <Button
                    onClick={drawVf}
                    className="btn-primary col-start-2 self-end"
                    color="primary"
                >
                    {t('pages.soloGameLevels.vf.newMotif')}
                </Button>
            ) : (
                <></>
            )}
        </div>
        

    );
}

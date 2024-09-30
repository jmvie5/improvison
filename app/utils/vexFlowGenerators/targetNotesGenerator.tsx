import { Factory, StemmableNote } from "vexflow";
import beamDirection from "../vexFlowUtils/beamDirection";
import chordNotation from "../chordNotation";
import notesFromKey from "~/utils/notesFromKey";
import { useEffect } from "react";

/**
 * 
 * @param vf 
 * @param keySignature 
 * @param scaleNotes Arpegio notes on which to genreate target notes
 * @param nbBars min 2 for this generator to work
 * @param timeSignature 
 * @param chords 
 * @returns 
 */
export default function targetNotesGenerator(
    vf: Factory,
    keySignature: string,
    scaleNotes: string[],
    nbBars: number,
    timeSignature: number,
    chords: string[],
) {

    const allTargetNotes:string[] = []

    for (let i = 0; i < nbBars; i++) {
        allTargetNotes.push(getRandomElement(scaleNotes))
    }

    const c = chordNotation(chords)

    const score = vf.EasyScore();
    const voice = score.voice.bind(score);
    const notes = score.notes.bind(score);
    const beam = score.beam.bind(score);
    const concat = (a: StemmableNote[], b: StemmableNote[]): StemmableNote[] => a.concat(b);

    score.set({ time: `${timeSignature}/4` });
    let x = 20;
    let y = -100;
    let newLineWidth = 240;

    if (keySignature === "C") {
        newLineWidth = 240;
    } else if (["F", "G"].includes(keySignature)) {
        newLineWidth = 260;
    } else if (["Bb", "D"].includes(keySignature)) {
        newLineWidth = 270;
    } else if (["Eb", "A"].includes(keySignature)) {
        newLineWidth = 280;
    } else if (["Ab", "E"].includes(keySignature)) {
        newLineWidth = 290;
    } else if (["Db", "B"].includes(keySignature)) {
        newLineWidth = 300;
    } else if (["Gb", "F#"].includes(keySignature)) {
        newLineWidth = 310;
    } else {
        newLineWidth = 330;
    }

    function appendSystem(width: number) {
        const system = vf.System({ x, y, width, spaceBetweenStaves: 10 });
        x += width;
        return system;
    }

    function getRandomElement(array: string[]) {
        return array[Math.floor(Math.random() * array.length)];
    }


    /**
     * Make sure to not call this function for the last bar, use just allTargetNotes[allTargetNotes.length - 1]
     * @param barNumber bar 1 = 0
     * @returns notes compatible with vexFlow voice 
     */
    function getNotes(barNumber:number) {
        const keyNotes = notesFromKey(keySignature).allNotesWithNumber

        const barNotes: StemmableNote[][] = [];

        barNotes.push(notes(`${allTargetNotes[barNumber]}/h`));
        barNotes.push(notes(`B4/q/r`));
        const targetNote = allTargetNotes[barNumber + 1]
        const tgIndex = keyNotes.indexOf(targetNote)
        // 50/50 it's gonna be a quarter note or two 8th notes
        if (Math.random() < 0.5) {

            // 50/50 note above or bellow
            if (Math.random() < 0.5) {

                const neighbor = tgIndex + 1
                barNotes.push(notes(`${keyNotes[neighbor]}/q`));

            } else {

                const neighbor = tgIndex - 1
                barNotes.push(notes(`${keyNotes[neighbor]}/q`));

            }

        } else {
            const outcome = Math.random()
            if (outcome < 0.25) {
                const eighthNotesStr = [keyNotes[tgIndex + 2], keyNotes[tgIndex + 1]]
                barNotes.push(
                    beam(
                        notes(`${eighthNotesStr[0]}/8, ${eighthNotesStr[1]}`, {
                            stem: beamDirection([eighthNotesStr[0], eighthNotesStr[1]]),
                        }),
                    ),
                )
            } else if (outcome < 0.5) {
                const eighthNotesStr = [keyNotes[tgIndex - 2], keyNotes[tgIndex - 1]]
                barNotes.push(
                    beam(
                        notes(`${eighthNotesStr[0]}/8, ${eighthNotesStr[1]}`, {
                            stem: beamDirection([eighthNotesStr[0], eighthNotesStr[1]]),
                        }),
                    ),
                )
            } else if (outcome < 0.75) {
                const eighthNotesStr = [keyNotes[tgIndex + 1], keyNotes[tgIndex - 1]]
                barNotes.push(
                    beam(
                        notes(`${eighthNotesStr[0]}/8, ${eighthNotesStr[1]}`, {
                            stem: beamDirection([eighthNotesStr[0], eighthNotesStr[1]]),
                        }),
                    ),
                )
            } else {
                const eighthNotesStr = [keyNotes[tgIndex - 1 ], keyNotes[tgIndex + 1]]
                barNotes.push(
                    beam(
                        notes(`${eighthNotesStr[0]}/8, ${eighthNotesStr[1]}`, {
                            stem: beamDirection([eighthNotesStr[0], eighthNotesStr[1]]),
                        }),
                    ),
                )
            }
        }


        return barNotes.reduce(concat);
    }

    let system;
    /* If only 1 bar */
    if (nbBars === 1) {
        throw new Error('This generator needs at least two bars.')
    } else {
        for (let i = 0; i < nbBars - 1; i++) {
            /* New lines (each 4 bars) */
            if (i % 4 === 0) {
                x = 20;
                y += 100;
                system = appendSystem(newLineWidth);
                system
                    .addStave({
                        voices: [voice(getNotes(i))],
                    })
                    .setText(c[i], 1, { shift_x: 150, shift_y: -50 })
                    .addClef("treble")
                    .addTimeSignature(`${timeSignature}/4`)
                    .addKeySignature(keySignature);
            } else {
                system = appendSystem(180);
                system
                    .addStave({
                        voices: [voice(getNotes(i))],
                    })
                    .setText(c[i], 1, { shift_x: 60, shift_y: -50 });
            }
        }
        /* Last Bar */
        system = appendSystem(180);
        system
            .addStave({
                voices: [voice(
                    notes(`${allTargetNotes[allTargetNotes.length - 1]}/w`),
                )],
            })
            .setText(c[c.length - 1], 1, { shift_x: 60, shift_y: -50 })
            .setEndBarType(3);
    }
    

    return vf;
}

import { Factory, StemmableNote } from "vexflow";
import beamDirection from "../vexFlowUtils/beamDirection";
import chordNotation from "../chordNotation";

export default function randomMelodyGenerator(
    vf: Factory,
    keySignature: string,
    scaleNotes: string[],
    nbBars: number,
    timeSignature: number,
    chords: string[],
) {
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

    /* return notes[] compatible with vexFlow voice */
    function getNotes() {
        const barNotes: StemmableNote[][] = [];
        let timeLeft = timeSignature;
        while (timeLeft > 0) {
            if (timeLeft > 1) {
                const r = getRandomElement(["h", "q", "8"]);
                if (r === "h") {
                    barNotes.push(notes(`${getRandomElement(scaleNotes)}/h`));
                    timeLeft -= 2;
                } else if (r === "q") {
                    barNotes.push(notes(`${getRandomElement(scaleNotes)}/q`));
                    timeLeft -= 1;
                } else if (r === "8") {
                    const eighthNotes = [getRandomElement(scaleNotes), getRandomElement(scaleNotes)];
                    barNotes.push(
                        beam(
                            notes(`${eighthNotes[0]}/8, ${eighthNotes[1]}`, {
                                stem: beamDirection([eighthNotes[0], eighthNotes[1]]),
                            }),
                        ),
                    );
                    timeLeft -= 1;
                }
            } else {
                const r = getRandomElement(["q", "8"]);
                if (r === "q") {
                    barNotes.push(notes(`${getRandomElement(scaleNotes)}/q`));
                    timeLeft -= 1;
                } else if (r === "8") {
                    const eighthNotes = [getRandomElement(scaleNotes), getRandomElement(scaleNotes)];
                    barNotes.push(
                        beam(
                            notes(`${eighthNotes[0]}/8, ${eighthNotes[1]}`, {
                                stem: beamDirection([eighthNotes[0], eighthNotes[1]]),
                            }),
                        ),
                    );
                    timeLeft -= 1;
                }
            }
        }
        return barNotes.reduce(concat);
    }

    let system;
    /* If only 1 bar */
    if (nbBars === 1) {
        y += 100;
        system = appendSystem(newLineWidth);
        system
            .addStave({
                voices: [voice(getNotes())],
            })
            .setText(c[0], 1, { shift_x: 150, shift_y: -50 })
            .addClef("percussion")
            .addTimeSignature(`${timeSignature}/4`)
            .addKeySignature(keySignature)
            .setEndBarType(3);
    } else {
        for (let i = 0; i < nbBars - 1; i++) {
            /* New lines (each 4 bars) */
            if (i % 4 === 0) {
                x = 20;
                y += 100;
                system = appendSystem(newLineWidth);
                system
                    .addStave({
                        voices: [voice(getNotes())],
                    })
                    .setText(c[i], 1, { shift_x: 150, shift_y: -50 })
                    .addClef("treble")
                    .addTimeSignature(`${timeSignature}/4`)
                    .addKeySignature(keySignature);
            } else {
                system = appendSystem(180);
                system
                    .addStave({
                        voices: [voice(getNotes())],
                    })
                    .setText(c[i], 1, { shift_x: 60, shift_y: -50 });
            }
        }
        /* Last Bar */
        system = appendSystem(180);
        system
            .addStave({
                voices: [voice(getNotes())],
            })
            .setText(c[c.length - 1], 1, { shift_x: 60, shift_y: -50 })
            .setEndBarType(3);
    }
    

    return vf;
}

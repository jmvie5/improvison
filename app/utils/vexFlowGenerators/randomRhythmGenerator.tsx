import { Factory } from "vexflow";
import chordNotation from "../chordNotation";

export default function randomRhythmGenerator(
    vf: Factory,
    keySignature: string,
    scaleNotes: string[],
    nbBars: number,
    timeSignature: number,
    chords: string[],
) {
    /* 
    scaleNotes can include :
        "h" = hole notes,
        "q" = quarter notes
        "2x8" = two eighth notes
        "8" = eighth note and a half rest
    */
    if (scaleNotes.length === 1 && scaleNotes.includes("h")) {
        throw new Error("scaleNotes must use at least quarter notes ('q') or eighth notes ('2x8' or '8')")
    }

    const c = chordNotation(chords)

    const score = vf.EasyScore();
    const voice = score.voice.bind(score);
    const notes = score.notes.bind(score);
    const beam = score.beam.bind(score);
    const concat = (a: any[], b: any[]): any[] => a.concat(b);

    score.set({ time: `${timeSignature}/4` });
    let x = 20;
    let y = -100;
    let newLineWidth = 240;


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
        var barNotes: any[] = [];
        var timeLeft = timeSignature;
        var nbNotes = 0;
        var noHalf = true

        while (timeLeft > 0) {
            if (timeLeft > 1 && noHalf) {
                let r = getRandomElement(scaleNotes);
                if (r === "h") {
                    /* 50% change to get silence */
                    if (Math.random() < 0.5 && (nbNotes > 1 || timeLeft === 4)) {
                        barNotes.push(notes(`B4/h/r`));
                    } else {
                        barNotes.push(notes(`B4/h`));
                        nbNotes += 1;
                    }
                    noHalf = false
                    timeLeft -= 2;
                    console.log('h')
                } else if (r === "q") {
                    if (Math.random() < 0.5) {
                        barNotes.push(notes(`B4/q/r`));
                        
                    } else {
                        barNotes.push(notes(`B4/q`));
                        nbNotes += 1;
                    }
                    timeLeft -= 1;
                    /* if two rest in a row no more half notes */
                    if (timeLeft <= 2 && nbNotes === 0) {
                        noHalf = false
                    }
                    console.log('q')
                } else if (r === "2x8") {
                    barNotes.push(beam(notes("B4/8, B4")));
                    nbNotes += 2;
                    timeLeft -= 1;
                    console.log('2x8')
                } else if (r === "8") {
                    if (Math.random() < 0.5) {
                        barNotes.push(notes("B4/8/r, B4/8"));
                        nbNotes += 1;
                    } else {
                        barNotes.push(notes("B4/8, B4/8/r"));
                        nbNotes += 1;
                    }
                    timeLeft -= 1;
                    console.log('8')
                }
            } else {
                let r = getRandomElement(scaleNotes.filter(item => item !== "h"));
                if (r === "q") {
                    if (Math.random() < 0.5 && nbNotes > 1) {
                        barNotes.push(notes(`B4/q/r`));
                    } else {
                        barNotes.push(notes(`B4/q`));
                        nbNotes += 1;
                    }
                    timeLeft -= 1;
                    console.log('q')
                } else {
                    /* if not using eighth notes */
                    if (!scaleNotes.includes("2x8") && !scaleNotes.includes("8")) {
                        barNotes.push(notes(`B4/q`));
                        nbNotes += 1;
                        console.log('q')
                    } 
                    /* using eighth notes */
                    else if (r === "2x8") {
                        barNotes.push(beam(notes("B4/8, B4")));
                        nbNotes += 2;
                        console.log('2x8')
                    } else if (r === "8") {
                        if (Math.random() < 0.5 && nbNotes >= 1) {
                            if (Math.random() < 0.5) {
                                barNotes.push(notes("B4/8/r, B4/8"))
                                nbNotes += 1;
                            } else {
                                barNotes.push(notes("B4/8, B4/8/r"))
                                nbNotes += 1;
                            }
                        } else {
                            barNotes.push(beam(notes("B4/8, B4")));
                            nbNotes += 2;
                        }
                        console.log("8")
                    }
                    timeLeft -= 1;
                }
            }
            console.log('nbNotes : ', nbNotes, 'timeleft : ', timeLeft)
        }
        console.log("done!")
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
        for (var i = 0; i < nbBars - 1; i++) {
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
                    .addClef("percussion")
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
            .setText(c[i], 1, { shift_x: 60, shift_y: -50 })
            .setEndBarType(3);
    }

    

    return vf;
}

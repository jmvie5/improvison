/* Returns a Factory ready to draw with a scale written in whole notes in a single bar */
import { Factory } from "vexflow";
import chordNotation from "../chordNotation";

export default function scaleGenerator(
    vf: Factory,
    keySignature: string,
    scaleNotes: string[],
    nbBars: number,
    timeSignature: number,
    chords: string[],
) {
    console.log(nbBars, timeSignature)
    const c = chordNotation(chords)
    
    let sysWidth = 400;
    if (scaleNotes.length > 7) {
        sysWidth += (scaleNotes.length - 7) * 30;
    }
    const score = vf.EasyScore();
    const system = vf.System({ x: 10, y: 10, width: sysWidth });
    const voice = score.voice.bind(score);
    const notes = score.notes.bind(score);
    let notesString = `${scaleNotes[0]}/w`;

    for (var i = 1; i < scaleNotes.length; i++) {
        notesString = notesString.concat(", ", scaleNotes[i]);
    }
    score.set({ time: `${scaleNotes.length}/1` });

    system
        .addStave({
            voices: [voice(notes(notesString))],
        })
        .setText(c[0], 2, { shift_x: -350, shift_y: -50 })
        .addKeySignature(keySignature)
        .addClef("treble")
        .setEndBarType(3);

    return vf;
}

import { Factory, Registry, StaveNote, StemmableNote } from "vexflow";
import beamDirection from "../vexFlowUtils/beamDirection";
import chordNotation from "../chordNotation";

export default function motifMrPc(
    vf: Factory,
    keySignature: string,
    scaleNotes: string[],
    nbBars: number,
    timeSignature: number,
    chords: string[],
) {

    const c = chordNotation(chords)
    
    const registry = new Registry();
    Registry.enableDefaultRegistry(registry);

    // Retrieve the element from the registry and cast to StaveNote, so we can call .addModifier( ) later.
    const id = (id: string) => registry.getElementById(id) as StaveNote;

    const score = vf.EasyScore();
    const voice = score.voice.bind(score);
    const notes = score.notes.bind(score);
    const beam = score.beam.bind(score);
    const concat = (a: StemmableNote[], b: StemmableNote[]): StemmableNote[] => a.concat(b);

    score.set({ time: `${timeSignature}/4` });
    let x = 20;
    let y = 0;

    function appendSystem(width: number) {
        const system = vf.System({ x, y, width, spaceBetweenStaves: 10 });
        x += width;
        return system;
    }

    /* Measure 1 */
    const system = appendSystem(270);
    system
        .addStave({
            voices: [
                voice(
                    [
                        notes(`${scaleNotes[0]}/h, ${scaleNotes[1]}/q., ${scaleNotes[2]}/8`),

                    ].reduce(concat),
                ),
            ],
        })
        .addClef("treble")
        .setKeySignature(keySignature)
        .setText(c[0], 1, { shift_x: 80, shift_y: -50 })
        .setEndBarType(3);

    /* Measure 2 new line */
    x = 20;
    y += 100;
    system
        .addStave({
            voices: [
                voice(
                    [
                        beam(
                            notes(`${scaleNotes[3]}/8, ${scaleNotes[4]}, ${scaleNotes[5]}, ${scaleNotes[6]}`, {
                                stem: beamDirection([scaleNotes[3], scaleNotes[4], scaleNotes[5], scaleNotes[6]]),
                            })
                        ),
                        notes(`b4/8/r, ${scaleNotes[7]}/q.`),

                    ].reduce(concat),
                ),
            ],
        })
        .addClef("treble")
        .setKeySignature(keySignature)
        .setText(c[1], 1, { shift_x: 80, shift_y: -50 })
        .setEndBarType(3);

    
    return vf;
}

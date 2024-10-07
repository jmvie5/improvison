import { Factory, Registry, StaveNote, StemmableNote } from "vexflow";
import chordNotation from "../chordNotation";

export default function targetNotesBlueMonk(
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
    const tuplet = score.tuplet.bind(score);
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
    let system = appendSystem(270);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[0]}/w`),
                ),
            ],
        })
        .setText(c[0], 1, { shift_x: 170, shift_y: -50 })
        .addClef("treble")
        .addTimeSignature(`${timeSignature}/4`)
        .addKeySignature(keySignature);

    /* Measure 2 */
    system = appendSystem(200);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[1]}/w`),
                ),
            ]
        })
        .setText(c[1], 1, { shift_x: 80, shift_y: -50 });

    /* Measure 3 */
    system = appendSystem(220);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[2]}/w`),
                ),
            ]
        })
        .setText(c[2], 1, { shift_x: 80, shift_y: -50 });

    /* Measure 4 */
    system = appendSystem(200);
    system
    .addStave({
        voices: [
            voice(
                notes(`${scaleNotes[3]}/w`),
            ),
        ]
    })
        .setText(c[3], 1, { shift_x: 80, shift_y: -50 });


    /* Measure 5 (New line) */
    x = 20;
    y += 100;

    system = appendSystem(270);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[4]}/w`),
                ),
            ]
        })
        .setText(c[4], 1, { shift_x: 170, shift_y: -50 })
        .addClef("treble")
        .addTimeSignature(`${timeSignature}/4`)
        .addKeySignature(keySignature);

    /* Measure 6 */
    system = appendSystem(200);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[5]}/w`),
                ),
            ]
        })
        .setText(c[5], 1, { shift_x: 100, shift_y: -50 });

    /* Measure 7 */
    system = appendSystem(220);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[6]}/w`),
                ),
            ]
        })
        .setText(c[6], 1, { shift_x: 80, shift_y: -50 });

    /* Measure 8 */
    system = appendSystem(200);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[7]}/w`),
                ),
            ]
        })
        .setText(c[7], 1, { shift_x: 80, shift_y: -50 });

    /* Measure 9 (New line) */
    x = 20;
    y += 100;

    system = appendSystem(250);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[8]}/w`),
                ),
            ]
        })
        .setText(c[8], 1, { shift_x: 160, shift_y: -50 })
        .addClef("treble")
        .addTimeSignature(`${timeSignature}/4`)
        .addKeySignature(keySignature);


    /* Measure 10 */
    system = appendSystem(220);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[9]}/w`),
                ),
            ]
        })
        .setText(c[9], 1, { shift_x: 80, shift_y: -50 });

    /* Measure 11 */
    system = appendSystem(220);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[10]}/w`),
                ),
            ]
        })
        .setText(c[10], 1, { shift_x: 70, shift_y: -50 });

    /* Measure 12 */
    system = appendSystem(200);
    system
        .addStave({
            voices: [
                voice(
                    notes(`${scaleNotes[11]}/w`),
                ),
            ]
        })
        .setText(c[11], 1, { shift_x: 80, shift_y: -50 })
        .setEndBarType(3);

    return vf;
}

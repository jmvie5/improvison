import { Factory, Registry, StaveNote, StemmableNote } from "vexflow";
import beamDirection from "../vexFlowUtils/beamDirection";
import chordNotation from "../chordNotation";

export default function mrPC(
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
    let system = appendSystem(270);
    system
        .addStave({
            voices: [
                voice(
                    [
                        beam(
                            notes(`${scaleNotes[0]}/8, ${scaleNotes[1]}, ${scaleNotes[2]}, ${scaleNotes[3]}`, {
                                stem: beamDirection([scaleNotes[0], scaleNotes[1], scaleNotes[2], scaleNotes[3]]),
                            }), 
                        ),
                        beam(
                            notes(`${scaleNotes[4]}/8, ${scaleNotes[5]}, ${scaleNotes[6]}, ${scaleNotes[7]}`, {
                                stem: beamDirection([scaleNotes[4], scaleNotes[5], scaleNotes[6], scaleNotes[7]]),
                            }),
                        ),
                    ].reduce(concat),
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
                    [
                        notes(
                            `${scaleNotes[8]}/q., ${scaleNotes[9]}/8, ${scaleNotes[10]}/8, ${scaleNotes[11]}/q, ${scaleNotes[12]}/8,`,
                        )
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[1], 1, { shift_x: 80, shift_y: -50 });

    /* Measure 3 */
    system = appendSystem(220);
    system
        .addStave({
            voices: [
                voice(
                    [
                        notes(`${scaleNotes[13]}/h, ${scaleNotes[14]}/q., ${scaleNotes[15]}/8[id="m3a"]`),

                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[2], 1, { shift_x: 80, shift_y: -50 });

    /* Measure 4 */
    system = appendSystem(200);
    system
        .addStave({
            voices: [
                voice(
                    [
                        notes(
                            `${scaleNotes[16]}/h[id="m4a"], c5/h/r`,
                        ),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[3], 1, { shift_x: 80, shift_y: -50 });

    vf.Curve({
        from: id("m3a"),
        to: id("m4a"),
        options: {
            cps: [
                { x: 0, y: 5 },
                { x: 0, y: 5 },
            ],
        },
    });

    /* Measure 5 (New line) */
    x = 20;
    y += 100;

    system = appendSystem(270);
    system
        .addStave({
            voices: [
                voice(
                    [
                        beam(
                            notes(`${scaleNotes[17]}/8, ${scaleNotes[18]}, ${scaleNotes[19]}, ${scaleNotes[20]}`, {
                                stem: beamDirection([scaleNotes[17], scaleNotes[18], scaleNotes[19], scaleNotes[20]]),
                            }),
                        ),
                        beam(
                            notes(`${scaleNotes[21]}/8, ${scaleNotes[22]}, ${scaleNotes[23]}, ${scaleNotes[24]}`, {
                                stem: beamDirection([scaleNotes[21], scaleNotes[22], scaleNotes[23], scaleNotes[24]]),
                            }),
                        ),
                    ].reduce(concat),
                ),
            ],
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
                    [
                        notes(
                            `${scaleNotes[25]}/q., ${scaleNotes[26]}/8, ${scaleNotes[27]}/8, ${scaleNotes[28]}/q, ${scaleNotes[29]}/8,`,
                        )
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[5], 1, { shift_x: 100, shift_y: -50 });


    /* Measure 7 */
    system = appendSystem(220);
    system
        .addStave({
            voices: [
                voice(
                    [
                        notes(`${scaleNotes[30]}/h, ${scaleNotes[31]}/q., ${scaleNotes[32]}/8`),

                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[6], 1, { shift_x: 80, shift_y: -50 });

    /* Measure 8 */
    system = appendSystem(200);
    system
        .addStave({
            voices: [
                voice(
                    [
                        notes(`c5/h/r`),
                        beam(
                            notes(`${scaleNotes[33]}/8, ${scaleNotes[34]}, ${scaleNotes[35]}, ${scaleNotes[36]}`, {
                                stem: beamDirection([scaleNotes[33], scaleNotes[34], scaleNotes[35], scaleNotes[36]]),
                            })
                        )
                    ].reduce(concat),
                ),
            ],
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
                    [
                        notes(`b4/8/r, ${scaleNotes[37]}/q.[id="m9a"], ${scaleNotes[38]}/q.[id="m9b"], ${scaleNotes[39]}/8`),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[8], 1, { shift_x: 160, shift_y: -50 })
        .addClef("treble")
        .addTimeSignature(`${timeSignature}/4`)
        .addKeySignature(keySignature);

    vf.Curve({
        from: id("m9a"),
        to: id("m9b"),
        options: {
            cps: [
                { x: 0, y: 5 },
                { x: 0, y: 5 },
            ],
        },
    });

    /* Measure 10 */
    system = appendSystem(220);
    system
        .addStave({
            voices: [
                voice(
                    [
                        notes(`b4/8/r, ${scaleNotes[40]}/q, ${scaleNotes[41]}/8, ${scaleNotes[42]}/q, ${scaleNotes[43]}/q`)
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[9], 1, { shift_x: 80, shift_y: -50 });

    /* Measure 11 */
    system = appendSystem(220);
    system
        .addStave({
            voices: [
                voice(
                    [
                        notes(`${scaleNotes[44]}/h, ${scaleNotes[45]}/q., ${scaleNotes[46]}/8[id="m11a"]`),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[10], 1, { shift_x: 70, shift_y: -50 });


    /* Measure 12 */
    system = appendSystem(200);
    system
        .addStave({
            voices: [
                voice(
                    [
                        notes(`${scaleNotes[47]}/h[id="m12a"], c5/h/r`),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[11], 1, { shift_x: 80, shift_y: -50 })
        .setEndBarType(3);

    vf.Curve({
        from: id("m11a"),
        to: id("m12a"),
        options: {
            cps: [
                { x: 0, y: 5 },
                { x: 0, y: 5 },
            ],
        },
    });
    
    return vf;
}

import { Factory, Registry, StaveNote } from "vexflow";
import beamDirection from "../vexFlowUtils/beamDirection";
import chordNotation from "../chordNotation";

export default function blueMonk(
    vf: Factory,
    keySignature: string,
    scaleNotes: string[],
    nbBars: number,
    timeSignature: number,
    chords: string[],
) {
    console.log(nbBars)
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
    const concat = (a: any[], b: any[]): any[] => a.concat(b);

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
                            notes(`${scaleNotes[0]}/8, ${scaleNotes[1]}, ${scaleNotes[2]}, ${scaleNotes[3]}[id="m1a"]`),
                        ),
                        notes(`${scaleNotes[4]}/h[id="m1b"]`),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[0], 1, { shift_x: 170, shift_y: -50 })
        .addClef("treble")
        .addTimeSignature(`${timeSignature}/4`)
        .addKeySignature(keySignature);

    vf.Curve({
        from: id("m1a"),
        to: id("m1b"),
        options: {
            cps: [
                { x: 0, y: 5 },
                { x: 0, y: 5 },
            ],
        },
    });

    /* Measure 2 */
    system = appendSystem(200);
    system
        .addStave({
            voices: [
                voice(
                    [
                        beam(
                            notes(
                                `${scaleNotes[5]}/8, ${scaleNotes[6]}, ${scaleNotes[7]}, ${scaleNotes[8]}[id="m2a"]`,
                                { stem: beamDirection([scaleNotes[5], scaleNotes[6], scaleNotes[7], scaleNotes[8]]) },
                            ),
                        ),
                        notes(`${scaleNotes[9]}/h[id="m2b"]`),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[1], 1, { shift_x: 80, shift_y: -50 });

    vf.Curve({
        from: id("m2a"),
        to: id("m2b"),
        options: {
            cps: [
                { x: 0, y: 5 },
                { x: 0, y: 5 },
            ],
        },
    });

    /* Measure 3 */
    system = appendSystem(220);
    system
        .addStave({
            voices: [
                voice(
                    [
                        beam(
                            notes(`${scaleNotes[10]}/8, ${scaleNotes[11]}, ${scaleNotes[12]}, ${scaleNotes[13]}`, {
                                stem: beamDirection([scaleNotes[10], scaleNotes[11], scaleNotes[12], scaleNotes[13]]),
                            }),
                        ),
                        beam(
                            notes(
                                `${scaleNotes[14]}/8, ${scaleNotes[15]}, ${scaleNotes[16]}, ${scaleNotes[17]}[id="m3a"]`,
                                {
                                    stem: beamDirection([
                                        scaleNotes[14],
                                        scaleNotes[15],
                                        scaleNotes[16],
                                        scaleNotes[17],
                                    ]),
                                },
                            ),
                        ),
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
                            `${scaleNotes[18]}/8[id="m4a"], ${scaleNotes[19]}/q, ${scaleNotes[20]}/8[id="m4b"], ${scaleNotes[21]}/h[id="m4c"],`,
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
    vf.Curve({
        from: id("m4b"),
        to: id("m4c"),
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
                            notes(
                                `${scaleNotes[22]}/8, ${scaleNotes[23]}, ${scaleNotes[24]}, ${scaleNotes[25]}[id="m5a"]`,
                                {
                                    stem: beamDirection([
                                        scaleNotes[22],
                                        scaleNotes[23],
                                        scaleNotes[24],
                                        scaleNotes[25],
                                    ]),
                                },
                            ),
                        ),
                        notes(`${scaleNotes[26]}/h[id="m5b"]`),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[4], 1, { shift_x: 170, shift_y: -50 })
        .addClef("treble")
        .addTimeSignature(`${timeSignature}/4`)
        .addKeySignature(keySignature);

    vf.Curve({
        from: id("m5a"),
        to: id("m5b"),
        options: {
            cps: [
                { x: 0, y: 5 },
                { x: 0, y: 5 },
            ],
        },
    });

    /* Measure 6 */
    system = appendSystem(200);
    system
        .addStave({
            voices: [
                voice(
                    [
                        beam(
                            notes(
                                `${scaleNotes[27]}/8, ${scaleNotes[28]}, ${scaleNotes[29]}, ${scaleNotes[30]}[id="m6a"]`,
                                {
                                    stem: beamDirection([
                                        scaleNotes[27],
                                        scaleNotes[28],
                                        scaleNotes[29],
                                        scaleNotes[30],
                                    ]),
                                },
                            ),
                        ),
                        notes(`${scaleNotes[31]}/h[id="m6b"]`),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[5], 1, { shift_x: 100, shift_y: -50 });

    vf.Curve({
        from: id("m6a"),
        to: id("m6b"),
        options: {
            cps: [
                { x: 0, y: 5 },
                { x: 0, y: 5 },
            ],
        },
    });

    /* Measure 7 */
    system = appendSystem(220);
    system
        .addStave({
            voices: [
                voice(
                    [
                        beam(
                            notes(`${scaleNotes[32]}/8, ${scaleNotes[33]}, ${scaleNotes[34]}, ${scaleNotes[35]}`, {
                                stem: beamDirection([scaleNotes[32], scaleNotes[33], scaleNotes[34], scaleNotes[35]]),
                            }),
                        ),
                        beam(
                            notes(
                                `${scaleNotes[36]}/8, ${scaleNotes[37]}, ${scaleNotes[38]}, ${scaleNotes[39]}[id="m7a"]`,
                                {
                                    stem: beamDirection([
                                        scaleNotes[36],
                                        scaleNotes[37],
                                        scaleNotes[38],
                                        scaleNotes[39],
                                    ]),
                                },
                            ),
                        ),
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
                        notes(`${scaleNotes[40]}/q[id="m8a"], b4/h/r`),
                        tuplet(beam(notes(`${scaleNotes[41]}/8, ${scaleNotes[42]}/8, ${scaleNotes[43]}/8`))),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[7], 1, { shift_x: 80, shift_y: -50 });

    vf.Curve({
        from: id("m7a"),
        to: id("m8a"),
        options: {
            cps: [
                { x: 0, y: 5 },
                { x: 0, y: 5 },
            ],
        },
    });

    /* Measure 9 (New line) */
    x = 20;
    y += 100;

    system = appendSystem(250);
    system
        .addStave({
            voices: [
                voice(
                    [
                        notes(`${scaleNotes[44]}/8, ${scaleNotes[45]}/q.[id="m9a"], ${scaleNotes[46]}/h[id="m9b"]`),
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
                        beam(
                            notes(`${scaleNotes[47]}/8, ${scaleNotes[48]}, ${scaleNotes[49]}, ${scaleNotes[50]}`, {
                                stem: beamDirection([scaleNotes[47], scaleNotes[48], scaleNotes[49], scaleNotes[50]]),
                            }),
                        ),
                        beam(
                            notes(
                                `${scaleNotes[51]}/8, ${scaleNotes[52]}, ${scaleNotes[53]}, ${scaleNotes[54]}[id="m10a"]`,
                                {
                                    stem: beamDirection([
                                        scaleNotes[51],
                                        scaleNotes[52],
                                        scaleNotes[53],
                                        scaleNotes[54],
                                    ]),
                                },
                            ),
                        ),
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
                        notes(`${scaleNotes[55]}/q[id="m11a"]`),
                        beam(
                            notes(`${scaleNotes[56]}/8, ${scaleNotes[57]}`, {
                                stem: beamDirection([scaleNotes[56], scaleNotes[57]]),
                            }),
                        ),
                        beam(
                            notes(`${scaleNotes[58]}/8, ${scaleNotes[59]}, ${scaleNotes[60]}, ${scaleNotes[61]}`, {
                                stem: beamDirection([scaleNotes[58], scaleNotes[59], scaleNotes[60], scaleNotes[61]]),
                            }),
                        ),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[10], 1, { shift_x: 70, shift_y: -50 });

    vf.Curve({
        from: id("m10a"),
        to: id("m11a"),
        options: {
            cps: [
                { x: 0, y: 5 },
                { x: 0, y: 5 },
            ],
        },
    });

    /* Measure 12 */
    system = appendSystem(200);
    system
        .addStave({
            voices: [
                voice(
                    [
                        notes(`${scaleNotes[62]}/8, ${scaleNotes[63]}/q.[id="m12a"], ${scaleNotes[64]}/h[id="m12b"]`),
                    ].reduce(concat),
                ),
            ],
        })
        .setText(c[11], 1, { shift_x: 80, shift_y: -50 })
        .setEndBarType(3);

    vf.Curve({
        from: id("m12a"),
        to: id("m12b"),
        options: {
            cps: [
                { x: 0, y: 5 },
                { x: 0, y: 5 },
            ],
        },
    });

    /* for (var i = 0; i < nbBars - 1; i++) {
        
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

    system = appendSystem(180);
    system
        .addStave({
            voices: [voice(getNotes())],
        })
        .setText(c[i], 1, { shift_x: 60, shift_y: -50 })
        .setEndBarType(3);
 */
    return vf;
}

const dictBbKey: { [index: string]: any } = {
    C: "D",
    "C#": "D#",
    Db: "Eb",
    D: "E",
    "D#": "F",
    Eb: "F",
    E: "F#",
    "E#": "G",
    F: "G",
    "F#": "G#",
    Gb: "Ab",
    G: "A",
    "G#": "A#",
    Ab: "Bb",
    A: "B",
    "A#": "C",
    Bb: "C",
    B: "C#",
    "B#": "D",
};
const dictBbNotes: { [index: string]: any } = {
    C: "D",
    Cn: "Dn",
    "C#": "D#",
    Db: "Eb",
    D: "E",
    Dn: "En",
    "D#": "E#",
    Eb: "Fn",
    E: "F",
    En: "F#",
    "E#": "G#",
    F: "G",
    Fn: "Gn",
    "F#": "G#",
    Gb: "Ab",
    G: "A",
    Gn: "An",
    "G#": "A#",
    Ab: "Bb",
    A: "B",
    An: "Bn",
    "A#": "B#",
    Bb: "Cn",
    B: "C",
    Bn: "C#",
    "B#": "D#",
};
const dictEbKey: { [index: string]: any } = {
    C: "A",
    "C#": "A#",
    Db: "Bb",
    D: "B",
    "D#": "C",
    Eb: "C",
    E: "C#",
    "E#": "D",
    F: "D",
    "F#": "D#",
    Gb: "Eb",
    G: "E",
    "G#": "F",
    Ab: "F",
    A: "F#",
    "A#": "G",
    Bb: "G",
    B: "G#",
    "B#": "A",
};
const dictEbNotes: { [index: string]: any } = {
    C: "A",
    Cn: "An",
    "C#": "A#",
    Db: "Bb",
    D: "B",
    Dn: "Bn",
    "D#": "Cn",
    Eb: "Cn",
    E: "C",
    En: "C#",
    "E#": "D#",
    F: "D",
    Fn: "Dn",
    "F#": "D#",
    Gb: "Eb",
    G: "E",
    Gn: "En",
    "G#": "Fn",
    Ab: "Fn",
    A: "F",
    An: "F#",
    "A#": "G",
    Bb: "G",
    B: "G",
    Bn: "G#",
    "B#": "A",
};

export interface transposeProps {
    keySignature: string;
    scaleNotes: string[];
    chords: string[];
};

function transpose(newKey: string, vfProps: transposeProps) {
    if (newKey === "C") {
        return vfProps;
    } else if (newKey === "Bb") {
        let transposedScaleNotes = [];
        let transposedKeySignature = dictBbKey[vfProps.keySignature];
        for (const note of vfProps.scaleNotes) {
            let oldNote = note.substring(0, note.length - 1);
            let oldNoteNumber = note.substring(note.length - 1, note.length);
            const plusOctaveNotes = ["B", "Bn", "Bb", "B#"];
            let newNote: string;
            if (plusOctaveNotes.includes(oldNote)) {
                newNote = dictBbNotes[oldNote].concat(String(Number(oldNoteNumber) + 1));
            } else {
                newNote = dictBbNotes[oldNote].concat(String(Number(oldNoteNumber)));
            }
            transposedScaleNotes.push(newNote);
        }
        let transposedChords = [];
        const chordAlt = ["b", "#"];
        for (const chord of vfProps.chords) {
            let newChord: string;
            if (chordAlt.includes(chord[1])) {
                newChord = dictBbKey[chord.substring(0, 2)].concat(chord.substring(2, chord.length));
            } else if (chord !== "") {
                newChord = dictBbKey[chord[0]].concat(chord.substring(1, chord.length));
            } else {
                newChord = "";
            }
            transposedChords.push(newChord);
        }
        const newVfProps: transposeProps = {
            keySignature: transposedKeySignature,
            scaleNotes: transposedScaleNotes,
            chords: transposedChords,
        };
        return newVfProps;
    } else if (newKey === "Eb") {
        let transposedScaleNotes = [];
        let transposedKeySignature = dictEbKey[vfProps.keySignature];
        for (const note of vfProps.scaleNotes) {
            let oldNote = note.substring(0, note.length - 1);
            let oldNoteNumber = note.substring(note.length - 1, note.length);
            const minusOctaveNotes = ["C", "Cn", "Cb", "C#", "D", "Dn", "Db"];

            let newNote: string;
            if (minusOctaveNotes.includes(oldNote)) {
                newNote = dictEbNotes[oldNote].concat(String(Number(oldNoteNumber)));
            } else {
                newNote = dictEbNotes[oldNote].concat(String(Number(oldNoteNumber) + 1));
            }
            transposedScaleNotes.push(newNote);
        }
        let transposedChords = [];
        const chordAlt = ["b", "#"];
        for (const chord of vfProps.chords) {
            let newChord: string;
            if (chordAlt.includes(chord[1])) {
                newChord = dictEbKey[chord.substring(0, 2)].concat(chord.substring(2, chord.length));
            } else if (chord !== "") {
                newChord = dictEbKey[chord[0]].concat(chord.substring(1, chord.length));
            } else {
                newChord = "";
            }
            transposedChords.push(newChord);
        }
        const newVfProps: transposeProps = {
            keySignature: transposedKeySignature,
            scaleNotes: transposedScaleNotes,
            chords: transposedChords,
        };
        return newVfProps;
    }
}

export default transpose;

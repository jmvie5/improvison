export default function notesFromKey(key:string) {

    // Get diactonic notes that will fit with VexFlow
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    const allNotesWithNumber:string[] = []
    for (let i = 0; i < 9; i++) {
        notes.forEach((note) => {
            allNotesWithNumber.push(`${note}${i}`)
        })
    }
    // -- Get real notes from key, with accidentals -- //
    // const allNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
    // const majorScaleIndex = [0, 2, 4, 5, 7, 9, 11] // major scale intervals
    // const rootIndex = allNotes.indexOf(key)

    // if (rootIndex === -1) throw new Error('Key not found.')

    // const notes:string[] = []

    // for (let i = 0; i < majorScaleIndex.length; i++) {
    //     notes.push(allNotes[(majorScaleIndex[i] + rootIndex)%12])
    // }

    // const allNotesWithNumber:string[] = []

    // for (let i = 0; i < 9; i++) {
    //     notes.forEach((note) => {
    //         allNotesWithNumber.push(`${note}${i}`)
    //     })
    // }

    return {
        notes,
        allNotesWithNumber
    }
}
export default function chordNotation(chords: string[]) {
    var newChords:string[] = chords.map(function(c){ return c.replace(/b/g,"♭");});
    newChords.map(function(c){ return c.replace(/#/g,"♯");});
    
    return newChords
}
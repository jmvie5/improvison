import randomMelodyGenerator from "../../../utils/vexFlowGenerators/randomMelodyGenerator";

const Guide = {
    id: "0.1",
    name: "Guide d'utilisation",
    locked: false,
    completed: false,
    intro: {
        name: "intro",
        title: "0.1.1 : Guide d'utilisation",
        description: (
            <div className="grid grid-cols-1 gap-2">
                <p>
                    Dans tous les niveaux du jeu, vous serez invité à improviser à partir d'une gamme, un rythme ou
                    d'une mélodie.
                </p>
                <p>
                    Pour passer au niveau suivant, vous devrez juger par vous même si vous avez bien répondu aux
                    critères de réussite de l'exercice. Lorsque requis, utilisez le micro en bas de la partition pour
                    vous enregistrer et vous écouter attentivement afin de bien vous évaluer. Vous devrez soumettre
                    l'enregistrement le plus récent, qui sera accessible sur votre profil avec la partition présenté
                    dans l'exercice. (Fonctionnalité à venir)
                </p>
            </div>
        ),

        vfProps: {
            template: randomMelodyGenerator,
            keySignature: "Bb",
            scaleNotes: ["B3", "C4", "D4", "F4", "G4", "B4"],
            nbBars: 12,
            timeSignature: 4,
            chords: ["Bb", "", "C-7", "F7", "Bb6", "", "Eb", "", "C-7", "F7", "Bb", ""], //vrai bémols et dièses
        },
        vf_w: 920,
        vf_h: 350,
        reRender: true,
    },
    freeImprov: {
        name: "freeImprov",
        title: "0.1.2 : Guide d'utilisation : Improvisation libre",
        description: (
            <div className="grid grid-cols-1 gap-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
        ),
        vfProps: {
            template: randomMelodyGenerator,
            keySignature: "Bb",
            scaleNotes: ["B3", "C4", "D4", "F4", "G4", "B4"],
            nbBars: 12,
            timeSignature: 4,
            chords: ["Bb", "", "C-7", "F7", "Bb6", "", "Eb", "", "C-7", "F7", "Bb", ""], //vrai bémols et dièses
        },
        vf_w: 920,
        vf_h: 350,
        reRender: true,
    },
    repertoireImprov: {
        name: "repertoireImprov",
        title: "0.1.3 : Guide d'utilisation : Improvisation sur du répertoire",
        description: (
            <div className="grid grid-cols-1 gap-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
        ),
        vfProps: {
            template: randomMelodyGenerator,
            keySignature: "Bb",
            scaleNotes: ["B3", "C4", "D4", "F4", "G4", "B4"],
            nbBars: 12,
            timeSignature: 4,
            chords: ["Bb", "", "C-7", "F7", "Bb6", "", "Eb", "", "C-7", "F7", "Bb", ""], //vrai bémols et dièses
        },
        vf_w: 920,
        vf_h: 350,
        reRender: true,
    },
};

export default Guide;

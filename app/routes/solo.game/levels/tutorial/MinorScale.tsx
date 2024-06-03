import scaleGenerator from "../../../../utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "../../../../utils/vexFlowGenerators/randomMelodyGenerator";
import mrPC from "../../../../utils/songs/mrPc";

const MinorScale = {
    url: '1-5',
    id: "1.5",
    name: "Gamme mineure",
    locked: false,
    completed: false,
    intro: {
        name: "intro",
        title: "1.5.1 : La gamme mineure",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <p>Il existe trois gammes mineures, ancienne, harmonique et mélodique. Pour débuter, regardons la gamme mineure ancienne. Cette gamme est la relative de la gamme majeure. Pour trouver la relative mineure d’une gamme majeure, il suffit de descendre d’une tierce mineure. Prenons pour exemple la mineur, la relative de do majeur :  </p>
                <div className="my-4 font-medium">
                    <p>
                        Pour vous familiariser avec la gamme, commencez par la jouer avec un tempo stable de façon : 
                    </p>
                    <ol className=" list-inside list-disc">
                        <li>ascendante</li>
                        <li>descendante</li>
                        <li>aléatoire</li>
                    </ol>
                </div>
                <p>
                    Finalement, utilisez le métronome pour jouer la gamme en noires, puis en croches à des tempos différents.
                </p>
                <p className=" italic">N'essayez pas d'aller trop vite! Le but est d'être stable et en même temps que le métronome avant d'être rapide. </p>

            </div>
        ),

        vfProps: {
            template: scaleGenerator,
            keySignature: "C",
            scaleNotes: ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"],
            nbBars: 1,
            timeSignature: 1,
            chords: ["A-"],
        },
        vf_w: 500,
        vf_h: 140,
        reRender: false,
    },
    freeImprov: {
        name: "freeImprov",
        title: "1.5.2 : Gamme mineure : Improvisation libre",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <div className="my-4">
                    <p>Maintenant, créez des mélodies en utilisant la gamme mineure ancienne. Utilisez les trucs suivants pour diversifier votre improvisation libre : </p>
                    <ol className=" list-inside list-disc">
                        <li>Intervalles conjoints seulement</li>
                        <li>Intervalles disjoints seulement</li>
                        <li>Jouer des blanches seulement</li>
                        <li>Jouer des noires seulement</li>
                        <li>Mélanger les rythmes</li>
                        <li>Utiliser des motifs rythmiques ou mélodiques</li>
                    </ol>
                </div>
                <p>
                    Il est recommandé d'utiliser le métronome afin de travailler la stabilité rythmique de votre
                    improvisation, mais n'hésitez pas à l'enlever pour explorer l'improvisation à votre instrument.
                </p>

                <p className="font-bold pt-4">
                    En panne d'inspiration?
                </p>
                <p>
                    Une mélodie générée aléatoirement vous est présentée à titre d’exemple, vous pouvez vous en inspirer pour créer votre propre improvisation. Vous pouvez générer de nouvelles mélodies en cliquant sur le bouton en bas de la partition. 
                </p>
            </div>
        ),
        vfProps: {
            template: randomMelodyGenerator,
            keySignature: "C",
            scaleNotes: ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"],
            nbBars: 4,
            timeSignature: 4,
            chords: ["A-", "", "", ""],
        },
        vf_w: 830,
        vf_h: 140,
        reRender: true,
    },
    repertoireImprov: {
        name: "repertoireImprov",
        title: "1.5.3 : Gamme mineure : Improvisation sur Mr. P.C.",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <h2>Intégrons maintenant cette nouvelle connaissance dans le répertoire.</h2>
                <p>
                    Pour réussir cet exercice, improvisez avec la gamme de do mineur sur la pièce Mr. P.C. de John Coltrane. Vous pouvez alterner entre mineur ancien et gamme pentatonique mineur pour apporter de la variété dans votre solo. Utilisez la piste d’accompagnement ci-dessous : 
                </p>
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/2uo_Xmi-mdU?si=d0P4axFKTSlbAJTH" title="Piste d'accompagnement Mr.P.C."  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                <div className="my-4 font-medium">
                    <p>
                        Pour réussir cet exercice, vous devez jouer un solo improvisé sur la piste d'accompagnement en
                        utilisant la gamme mineure.
                    </p>
                </div>
                <p>
                    N'oubliez pas de vous enregistrer à l'aide du micro en bas de la partition pour mieux vous évaluer!
                </p>
            </div>
        ),
        vfProps: {
            template: mrPC,
            keySignature: "Eb",
            scaleNotes: [
                "C4",
                "C4",
                "D4",
                "D4",
                "E4",
                "E4",
                "F4",
                "F4",
                "G4",
                "F4",
                "E4",
                "C4",
                "B3",
                "C4",
                "B3",
                "C4",
                "C4",
                "F4",
                "F4",
                "G4",
                "G4",
                "A4",
                "A4",
                "B4",
                "B4",
                "C5",
                "B4",
                "A4",
                "F4",
                "E4",
                "C4",
                "B3",
                "C4",
                "E4",
                "C4",
                "E4",
                "Gb4",
                "F4",
                "F4",
                "Gb4",
                "F4",
                "E4",
                "F4",
                "E4",
                "C4",
                "B3",
                "C4",
                "C4"
            ],
            nbBars: 12,
            timeSignature: 4,
            chords: ["C-7", "", "", "", "F-7", "", "C-7", "", "Ab7", "G7", "C-7", ""],
        },
        vf_w: 920,
        vf_h: 350,
        reRender: false,
    },
};

export default MinorScale;

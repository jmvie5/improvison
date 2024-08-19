import scaleGenerator from "../../../../utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "../../../../utils/vexFlowGenerators/randomMelodyGenerator";
import blueMonk from "../../../../utils/songs/blueMonk";

const PentaMaj = {
    url: '1-1',
    id: "1.1",
    name: "Gamme pentatonique majeure",
    locked: false,
    completed: false,
    intro: {
        name: "intro",
        title: "1.1.1 : Gamme pentatonique majeure",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <p>
                    La gamme pentatonique majeure est simplement une gamme majeure sans les 4e et 7e degrés. 
                    Enlever ces deux notes, qui entrent souvent en conflit avec l'accord du 1er degré, nous donne une gamme très versatile pour improviser sans crainte de jouer une note qui « sonne mal ». 
                </p>
                <div className="my-4 font-medium">
                    <p>
                        Pour vous familiariser avec la gamme, commencez par la jouer sans métronome, avec un tempo stable, de façon : 
                    </p>
                    <ol className=" list-inside list-disc">
                        <li>ascendante </li>
                        <li>descendante</li>
                        <li>libre (mouvements conjoints)</li>
                        <li>libre (avec des sauts)</li>
                    </ol>
                </div>
                <p>
                    Finalement, utilisez le métronome pour jouer la gamme en noires, puis en croches à des tempos différents (de X à Y).
                </p>
                <p className=" italic">N'essayez pas d'aller trop vite! Le but est d'être stable et en même temps que le métronome avant d'être rapide. </p>
                <p className="mt-8">
                    Voici un exemple d'utilisation de la gamme pentatonique majeure dans un contexte jazz (1:03 à 1:15):
                </p>
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/s4rXEKtC8iY?si=CsuYXuVHNXncl_B6&amp;controls=2&amp;start=63&end=75" title="Mercy, Mercy, Mercy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
        ),

        vfProps: {
            template: scaleGenerator,
            keySignature: "Bb",
            scaleNotes: ["B3", "C4", "D4", "F4", "G4", "B4"],
            nbBars: 1,
            timeSignature: 1,
            chords: ["Bb"],
        },
        vf_w: 500,
        vf_h: 140,
        reRender: false,
    },
    freeImprov: {
        name: "freeImprov",
        title: "1.1.2 : Gamme pentatonique majeure : Improvisation libre",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <p>
                    Maintenant, créez des mélodies en utilisant la gamme pentatonique majeure.
                </p>
                <div className="my-4">
                    <p>Laissez-vous aller! Utilisez les trucs suivants pour diversifier votre improvisation libre: </p>
                    <ol className=" list-inside list-disc">
                        <li>Intervalles conjoints seulement</li>
                        <li>Intervalles disjoints</li>
                        <li>Jouer des blanches seulement</li>
                        <li>Jouer des noires seulement</li>
                        <li>Mélanger les rythmes</li>
                        <li>Utiliser des motifs rythmiques ou mélodiques</li>
                    </ol>
                </div>
                <p>
                    Il est recommandé d'utiliser le métronome afin de travailler la stabilité rythmique de votre improvisation, mais n'hésitez pas à l'enlever pour explorer l'improvisation à votre instrument. 
                </p>
                <h3 className=" font-bold">En panne d'inspiration?</h3>
                <p>
                    Une mélodie générée aléatoirement vous est présentée à titre d'exemple, vous pouvez vous en inspirer
                    pour créer votre propre improvisation. Vous pouvez générer de nouvelles mélodies en cliquant sur le
                    bouton en bas de la partition.
                </p>
                <p>
                    Utilisez le micro en bas de la partition pour vous enregistrer à des fins d'autoévaluation. Pour passer à la page suivante, il est requis de soumettre un enregistrement qui sera disponible dans votre profil. 
                </p>
            </div>
        ),
        vfProps: {
            template: randomMelodyGenerator,
            keySignature: "Bb",
            scaleNotes: ["B3", "C4", "D4", "F4", "G4", "B4"],
            nbBars: 2,
            timeSignature: 4,
            chords: ["Bb", ""],
        },
        vf_w: 500,
        vf_h: 140,
        reRender: true,
    },
    repertoireImprov: {
        name: "repertoireImprov",
        title: "1.1.3 : Gamme pentatonique majeure : Improvisation sur Blue Monk",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <h2>Intégrons maintenant cette nouvelle connaissance dans le répertoire.</h2>
                <p>
                    La gamme pentatonique majeure ne va pas toujours être parfaite dans les pièces sur lesquelles vous allez improviser, mais sur un blues majeur, elle va convenir parfaitement. 
                </p>
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/MgEZxg0HOJU?si=3t8IP56ZE3wNzrwr" title="Piste d'accompagnement Blue Monk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                <div className="my-4 font-medium">
                    <p>
                        Pour réussir cet exercice, vous devez jouer un solo improvisé sur la piste d'accompagnement en
                        utilisant la gamme pentatonique majeure.
                    </p>
                </div>
                <p>
                    N'oubliez pas de vous enregistrer à l'aide du micro en bas de la partition pour mieux vous évaluer!
                </p>
            </div>
        ),
        vfProps: {
            template: blueMonk,
            keySignature: "Bb",
            scaleNotes: [
                "D4",
                "E4",
                "En4",
                "F4",
                "F4",
                "G4",
                "G#4",
                "A4",
                "B4",
                "B4",
                "F4",
                "G4",
                "F4",
                "En4",
                "Eb4",
                "F3",
                "C#4",
                "D4",
                "D4",
                "Db4",
                "C4",
                "C4",
                "G4",
                "G#4",
                "A4",
                "B4",
                "B4",
                "B4",
                "Bn4",
                "C5",
                "Db5",
                "D5",
                "F4",
                "G4",
                "F4",
                "En4",
                "Eb4",
                "F3",
                "C#4",
                "D4",
                "D4",
                "F4",
                "F4",
                "F4",
                "F4",
                "F3",
                "F3",
                "F4",
                "G4",
                "F4",
                "En4",
                "Eb4",
                "F3",
                "C#4",
                "D4",
                "D4",
                "F4",
                "G4",
                "F4",
                "En4",
                "Eb4",
                "F3",
                "C#4",
                "D4",
                "D4",
            ],
            nbBars: 12,
            timeSignature: 4,
            chords: ["Bb7", "Eb7", "Bb7", "", "Eb7", "Edim7", "Bb7", "", "F7", "", "Bb", ""],
        },
        vf_w: 900,
        vf_h: 350,
        reRender: false,
    },
};

export default PentaMaj;

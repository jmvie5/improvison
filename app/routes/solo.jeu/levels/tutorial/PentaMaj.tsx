import scaleGenerator from "../../../../utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "../../../../utils/vexFlowGenerators/randomMelodyGenerator";
import blueMonk from "../../../../utils/songs/blueMonk";

const PentaMaj = {
    id: "1.1",
    name: "Gamme pentatonique majeure",
    locked: false,
    completed: false,
    intro: {
        name: "intro",
        title: "1.1.1 : Gamme pentatonique majeure",
        description: (
            <div className="grid grid-cols-1 gap-2">
                <h2>
                    Dans cet exercice, nous allons commencer à improviser en utilisant les notes de la gamme
                    pentatonique majeure.
                </h2>
                <p>
                    La gamme pentatonique majeure est simplement une gamme majeure avec le 4e et le 7e degré en moins.
                    En enlevant ces deux notes, qui entrent souvent en conflit avec l'accord du 1er degré, cela nous
                    donne une gamme très utile pour improviser sans crainte de jouer une note qui « sonne mal ».
                </p>
                <div className="my-4 font-medium">
                    <p>
                        Pour commencer à intégrer cette gamme dans votre vocabulaire, commencer par la jouer avec un
                        tempo stable de façon...
                    </p>
                    <ol className=" list-inside list-disc">
                        <li>ascendante</li>
                        <li>descendante</li>
                        <li>aléatoire</li>
                    </ol>
                </div>
                <p>
                    Commencez par jouer sans métronome pour vous familiariser avec les notes, puis utilisez le métronome
                    pour jouer la gamme en noire, puis en croche à des tempos différents. N'essayez pas d'aller trop
                    vite! Le but est d'être stable et en même temps que le métronome avant d'être rapide.
                </p>
                <p className="mt-8">
                    Voici un exemple d'utilisation de la gamme pentatonique majeure dans un contexte jazz :
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/s4rXEKtC8iY?si=CsuYXuVHNXncl_B6&amp;controls=2&amp;start=63&end=75" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
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
        description: (
            <div className="grid grid-cols-1 gap-2">
                <p>
                    Maintenant, essayer de créer des mélodies en utilisant la gamme pentatonique majeure apprise à la
                    page précédente.
                </p>
                <p>
                    Une mélodie générée aléatoirement vous est présentée à titre d'exemple, vous pouvez vous en inspirer
                    pour créer votre propre improvisation. Vous pouvez générer de nouvelles mélodies en cliquant sur le
                    bouton approprié en bas de la partition.
                </p>
                <div className="my-4">
                    <p>Lassez-vous aller! Utilisez les trucs suivants pour diversifier votre improvisation libre:</p>
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

                <p>
                    Utilisez le micro en bas de la partition pour vous enregistrer à des fins d'autoévaluation. Pour
                    passer à la page suivante, il est requis de soumettre un enregistrement qui sera disponible par la
                    suite dans votre profil.
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
        description: (
            <div className="grid grid-cols-1 gap-2">
                <h2>Intégrons maintenant cette nouvelle connaissance dans le répertoire.</h2>
                <p>
                    La gamme pentatonique majeure ne va pas toujours être parfaite dans toutes les pièces sur lesquelles
                    vous allez improviser, mais sur un blues majeur, elle va très bien convenir.
                </p>
                <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/MgEZxg0HOJU?si=3t8IP56ZE3wNzrwr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
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

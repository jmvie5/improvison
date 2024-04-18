import scaleGenerator from "../../../../utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "../../../../utils/vexFlowGenerators/randomMelodyGenerator";
import mrPC from "../../../../utils/songs/mrPc";

const PentaMin = {
    id: "1.2",
    name: "Gamme pentatonique mineure",
    locked: false,
    completed: false,
    intro: {
        name: "intro",
        title: "1.2.1 : Gamme pentatonique mineure",
        description: (
            <div className="grid grid-cols-1 gap-2">
                <h2>
                    Nous allons répéter l'exercice précedent, mais avec la gamme pentatonique mineure. Nous utilisons cette fois la gamme de Do (C) mineur pour concorder avec la pièce utilisé dans la dernière partie du niveau.
                </h2>
                <p>
                    La gamme pentatonique mineure est simplement une gamme mineure avec le 2e et le 6e degré en moins.
                    Elle est dérivée de sa relative majeure.
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
                    Voici quelques exemples d'utilisation de la gamme pentatonique mineure dans des solos improvisés :
                </p>
                <div>YOUTUBE</div>
            </div>
        ),

        vfProps: {
            template: scaleGenerator,
            keySignature: "Eb",
            scaleNotes: ["C4", "E4", "F4", "G4", "B4", "C5"],
            nbBars: 1,
            timeSignature: 1,
            chords: ["C-"],
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
                    Maintenant, essayer de créer des mélodies en utilisant la gamme pentatonique mineure apprise à la
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
            keySignature: "Eb",
            scaleNotes: ["C4", "E4", "F4", "G4", "B4", "C5"],
            nbBars: 2,
            timeSignature: 4,
            chords: ["C-", ""],
        },
        vf_w: 500,
        vf_h: 140,
        reRender: true,
    },
    repertoireImprov: {
        name: "repertoireImprov",
        title: "1.1.3 : Gamme pentatonique majeure : Improvisation sur Mr. P.C.",
        description: (
            <div className="grid grid-cols-1 gap-2">
                <h2>Intégrons maintenant cette nouvelle connaissance dans le répertoire.</h2>
                <p>
                    La gamme pentatonique mineure ne va pas toujours être parfaite dans toutes les pièces sur lesquelles
                    vous allez improviser, mais sur un blues mineur, elle va très bien convenir.
                </p>
                <p>[PISTE D'ACCOMPAGNEMENT]</p>
                <div className="my-4 font-medium">
                    <p>
                        Pour réussir cet exercice, vous devez jouer un solo improvisé sur la piste d'accompagnement en
                        utilisant la gamme pentatonique mineure.
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

export default PentaMin;

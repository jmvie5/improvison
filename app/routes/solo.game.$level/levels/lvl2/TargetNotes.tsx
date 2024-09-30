import scaleGenerator from "~/utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "~/utils/vexFlowGenerators/randomMelodyGenerator";
import blueMonk from "~/utils/songs/blueMonk";
import SheetMusic from "~/components/SheetMusic";
import targetNotesGenerator from "~/utils/vexFlowGenerators/targetNotesGenerator";

const TargetNotes = {
    url: '2-1',
    id: "2.1",
    name: "Notes cibles",
    locked: false,
    completed: false,
    intro: {
        name: "intro",
        title: "2.1.1 : Notes cibles de l'arpège",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <p>
                    Maintenant que les gammes plus importantes sont acquises dans votre langage d’improvisation, il faut s’intéresser au concept de note cible. Ce concept sert à ajouter de la cohérence dans l’improvisation en terminant les lignes sur une note prédéterminée. 
                </p>
                <p className="italic p-4">
                    Il est important de se rappeler que n'importe quelle note peut être une note cible. Chaque note apporte une couleur unique selon l’accord joué en accompagnement, c’est à vous de choisir quelle couleur vous voulez utiliser.
                </p>
                <p>
                    Pour cet exercice, nous utiliserons les arpèges des accords de l’accompagnement pour trouver nos notes cibles. C’est une bonne façon de tomber sur une note qui sonne en harmonie avec l’accompagnement. Commençons avec l'arpège de Si bémol majeur concert, qui sera notre accord de tonique plus tard.
                </p>
                <p>
                    Commencez par jouer une seule note de l'arpège de Bb sur le premier temps de chaque mesure, puis rajoutez une ou deux notes conjointe dans la mesure précédent votre note cible. Par exemple :
                </p>
                <SheetMusic
                    transposition={transposition}
                    vfProps={{
                        template: targetNotesGenerator,
                        keySignature: "Bb",
                        scaleNotes: ["B3", "D4", "F4"],
                        nbBars: 4,
                        timeSignature: 4,
                        chords: ["Bb6", '', '', ''],
                    }}
                    vf_h={150}
                    vf_w={850}
                />
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/JpC5hXefoV4" title="Bb backing track"/>
                

            </div>
        ),

        vfProps: {
            template: scaleGenerator,
            keySignature: "Bb",
            scaleNotes: ["B3", "D4", "F4", "B4",],
            nbBars: 1,
            timeSignature: 4,
            chords: ["Bb6"],
        },
        vf_w: 500,
        vf_h: 140,
        reRender: false,
    },
    freeImprov: {
        name: "freeImprov",
        title: "1.4.2 : La gamme majeure : Improvisation libre",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <p>
                    Maintenant, créez des mélodies en utilisant la gamme majeure. Utilisez les trucs suivants pour diversifier votre improvisation libre : 
                </p>
                <ol className=" list-inside list-disc">
                    <li>Intervalles conjoints </li>
                    <li>Intervalles disjoints </li>
                    <li>Blanches </li>
                    <li>Noires </li>
                    <li>Mélanger les rythmes </li>
                    <li>Motifs rythmiques </li>
                </ol>
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
            scaleNotes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
            nbBars: 4,
            timeSignature: 4,
            chords: ["C", '', '', ''],
        },
        vf_w: 830,
        vf_h: 140,
        reRender: true,
    },
    repertoireImprov: {
        name: "repertoireImprov",
        title: "1.4.3 : La gamme majeure : Improvisation sur Blue Monks",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <h2>Intégrons maintenant cette nouvelle connaissance dans le répertoire.</h2>
                <p>
                    our réussir cet exercice, improvisez avec la gamme de si bémol majeur et mi bémol majeur sur la pièce Blue Monk de Thelonious Monk. Faites attentions de ne pas trop jouer le 7e degré majeur, car il peut entrer en conflit avec la 7e mineure des accords présente dans le blues. Utilisez la piste d’accompagnement ci-dessous : 
                </p>
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/MgEZxg0HOJU?si=3t8IP56ZE3wNzrwr" title="Piste d'accompagnement Blue Monk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                
                <div className="my-4 font-medium">
                    <p>
                        Pour réussir cet exercice, vous devez jouer un solo improvisé sur la piste d'accompagnement en
                        utilisant la gamme majeure.
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

export default TargetNotes;

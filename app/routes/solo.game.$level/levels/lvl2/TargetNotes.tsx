import scaleGenerator from "~/utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "~/utils/vexFlowGenerators/randomMelodyGenerator";
import blueMonk from "~/utils/songs/blueMonk";
import SheetMusic from "~/components/SheetMusic";
import targetNotesGenerator from "~/utils/vexFlowGenerators/targetNotesGenerator";
import targetNotesBlueMonk from "~/utils/vfTemplates/targetNotesBlueMonk";

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
                    Commencez par jouer une seule note de l'arpège de Bb sur le premier temps de chaque mesure, puis rajoutez une ou deux notes conjointes dans la mesure précédent votre note cible. Par exemple :
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
                    reRender
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
                    Utilisez maintenant les trois principaux accords du blues majeur en Bb concert pour improviser : Bb, Eb et F. Suivez la progression suivante :
                </p>
                <ol className=" list-inside list-disc">
                    <li>Trouver les notes cibles</li>
                    <li>Note cible sur le premier temps</li>
                    <li>Note cible précédé d'une note conjointe</li>
                    <li>Note cible précédé de deux notes conjointes</li>
                    <li>Trois croches ou plus qui mênent à la note cible</li>
                    <li>Jouer une note supplémentaire sur la croche suivant la note cible.</li>
                </ol>
                <p>
                    Il est recommandé d'utiliser le métronome afin de travailler la stabilité rythmique de votre
                    improvisation, mais n'hésitez pas à l'enlever pour explorer l'improvisation à votre instrument.
                </p>
                <p className="font-bold pt-4">
                    En panne d'inspiration?
                </p>
                <p>
                    Vous pouvez générer des exemples d'approches de notes cibles pour chaque accord du blues majeur ici :
                </p>
                <div className="flex flex-col justify-center">
                    <SheetMusic
                        transposition={transposition}
                        vfProps={{
                            template: targetNotesGenerator,
                            keySignature: "Bb",
                            scaleNotes: ["B3", "E4", "G4"],
                            nbBars: 4,
                            timeSignature: 4,
                            chords: ["Eb7", '', '', ''],
                        }}
                        vf_h={150}
                        vf_w={850}
                        reRender
                    />
                    <SheetMusic
                        transposition={transposition}
                        vfProps={{
                            template: targetNotesGenerator,
                            keySignature: "Bb",
                            scaleNotes: ["C4", "F4", "A4"],
                            nbBars: 4,
                            timeSignature: 4,
                            chords: ["F7", '', '', ''],
                        }}
                        vf_h={150}
                        vf_w={850}
                        reRender
                    />
                </div>
                
            </div>
        ),
        vfProps: {
            template: targetNotesGenerator,
            keySignature: "Bb",
            scaleNotes: ["B3", "D4", "F4"],
            nbBars: 4,
            timeSignature: 4,
            chords: ["Bb6", '', '', ''],
        },
        vf_w: 850,
        vf_h: 150,
        reRender: true,
    },
    repertoireImprov: {
        name: "repertoireImprov",
        title: "1.4.3 : La gamme majeure : Improvisation sur Blue Monks",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <h2>Intégrons maintenant cette nouvelle connaissance dans le répertoire.</h2>
                <p>
                    Pour réussir cet exercice, improviser un solo qui contient les notes cibles contenues dans la partition suivante. Utilisez la piste d’accompagnement ci-dessous : 
                </p>
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/MgEZxg0HOJU?si=3t8IP56ZE3wNzrwr" title="Piste d'accompagnement Blue Monk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                
                <div className="my-4 font-medium">
                    <p>
                        Ne vous sentez pas obligé de jouer toutes les notes cibles écrites sur les premiers temps. Vous pouvez anticiper la note en la jouant sur le "et" du quatrième temps de la mesure précédente ou sur le contretemps du premier temps de la mesure suivante.
                    </p>
                </div>
                <p>
                    N'oubliez pas de vous enregistrer à l'aide du micro en bas de la partition pour mieux vous évaluer!
                </p>
            </div>
        ),
        vfProps: {
            template: targetNotesBlueMonk,
            keySignature: "Bb",
            scaleNotes: [
                "D4", // ["B3", "D4"].splice(Math.floor(Math.random()*2), 1),
                "E4",
                "F4",
                "B3",
                "G4",
                "B4",
                "D5",
                "B4",
                "C5",
                "A4",
                "D4",
                "B3"
            ],
            nbBars: 12,
            timeSignature: 4,
            chords: ["Bb7", "Eb7", "Bb7", "", "Eb7", "Edim7", "Bb7", "", "F7", "", "Bb", ""],
        },
        vf_w: 950,
        vf_h: 350,
        reRender: false,
    },
};

export default TargetNotes;

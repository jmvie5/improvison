import motifMrPc from "../../../../utils/vfTemplates/motifMrPc";
import randomRhythmGenerator from "../../../../utils/vexFlowGenerators/randomRhythmGenerator";
import mrPC from "../../../../utils/songs/mrPc";
import SheetMusic from "../../../../components/SheetMusic";


const Motifs = {
    url: '1-3',
    id: "1.3",
    name: "Motifs",
    locked: false,
    completed: false,
    intro: {
        name: "intro",
        title: "1.3.1 : Les motifs rythmiques",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <h2>
                    Un des concepts les plus répandus en improvisation est l'utilisation de motifs rythmiques. 
                </h2>
                <p>
                    Un motif est défini par Anton Webern, grand compositeur Autrichien, comme la plus petite partie indépendante d'une idée musicale, qui est reconnaissable grâce à sa répétition. Plus simplement, c'est une suite de notes (ou de rythmes) qui restent dans la tête après avoir écouté une chanson ou un passage musical.
                </p>
                <div className="my-4 font-medium">
                    <p>
                        Pour commencer à utiliser les motifs dans votre improvisation, commencez par utiliser des motifs rythmiques. Plus précisément, les motifs rythmiques composés de noires et de croches sur une seule mesure. Lisez le motif rythmique présent dans la partition en suivant les étapes suivantes :
                    </p>
                    <ol className=" list-inside list-disc">
                        <li>Sur une seule note</li>
                        <li>Sur deux notes</li>
                        <li>Sur trois notes</li>
                        <li>En utilisant les notes de votre choix</li>
                    </ol>
                    <p>
                        Faites l'exercice quelques fois en changeant le rythme affiché grâce au bouton en dessous de la portée.
                    </p>
                </div>
                <p>
                    Les motifs sont présents dans presque toutes les mélodies, peu importe le style de musique. En improvisation, c'est un outil clé qui est utilisé par les improvisateurs de tous les niveaux pour partager leurs idées musicales avec le public. 
                </p>
                <p className="mt-8">
                    Voici un exemple d'utilisation de motifs en double croches dans un solo improvisé (2:06 à 2:13) :
                </p>
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/drHkTvXqMHI?si=bIprN8MeX8miNqQG&amp;controls=2&amp;start=125&end=135" title="All the Things You Are" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>

            </div>
        ),
        vfTitle: "Motif aléatoire",
        vfProps: {
            template: randomRhythmGenerator,
            keySignature: "C",
            scaleNotes: ["q", "2x8"],
            nbBars: 1,
            timeSignature: 4,
            chords: [""],
        },
        vf_w: 300,
        vf_h: 140,
        reRender: true,
    },
    freeImprov: {
        name: "freeImprov",
        title: "1.3.2 : Les motifs rythmiques : Improvisation libre",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <p>
                    Maintenant, improvisez un solo en essayant d'intégrer le motif généré aléatoirement.
                </p>
                <p>
                    Faites l'exercice quelques fois en changeant le rythme affiché grâce au bouton en dessous de la portée.
                </p>
                <p>
                    Il est recommandé d'utiliser le métronome afin de travailler la stabilité rythmique de votre
                    improvisation, mais n'hésitez pas à l'enlever pour explorer l'improvisation à votre instrument.
                </p>
                <p className="font-bold">
                    Pour passer au niveau suivant, enregistrer une imrovisation libre qui intègre au moins trois fois le motif généré.
                </p>
            </div>
        ),
        vfProps: {
            template: randomRhythmGenerator,
            keySignature: "C",
            scaleNotes: ["q", "2x8"],
            nbBars: 1,
            timeSignature: 4,
            chords: [""],
        },
        vf_w: 300,
        vf_h: 140,
        reRender: true,
    },
    repertoireImprov: {
        name: "repertoireImprov",
        title: "1.3.3 : Les motifs rythmiques : Improvisation sur Mr. P.C.",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <h2>Intégrons maintenant cette nouvelle connaissance dans le répertoire.</h2>
                <p>
                    Les motifs sont toujours présent dans les mélodies de pièces connues. Prennons l'exemple de Mr. P.C. et examinons les motifs suivants:
                </p>

                <SheetMusic
                    transposition={transposition}
                    vfProps={{
                        template: motifMrPc,
                        keySignature: "Eb",
                        scaleNotes: ["C4", "B3", "C4", "E4", "C4", "E4", "Gb4", "F4"],
                        nbBars: 2,
                        timeSignature: 4,
                        chords: ["", ''],
                    }}
                    vf_h={300}
                    vf_w={300}
                />
                
                <div className="my-4 font-medium">
                    <p>
                        Pour réussir cet exercice, vous devez intégrer ces motifs dans votre improvisation au moins trois fois.
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

export default Motifs;

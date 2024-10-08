import scaleGenerator from "~/utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "~/utils/vexFlowGenerators/randomMelodyGenerator";
import blueMonk from "~/utils/songs/blueMonk";
import SheetMusic from "~/components/SheetMusic";
import targetNotesGenerator from "~/utils/vexFlowGenerators/targetNotesGenerator";
import targetNotesBlueMonk from "~/utils/vfTemplates/targetNotesBlueMonk";
import {t} from 'i18next'

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
                {t("pages.soloGameLevels.targetNotes.intro.subTitle")}
                </p>
                <p className="italic p-4">
                {t("pages.soloGameLevels.targetNotes.intro.important")}
                </p>
                <p>
                {t("pages.soloGameLevels.targetNotes.intro.desc")}
                </p>
                <p>
                {t("pages.soloGameLevels.targetNotes.intro.instruction")}
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
                {t("pages.soloGameLevels.targetNotes.freeImprov.desc")}
                </p>
                <ol className=" list-inside list-disc">
                    <li>{t("pages.soloGameLevels.targetNotes.freeImprov.instruction1")}</li>
                    <li>{t("pages.soloGameLevels.targetNotes.freeImprov.instruction2")}</li>
                    <li>{t("pages.soloGameLevels.targetNotes.freeImprov.instruction3")}</li>
                    <li>{t("pages.soloGameLevels.targetNotes.freeImprov.instruction4")}</li>
                    <li>{t("pages.soloGameLevels.targetNotes.freeImprov.instruction5")}</li>
                    <li>{t("pages.soloGameLevels.targetNotes.freeImprov.instruction6")}</li>
                </ol>
                <p>
                {t("pages.soloGameLevels.targetNotes.freeImprov.metronome")}
                </p>
                <p className="font-bold pt-4">{t("pages.soloGameLevels.targetNotes.freeImprov.lackingInspiration.title")}</p>
                <p>
                {t("pages.soloGameLevels.targetNotes.freeImprov.lackingInspiration.desc")}
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
                <h2>
                    {t("pages.soloGameLevels.targetNotes.repertoireImprov.title")}
                </h2>
                <p>
                    {t("pages.soloGameLevels.targetNotes.repertoireImprov.subTitle")}
                </p>
                <p>
                    {t("pages.soloGameLevels.targetNotes.repertoireImprov.goal")}
                </p>
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/MgEZxg0HOJU?si=3t8IP56ZE3wNzrwr" title="Piste d'accompagnement Blue Monk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                
                <div className="my-4 font-medium">
                    <p>
                    <p>
                    {t("pages.soloGameLevels.targetNotes.repertoireImprov.remember")}
                </p>
                    </p>
                </div>
                <p>
                <p>
                    {t("pages.soloGameLevels.targetNotes.repertoireImprov.record")}
                </p>
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

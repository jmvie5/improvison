import scaleGenerator from "../../../../utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "../../../../utils/vexFlowGenerators/randomMelodyGenerator";
import mrPC from "../../../../utils/songs/mrPc";
import { t } from "i18next";

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
                <h2 className="mb-2 font-semibold text-lg">{t("pages.soloGameLevels.minorScale.title")}</h2>
                <p>{t("pages.soloGameLevels.minorScale.intro.desc")} </p>
                <div className="my-4 font-medium">
                    <p>
                    {t("pages.soloGameLevels.minorScale.intro.instructionDesc")}
                    </p>
                    <ol className=" list-inside list-disc">
                    <li>{t("pages.soloGameLevels.minorScale.intro.instruction1")} </li>
                    <li>{t("pages.soloGameLevels.minorScale.intro.instruction2")}</li>
                    <li>{t("pages.soloGameLevels.minorScale.intro.instruction3")}</li>
                    <li>{t("pages.soloGameLevels.minorScale.intro.instruction4")}</li>
                    </ol>
                </div>
                <p>
                {t("pages.soloGameLevels.minorScale.intro.instructionFinal")}
                </p>
                <p className=" italic">{t("pages.soloGameLevels.minorScale.intro.instructionFinal")}</p>

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
                    <h2>{t("pages.soloGameLevels.minorScale.freeImprov.title")}</h2>
                    <p>
                    {t("pages.soloGameLevels.minorScale.freeImprov.desc")}
                    </p>
                    <ol className=" list-inside list-disc">
                        <li>{t("pages.soloGameLevels.minorScale.freeImprov.instruction1")}</li>
                        <li>{t("pages.soloGameLevels.minorScale.freeImprov.instruction2")}</li>
                        <li>{t("pages.soloGameLevels.minorScale.freeImprov.instruction3")}</li>
                        <li>{t("pages.soloGameLevels.minorScale.freeImprov.instruction4")}</li>
                        <li>{t("pages.soloGameLevels.minorScale.freeImprov.instruction5")}</li>
                        <li>{t("pages.soloGameLevels.minorScale.freeImprov.instruction6")}</li>
                    </ol>
                </div>
                <p>
                {t("pages.soloGameLevels.minorScale.freeImprov.metronome")}
                </p>

                <p className="font-bold pt-4">
                {t("pages.soloGameLevels.minorScale.freeImprov.lackingInspiration.title")}
                </p>
                <p>
                {t("pages.soloGameLevels.minorScale.freeImprov.lackingInspiration.desc")}
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
                <h2>
                    {t("pages.soloGameLevels.minorScale.repertoireImprov.title")}
                </h2>
                <div className="my-4 font-medium">
                    <p>
                    {t("pages.soloGameLevels.minorScale.repertoireImprov.goal")}
                    </p>
                </div>
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/2uo_Xmi-mdU?si=d0P4axFKTSlbAJTH" title="Piste d'accompagnement Mr.P.C."  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                
                <p>
                {t("pages.soloGameLevels.minorScale.repertoireImprov.record")}
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

import scaleGenerator from "../../../../utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "../../../../utils/vexFlowGenerators/randomMelodyGenerator";
import mrPC from "../../../../utils/songs/mrPc";
import { t } from "i18next";

const PentaMin = {
    url: '1-2',
    id: "1.2",
    name: "Gamme pentatonique mineure",
    locked: false,
    completed: false,
    intro: {
        name: "intro",
        title: "1.2.1 : Gamme pentatonique mineure",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <h2>{t("pages.soloGameLevels.pentaMin.title")}</h2>
                <p>{t("pages.soloGameLevels.pentaMin.intro.desc")}</p>
                <p>{t("pages.soloGameLevels.pentaMin.intro.desc2")}</p>
                <div className="my-4 font-medium">
                    <p>{t("pages.soloGameLevels.pentaMin.intro.instructionDesc")}</p>
                    <ol className=" list-inside list-disc">
                        <li>{t("pages.soloGameLevels.pentaMin.intro.instruction1")}</li>
                        <li>{t("pages.soloGameLevels.pentaMin.intro.instruction2")}</li>
                        <li>{t("pages.soloGameLevels.pentaMin.intro.instruction3")}</li>
                        <li>{t("pages.soloGameLevels.pentaMin.intro.instruction4")}</li>
                    </ol>
                </div>
                <p>{t("pages.soloGameLevels.pentaMin.intro.instructionFinal")} </p>
                <p className=" italic">{t("pages.soloGameLevels.pentaMin.intro.notTooFast")}</p>
                <p className="mt-8">{t("pages.soloGameLevels.pentaMin.intro.examples")}</p>
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/AKyOg3mNDUs?si=beadOS0j0pqpQPpG&amp;controls=2&amp;start=113&end=122" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
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
        title: "1.2.2 : Gamme pentatonique mineure : Improvisation libre",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <h2 className="mb-2 font-semibold text-lg">{t("pages.soloGameLevels.pentaMin.freeImprov.title")}</h2>
                <p>{t("pages.soloGameLevels.pentaMin.freeImprov.desc")}</p>
                <div className="my-4">
                <p>{t("pages.soloGameLevels.pentaMin.freeImprov.instructionDesc")}</p>
                <ol className=" list-inside list-disc">
                    <li>
                    {t("pages.soloGameLevels.pentaMin.freeImprov.instruction1")}
                    </li>
                    <li>
                    {t("pages.soloGameLevels.pentaMin.freeImprov.instruction2")}
                    </li>
                    <li>
                    {t("pages.soloGameLevels.pentaMin.freeImprov.instruction3")}
                    </li>
                    <li>
                    {t("pages.soloGameLevels.pentaMin.freeImprov.instruction4")}
                    </li>
                    <li>
                    {t("pages.soloGameLevels.pentaMin.freeImprov.instruction5")}
                    </li>
                    <li>
                    {t("pages.soloGameLevels.pentaMin.freeImprov.instruction6")}
                    </li>
                    <li>
                    {t("pages.soloGameLevels.pentaMin.freeImprov.instruction7")}
                    </li>
                </ol>
                </div>
                <p>{t("pages.soloGameLevels.pentaMin.freeImprov.instructionFinal")}</p>
                <h3 className=" font-bold">
                {t(
                    "pages.soloGameLevels.pentaMin.freeImprov.lackingInspiration.title"
                )}
                </h3>
                <p>
                {t(
                    "pages.soloGameLevels.pentaMin.freeImprov.lackingInspiration.desc"
                )}
                </p>
                <p>{t("pages.soloGameLevels.pentaMin.freeImprov.recordYourself")}</p>
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
        title: "1.2.3 : Gamme pentatonique mineure : Improvisation sur Mr. P.C.",
        description: (transposition?:string) => (
            <div className="grid grid-cols-1 gap-2">
                <h2>{t("pages.soloGameLevels.pentaMin.repertoireImprov.title")}</h2>
                <p>{t("pages.soloGameLevels.pentaMin.repertoireImprov.subTitle")}</p>
                <p>{t("pages.soloGameLevels.pentaMin.repertoireImprov.desc")}</p>
                <iframe className="w-full aspect-video max-w-[800px]" src="https://www.youtube.com/embed/2uo_Xmi-mdU?si=d0P4axFKTSlbAJTH" title="Piste d'accompagnement Mr.P.C."  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                <div className="my-4 font-medium">
                    <p>{t("pages.soloGameLevels.pentaMin.repertoireImprov.goalTitle")}</p>
                    <p>{t("pages.soloGameLevels.pentaMin.repertoireImprov.goalDesc")} </p>
                </div>
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

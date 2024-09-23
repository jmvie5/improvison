import motifMrPc from "../../../../utils/vfTemplates/motifMrPc";
import randomRhythmGenerator from "../../../../utils/vexFlowGenerators/randomRhythmGenerator";
import mrPC from "../../../../utils/songs/mrPc";
import SheetMusic from "../../../../components/SheetMusic";
import { t } from "i18next";

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
                <h2 className="font-boldmb-2 font-semibold text-lg">
                    {t("pages.soloGameLevels.motifs.title")}
                </h2>
                <p>
                    {t("pages.soloGameLevels.motifs.intro.desc")}
                </p>
                <p>
                {t("pages.soloGameLevels.motifs.intro.desc2")}
                </p>
                <div className="my-4 font-medium">
                    <p>
                    {t("pages.soloGameLevels.motifs.intro.instructionDesc")}
                    </p>
                    <ol className=" list-inside list-disc">
                        <li>{t("pages.soloGameLevels.motifs.intro.instruction1")}</li>
                        <li>{t("pages.soloGameLevels.motifs.intro.instruction2")}</li>
                        <li>{t("pages.soloGameLevels.motifs.intro.instruction3")}</li>
                        <li>{t("pages.soloGameLevels.motifs.intro.instruction4")}</li>
                    </ol>
                    <p>
                    {t("pages.soloGameLevels.motifs.intro.instructionFinal")}
                    </p>
                </div>
                <p>
                {t("pages.soloGameLevels.motifs.intro.final")}
                </p>
                <p className="mt-8">
                {t("pages.soloGameLevels.motifs.intro.examples")}
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
                <h2 className="font-boldmb-2 font-semibold text-lg">
                    {t("pages.soloGameLevels.motifs.freeImprov.title")}
                </h2>
                <p>
                {t("pages.soloGameLevels.motifs.freeImprov.desc")}
                </p>
                <p>
                {t("pages.soloGameLevels.motifs.freeImprov.instruction")}
                </p>
                <p>
                {t("pages.soloGameLevels.motifs.freeImprov.metronome")}
                </p>
                <p className="font-bold">
                {t("pages.soloGameLevels.motifs.freeImprov.goal")}
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
                <h2 className="font-boldmb-2 font-semibold text-lg">{t("pages.soloGameLevels.motifs.repertoireImprov.title")}</h2>
                <p>
                {t("pages.soloGameLevels.motifs.repertoireImprov.subTitle")}
                </p>
                <p>{t("pages.soloGameLevels.motifs.repertoireImprov.desc")}</p>
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
                    {t("pages.soloGameLevels.motifs.repertoireImprov.goal")}
                    </p>
                </div>
                <p>
                {t("pages.soloGameLevels.motifs.repertoireImprov.record")}
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

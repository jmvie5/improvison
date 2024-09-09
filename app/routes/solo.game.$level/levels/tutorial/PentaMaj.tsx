import scaleGenerator from "../../../../utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "../../../../utils/vexFlowGenerators/randomMelodyGenerator";
import blueMonk from "../../../../utils/songs/blueMonk";
import { t } from "i18next";

const PentaMaj = {
  url: "1-1",
  id: "1.1",
  name: "Gamme pentatonique majeure",
  locked: false,
  completed: false,
  intro: {
    name: "intro",
    title: "1.1.1 : Gamme pentatonique majeure",
    description: (transposition?: string) => (
      <div className="grid grid-cols-1 gap-2">
        <h2 className="mb-2 font-semibold text-lg">{t("pages.soloGameLevels.pentaMaj.title")}</h2>
        <p>{t("pages.soloGameLevels.pentaMaj.intro.desc")}</p>
        <p>{t("pages.soloGameLevels.pentaMaj.intro.desc2")}</p>
        <div className="my-4 font-medium">
          <p>{t("pages.soloGameLevels.pentaMaj.intro.instructionDesc")}</p>
          <ol className=" list-inside list-disc">
            <li>{t("pages.soloGameLevels.pentaMaj.intro.instruction1")} </li>
            <li>{t("pages.soloGameLevels.pentaMaj.intro.instruction2")}</li>
            <li>{t("pages.soloGameLevels.pentaMaj.intro.instruction3")}</li>
            <li>{t("pages.soloGameLevels.pentaMaj.intro.instruction4")}</li>
          </ol>
        </div>
        <p>{t("pages.soloGameLevels.pentaMaj.intro.instructionFinal")}</p>
        <p className=" italic">
          {t("pages.soloGameLevels.pentaMaj.intro.notTooFast")}
        </p>
        <p className="mt-8">
          {t("pages.soloGameLevels.pentaMaj.intro.exemples")}
        </p>
        <iframe
          className="w-full aspect-video max-w-[800px]"
          src="https://www.youtube.com/embed/s4rXEKtC8iY?si=CsuYXuVHNXncl_B6&amp;controls=2&amp;start=63&end=75"
          title="Mercy, Mercy, Mercy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
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
    description: (transposition?: string) => (
      <div className="grid grid-cols-1 gap-2">
        <h2 className="mb-2 font-semibold text-lg">{t("pages.soloGameLevels.pentaMaj.freeImprov.title")}</h2>
        <p>{t("pages.soloGameLevels.pentaMaj.freeImprov.desc")}</p>
        <div className="my-4">
          <p>{t("pages.soloGameLevels.pentaMaj.freeImprov.instructionDesc")}</p>
          <ol className=" list-inside list-disc">
            <li>
              {t("pages.soloGameLevels.pentaMaj.freeImprov.instruction1")}
            </li>
            <li>
              {t("pages.soloGameLevels.pentaMaj.freeImprov.instruction2")}
            </li>
            <li>
              {t("pages.soloGameLevels.pentaMaj.freeImprov.instruction3")}
            </li>
            <li>
              {t("pages.soloGameLevels.pentaMaj.freeImprov.instruction4")}
            </li>
            <li>
              {t("pages.soloGameLevels.pentaMaj.freeImprov.instruction5")}
            </li>
            <li>
              {t("pages.soloGameLevels.pentaMaj.freeImprov.instruction6")}
            </li>
            <li>
              {t("pages.soloGameLevels.pentaMaj.freeImprov.instruction7")}
            </li>
          </ol>
        </div>
        <p>{t("pages.soloGameLevels.pentaMaj.freeImprov.instructionFinal")}</p>
        <h3 className=" font-bold">
          {t(
            "pages.soloGameLevels.pentaMaj.freeImprov.lackingInspiration.title"
          )}
        </h3>
        <p>
          {t(
            "pages.soloGameLevels.pentaMaj.freeImprov.lackingInspiration.desc"
          )}
        </p>
        <p>{t("pages.soloGameLevels.pentaMaj.freeImprov.recordYourself")}</p>
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
    description: (transposition?: string) => (
      <div className="grid grid-cols-1 gap-2">
        <h2 className="mb-2 font-semibold text-lg">{t("pages.soloGameLevels.pentaMaj.repertoireImprov.title")}</h2>
        <p>{t("pages.soloGameLevels.pentaMaj.repertoireImprov.subTitle")}</p>
        <p>{t("pages.soloGameLevels.pentaMaj.repertoireImprov.desc")}</p>
        <p>
          {t("pages.soloGameLevels.pentaMaj.repertoireImprov.bluesTableTitle")}
          [Blues table]
        </p>
        <iframe
          className="w-full aspect-video max-w-[800px]"
          src="https://www.youtube.com/embed/MgEZxg0HOJU?si=3t8IP56ZE3wNzrwr"
          title="Piste d'accompagnement Blue Monk"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <div className="my-4 font-medium">
          <p className="font-bold">
            {t("pages.soloGameLevels.pentaMaj.repertoireImprov.goalTitle")}
          </p>
          <p>{t("pages.soloGameLevels.pentaMaj.repertoireImprov.goalDesc")}</p>
        </div>
        <div className="my-4 font-medium">
          <p className="font-bold">
            {t(
              "pages.soloGameLevels.pentaMaj.repertoireImprov.expertTips.title"
            )}
          </p>
          <p>
            {t(
              "pages.soloGameLevels.pentaMaj.repertoireImprov.expertTips.tip1"
            )}
          </p>
          <p>
            {t(
              "pages.soloGameLevels.pentaMaj.repertoireImprov.expertTips.tip2"
            )}
          </p>
        </div>
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
      chords: [
        "Bb7",
        "Eb7",
        "Bb7",
        "",
        "Eb7",
        "Edim7",
        "Bb7",
        "",
        "F7",
        "",
        "Bb",
        "",
      ],
    },
    vf_w: 900,
    vf_h: 350,
    reRender: false,
  },
};

export default PentaMaj;

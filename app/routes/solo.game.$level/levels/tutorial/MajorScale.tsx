import scaleGenerator from "~/utils/vexFlowGenerators/scaleGenerator";
import randomMelodyGenerator from "~/utils/vexFlowGenerators/randomMelodyGenerator";
import blueMonk from "~/utils/songs/blueMonk";
import {t} from 'i18next'

const MajorScale = {
  url: "1-4",
  id: "1.4",
  name: "Gamme majeure",
  locked: false,
  completed: false,
  intro: {
    name: "intro",
    title: "1.4.1 : La gamme majeure",
    description: (transposition?: string, locale: string = "fr") => (
      <div className="grid grid-cols-1 gap-2">
        
        <p>
        {t("pages.soloGameLevels.majorScale.intro.desc")}
        </p>
        <div className="my-4 font-medium">
          <p>
          {t("pages.soloGameLevels.majorScale.intro.instructionDesc")}
          </p>
          <ol className=" list-inside list-disc">
            <li>{t("pages.soloGameLevels.majorScale.intro.instruction1")} </li>
            <li>{t("pages.soloGameLevels.majorScale.intro.instruction2")}</li>
            <li>{t("pages.soloGameLevels.majorScale.intro.instruction3")}</li>
            <li>{t("pages.soloGameLevels.majorScale.intro.instruction4")}</li>
          </ol>
        </div>
        <p>
        {t("pages.soloGameLevels.majorScale.intro.instructionFinal")}
        </p>
        <p className="italic">
        {t("pages.soloGameLevels.majorScale.intro.notTooFast")}
        </p>
      </div>
    ),

    vfProps: {
      template: scaleGenerator,
      keySignature: "C",
      scaleNotes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
      nbBars: 1,
      timeSignature: 4,
      chords: [""],
    },
    vf_w: 500,
    vf_h: 140,
    reRender: false,
  },
  freeImprov: {
    name: "freeImprov",
    title: "1.4.2 : La gamme majeure : Improvisation libre",
    description: (transposition?: string) => (
      <div className="grid grid-cols-1 gap-2">
        <h2>{t("pages.soloGameLevels.majorScale.freeImprov.title")}</h2>
        <p>
        {t("pages.soloGameLevels.majorScale.freeImprov.desc")}
        </p>
        <ol className=" list-inside list-disc">
          <li>{t("pages.soloGameLevels.majorScale.freeImprov.instruction1")}</li>
          <li>{t("pages.soloGameLevels.majorScale.freeImprov.instruction2")}</li>
          <li>{t("pages.soloGameLevels.majorScale.freeImprov.instruction3")}</li>
          <li>{t("pages.soloGameLevels.majorScale.freeImprov.instruction4")}</li>
          <li>{t("pages.soloGameLevels.majorScale.freeImprov.instruction5")}</li>
          <li>{t("pages.soloGameLevels.majorScale.freeImprov.instruction6")}</li>
        </ol>
        <p>
        {t("pages.soloGameLevels.majorScale.freeImprov.metronome")}
        </p>
        <p className="font-bold pt-4">{t("pages.soloGameLevels.majorScale.freeImprov.lackingInspiration.title")}</p>
        <p>
        {t("pages.soloGameLevels.majorScale.freeImprov.lackingInspiration.desc")}
        </p>
      </div>
    ),
    vfProps: {
      template: randomMelodyGenerator,
      keySignature: "C",
      scaleNotes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
      nbBars: 4,
      timeSignature: 4,
      chords: ["C", "", "", ""],
    },
    vf_w: 830,
    vf_h: 140,
    reRender: true,
  },
  repertoireImprov: {
    name: "repertoireImprov",
    title: "1.4.3 : La gamme majeure : Improvisation sur Blue Monks",
    description: (transposition?: string) => (
      <div className="grid grid-cols-1 gap-2">
        <h2>
        {t("pages.soloGameLevels.majorScale.repertoireImprov.title")}
        </h2>
        <p>
        {t("pages.soloGameLevels.majorScale.repertoireImprov.desc")}
        </p>
        <iframe
          className="w-full aspect-video max-w-[800px]"
          src="https://www.youtube.com/embed/MgEZxg0HOJU?si=3t8IP56ZE3wNzrwr"
          title="Piste d'accompagnement Blue Monk"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>

        <div className="my-4 font-medium">
          <p>
          {t("pages.soloGameLevels.majorScale.repertoireImprov.goal")}
          </p>
        </div>
        <p>
        {t("pages.soloGameLevels.majorScale.repertoireImprov.record")}
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

export default MajorScale;

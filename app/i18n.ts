// https://github.com/sergiodxa/remix-vite-i18next

import * as landingIndexEN from "./routes/_landing._index/translations/en.json";
import * as landingIndexFR from "./routes/_landing._index/translations/fr.json";

import * as landingAboutEN from "./routes/_landing.about/translations/en.json";
import * as landingAboutFR from "./routes/_landing.about/translations/fr.json";

import * as landingDuoEN from "./routes/_landing.duo/translations/en.json";
import * as landingDuoFR from "./routes/_landing.duo/translations/fr.json";

import * as landingLearnMoreEN from "./routes/_landing.learn-more/translations/en.json";
import * as landingLearnMoreFR from "./routes/_landing.learn-more/translations/fr.json";

import * as soloLayoutEN from "./routes/solo/translations/en.json";
import * as soloLayoutFR from "./routes/solo/translations/fr.json";

import * as soloGameEN from "./routes/solo.game/translations/en.json";
import * as soloGameFR from "./routes/solo.game/translations/fr.json";

import * as soloProfileEN from "./routes/solo.profile/translations/en.json";
import * as soloProfileFR from "./routes/solo.profile/translations/fr.json";

import * as soloGameLevelsEN from "./routes/solo.game.$level/translations/en.json";
import * as soloGameLevelsFR from "./routes/solo.game.$level/translations/fr.json";

// This is the list of languages your application supports
export const supportedLngs = ["fr", "en"];

// This is the language you want to use in case
// if the user language is not in the supportedLngs
export const fallbackLng = "en";

// The default namespace of i18next is "translation", but you can customize it
// here
export const defaultNS = "translation";

export const resources = {
  en: {
    translation: {
      home: {
        title: "Improvison",
        description: "Learning improvisation through play",
        learn: "Learning ",
        improvisation: "improvisation",
        throughPlay: " through play"
      },
      error: {
        title: "This page does not exist, or you do not have permission to access it.",
        text: "Click on the button at the top left to return to the home page.",
        backHome: "Home"
      },
      pages: {
        landingIndex: landingIndexEN,
        landingAbout: landingAboutEN,
        landingDuo: landingDuoEN,
        landingLearnMore: landingLearnMoreEN,
        soloLayout: soloLayoutEN,
        soloGame: soloGameEN,
        soloGameLevels: soloGameLevelsEN,
        soloProfile: soloProfileEN,
      },
    },
  },
  fr: {
    translation: {
      home: {
        title: "Improvison",
        description: "Apprendre à improviser en jouant",
        learn: "Apprendre à ",
        improvisation: "improviser",
        throughPlay: " en jouant"
      },
      error: {
        title: "Cette page n'existe pas, où vous n'avez pas la permission d'y accèder.",
        text: "Cliquez sur le bouton en haut à gauche pour revenir à l'accueil.",
        backHome: "Accueil"
      },
      pages: {
        landingIndex: landingIndexFR,
        landingAbout: landingAboutFR,
        landingDuo: landingDuoFR,
        landingLearnMore: landingLearnMoreFR,
        soloLayout: soloLayoutFR,
        soloGame: soloGameFR,
        soloGameLevels: soloGameLevelsFR,
        soloProfile: soloProfileFR,
      },
    },
  },
};

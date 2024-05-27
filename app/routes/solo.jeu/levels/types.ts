import { ReactElement } from "react";

interface SubLvlInterface {
    name: string;
    title: string;
    description: (transposition?: string) => JSX.Element;
    vfProps: {
        template: Function;
        keySignature: string;
        scaleNotes: string[];
        nbBars: number;
        timeSignature: number;
        chords: string[];
    };
    vf_w: number;
    vf_h: number;
    reRender: boolean
}

interface LevelInterface {
    url: string,
    id: string;
    name: string;
    locked: boolean;
    completed: boolean;
    intro: SubLvlInterface;
    freeImprov: SubLvlInterface;
    repertoireImprov: SubLvlInterface;
}

export type { SubLvlInterface, LevelInterface }
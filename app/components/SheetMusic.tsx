import { useEffect, useRef, useCallback } from "react";
import { Factory, Renderer, RenderContext } from "vexflow";
import transpose, { transposeProps } from "../utils/transposition";
import { Button } from "@nextui-org/react";
import { t } from "i18next";
import useWindowSize from "~/hooks/useWindowSize";

export interface sheetMusicInterface {
  transposition?: string;
  vfProps: {
    template: (
      vf: Factory,
      keySignature: string,
      scaleNotes: string[],
      nbBars: number,
      timeSignature: number,
      chords: string[]
    ) => Factory;
    keySignature: string;
    scaleNotes: string[];
    nbBars: number;
    timeSignature: number;
    chords: string[];
  };
  vf_w: number;
  vf_h: number;
  reRender: boolean;
}

export default function SheetMusic({
  transposition,
  vfProps,
  vf_h,
  vf_w,
  reRender,
}: sheetMusicInterface) {
  const wSize = useWindowSize();
  const sheetId = useRef(Math.floor(Math.random() * 1000));
  const clearVf = useCallback(() => {
    const staff = document.getElementById(`sheetMusic_${sheetId.current}`);
    while (staff?.hasChildNodes()) {
      staff.removeChild(staff.lastChild!);
    }
  }, []);

  const drawVf = useCallback(() => {
    clearVf();
    // transpose() if needed
    let transposedVf: sheetMusicInterface["vfProps"];
    if (vfProps.template.name === "randomRhythmGenerator") {
      transposedVf = vfProps;
    } else {
      const transposedVfProps: transposeProps = transpose(
        transposition || "C",
        {
          keySignature: vfProps.keySignature,
          scaleNotes: vfProps.scaleNotes,
          chords: vfProps.chords,
        }
      )!;

      transposedVf = {
        template: vfProps.template,
        keySignature: transposedVfProps.keySignature,
        scaleNotes: transposedVfProps.scaleNotes,
        nbBars: vfProps.nbBars,
        timeSignature: vfProps.timeSignature,
        chords: transposedVfProps.chords,
      };
    }

    const vfElement = document.getElementById(`sheetMusic_${sheetId.current}`);
    if (vfElement) {
      const vf = transposedVf.template(
        new Factory({
          renderer: {
            backend: Renderer.Backends.SVG,
            elementId: `sheetMusic_${sheetId.current}`,
            width: vf_w,
            height: vf_h,
          },
        }),
        transposedVf.keySignature,
        transposedVf.scaleNotes,
        transposedVf.nbBars,
        transposedVf.timeSignature,
        transposedVf.chords
      );
      // const context = vf.getContext();
      // const vfWidth = wSize
      //   ? wSize.width -
      //     Number(document.documentElement.style.fontSize.slice(0, 2)) * 4 // to account for p-4
      //   : vf_w;
      // const vfScale = wSize
      //   ? vf_w > wSize.width
      //     ? wSize.width / vf_w
      //     : vf_w / wSize.width
      //   : 1;
      // console.log(wSize!.width / vf_w);
      // context.scale(wSize!.width / vf_w, 1);
      // context.resize(vfWidth, vf_h);
      vf.draw();
    }
  }, [clearVf, vfProps, vf_h, vf_w, transposition /* wSize */]);

  useEffect(() => {
    drawVf();
  }, [transposition]); // eslint-disable-line

  useEffect(() => {
    const vfEl = document.getElementById(`sheetMusic_${sheetId.current}`);
    console.log(vfEl!.getElementsByTagName("svg"));
    vfEl!
      .getElementsByTagName("svg")
      .item(0)
      ?.setAttribute("width", `${(vf_w * wSize!.width) / vf_w - 64}`);
  }, [wSize]);

  return (
    <div className={`flex flex-col bg-slate-200 my-2 p-4 w-fit h-fit rounded `}>
      <div id={`sheetMusic_${sheetId.current}`}></div>

      {reRender ? (
        <Button
          onClick={drawVf}
          className="btn-primary col-start-2 self-end"
          color="primary"
        >
          {t("pages.soloGameLevels.vf.newMotif")}
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
}

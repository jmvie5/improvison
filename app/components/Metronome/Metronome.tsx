import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import workerScript from "./metronomeWorker";
import {
  PlusIcon,
  MinusIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";
import metronomeSound from "./metronomeSound";

export default function Metronome() {
  const [metronomeWorker, setMetronomeWorker] = useState<Worker>();
  const [bpm, setBpm] = useState(120);
  const [isPLaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // set Worker
    const worker = new Worker(workerScript);
    worker.postMessage({ interval: 60000 / bpm });
    worker.onmessage = ({ data }) => {
      if (data === "tick") {
        playMetronome();
      }
    };
    setMetronomeWorker(worker);
  }, []);

  useEffect(() => {
    isPLaying
      ? metronomeWorker?.postMessage("start")
      : metronomeWorker?.postMessage("stop");
  }, [isPLaying, metronomeWorker]);

  useEffect(() => {
    metronomeWorker?.postMessage({ interval: 60000 / bpm });
  }, [bpm, metronomeWorker]);

  function playMetronome() {
    metronomeSound.play();
  }

  return (
    <div className="flex items-center gap-2">
      <ButtonGroup>
        <Button isIconOnly onPress={() => setBpm(bpm + 10)} className="p-2">
          <PlusIcon />
        </Button>
        <Button isIconOnly onPress={() => setBpm(bpm - 10)} className="p-2">
          <MinusIcon />
        </Button>
      </ButtonGroup>

      <span>{bpm} bpm</span>
      <Button
        onPress={() => setIsPlaying(!isPLaying)}
        isIconOnly
        className="p-2"
        color="success"
      >
        {isPLaying ? <PauseIcon /> : <PlayIcon />}
      </Button>
    </div>
  );
}

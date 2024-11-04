import metronomeSrc from "./metronome.mp3";
import { Howl } from "howler";

const metronomeSound = new Howl({
  src: metronomeSrc,
});

export default metronomeSound;

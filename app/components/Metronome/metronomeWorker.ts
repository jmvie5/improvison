const metronomeWorker = () => {
  let timerID: NodeJS.Timeout | undefined = undefined;
  let interval = 100;

  onmessage = function (e) {
    if (e.data === "start") {
      console.log("starting metronome");
      timerID = setInterval(() => {
        postMessage("tick");
      }, interval);
    } else if (e.data.interval) {
      console.log("setting interval");
      interval = e.data.interval;
      console.log("interval=" + interval);

      if (timerID) {
        clearInterval(timerID);
        timerID = setInterval(() => {
          postMessage("tick");
        }, interval);
      }
    } else if (e.data == "stop") {
      console.log("stopping metronome");
      clearInterval(timerID);
      timerID = undefined;
    }
  };
};

let code = metronomeWorker.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
const blob = new Blob([code], { type: "application/javascriptssky" });
const workerScript = URL.createObjectURL(blob);
export default workerScript;

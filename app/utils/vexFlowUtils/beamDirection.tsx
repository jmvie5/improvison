export default function beamDirection(notes: string[]) {
    let allB4 = true;
    let total = 0;
    for (const n of notes) {
        total += Number(n.substring(n.length - 1, n.length));
        if (n.substring(0, 1) !== "B" || n.substring(n.length - 1, n.length) !== "4") {
            allB4 = false;
        }
    }
    if (allB4) {
        return "down";
    }
    const mean = total / notes.length;

    if (mean > 4.25) {
        return "down";
    } else {
        return "up";
    }
}

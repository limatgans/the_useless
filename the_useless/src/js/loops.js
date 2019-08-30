import Tone from "tone"
import { polySynth } from "./mixer.js"

const polySynthLoop = new Tone.Loop(function (time) {
    console.log('Loop', time);
    polySynth.triggerAttackRelease(['C2', 'E2', 'G2', 'B2'], 10, time);
}, 15);

export { polySynthLoop }
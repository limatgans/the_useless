import Tone from "tone"
import { polySynth, noiseSynth, membraneSynth } from "./mixer.js"

const polySynthLoop = new Tone.Loop(function (time) {
    console.log('polySynthLoop', time);
    polySynth.triggerAttackRelease(['C2', 'E2', 'G2', 'B2'], 10, time);
}, 15);

const memNoiseSynthLoop = new Tone.Loop(function (time) {
    console.log('memNoiseSynthLoop', time);
    membraneSynth.triggerAttackRelease("C1", "2n");
    noiseSynth.triggerAttackRelease('2n');
}, 3.25);

export { polySynthLoop, memNoiseSynthLoop }
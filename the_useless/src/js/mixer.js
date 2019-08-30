import Tone from "tone"
import {synth , polySynth, noiseSynth, membraneSynth} from "./synth";

/* Mixing Synth */
const autoWah = new Tone.AutoWah();
const distortion = new Tone.Distortion({
    distortion : 0.5
})
const feedback =  new Tone.FeedbackDelay({
    delayTime : 0.5 ,
    maxDelay : 2 
});
const pingPongDelay = new Tone.PingPongDelay();
synth.chain(autoWah, distortion, Tone.Master);
polySynth.toMaster();
noiseSynth.chain(autoWah, distortion, feedback, pingPongDelay, Tone.Master);
membraneSynth.chain(autoWah, distortion, feedback, pingPongDelay, Tone.Master);

export {synth, polySynth, noiseSynth, membraneSynth };
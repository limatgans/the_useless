import Tone from "tone"
import {synth , polySynth} from "./synth";

/* Mixing Synth */
synth.toMaster();
polySynth.toMaster();


export {synth, polySynth };
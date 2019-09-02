import Tone from "tone";
import { plainSynth } from "./mixer";
import { c4MajorScale } from  "../utils/scales";

const c4MajorAltDownPattern = new Tone.Pattern((time, note) => {
	console.log("c4MajorAltDownPattern", time)
	plainSynth.triggerAttackRelease(note, "2n", time);
}, c4MajorScale, "alternateDown");

export { c4MajorAltDownPattern }
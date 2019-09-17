import Tone from "tone";
import { plainSynth, membraneSynth, membraneSynth2, polySynthForChords, polySynthForChords1 } from "./mixer";
import { c4MajorScale, backMelody1, backChords1 } from  "../utils/scales";

const c4MajorAltDownPattern = new Tone.Pattern((time, note) => {
	console.log("c4MajorAltDownPattern", time)
	plainSynth.triggerAttackRelease(note, "1n", time);
}, c4MajorScale, "alternateDown");

const backMelody1Pattern = new Tone.Pattern((time, note)=> {
	console.log("backMelody1Pattern", time)
	membraneSynth2.triggerAttackRelease(note, "1n", time)
}, backMelody1, "up")

const polySynthPattern = new Tone.Pattern((time, note)=> {
	console.log("polySynthPattern", time)
	polySynthForChords.triggerAttackRelease(note, "1n", time);
}, backChords1, "up" )

const polySynthPattern2 = new Tone.Pattern((time, note)=> {
	console.log("polySynthPattern", time)
	polySynthForChords1.triggerAttackRelease(note, "1n", time);
}, backChords1, "up" )

export { c4MajorAltDownPattern, backMelody1Pattern, polySynthPattern, polySynthPattern2 }
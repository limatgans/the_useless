import Tone from "tone"
import {
	synth,
	plainSynth, 
	polySynth, 
	noiseSynth, 
	membraneSynth
} from "./synth";

/* Mixing Synth */
const autoWah = new Tone.AutoWah();
const distortion = ({ distortion }) => new Tone.Distortion({
	distortion
});

const feedback =  new Tone.FeedbackDelay({
	delayTime : 0.5 ,
	maxDelay : 2 
});
const pingPongDelay = new Tone.PingPongDelay();

synth.chain(
	autoWah,
	distortion({ distortion : 0.5 }), 
	Tone.Master
);
plainSynth.chain(
	distortion({ distortion : 0.3 }), 
	pingPongDelay, 
	Tone.Master
);
polySynth.toMaster();
noiseSynth.chain(
	autoWah,
	distortion({ distortion : 0.5 }),
	feedback, 
	pingPongDelay, 
	Tone.Master
);
membraneSynth.chain(
	autoWah, 
	distortion({ distortion : 0.5 }),
	feedback, 
	pingPongDelay, 
	Tone.Master
);

export {
	synth,
	plainSynth, 
	polySynth, 
	noiseSynth, 
	membraneSynth
};
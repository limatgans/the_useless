import Tone from "tone"
import {
	synth,
	plainSynth, 
	polySynth, 
	polySynthForChords,
	noiseSynth, 
	membraneSynth,
	membraneSynth2
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
polySynth.chain(
	Tone.Master
);
polySynthForChords.chain(
	distortion({  distortion : 0.3  }),
	feedback,
	Tone.Master
);
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
membraneSynth2.chain(
	distortion({ distortion : 0.6 }),
	feedback, 
	Tone.Master
);

export {
	synth,
	plainSynth, 
	polySynth, 
	polySynthForChords,
	noiseSynth, 
	membraneSynth,
	membraneSynth2
};
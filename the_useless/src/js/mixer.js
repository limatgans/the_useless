import Tone from "tone"
import {
	synth,
	plainSynth, 
	polySynth, 
	polySynthForChords,
	polySynthForChords1,
	noiseSynth, 
	membraneSynth,
	membraneSynth2,
	AMSynth
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
polySynthForChords1.chain(
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
AMSynth.chain(
	Tone.Master
);

export {
	synth,
	plainSynth, 
	polySynth, 
	polySynthForChords,
	polySynthForChords1,
	noiseSynth, 
	membraneSynth,
	membraneSynth2,
	AMSynth
};
/* Synths */
import Tone from "tone"

const createMemberaneSynth = (properties = {}) => new Tone.MembraneSynth(properties);

const synth = new Tone.Synth({
	"oscillator": {
		"type": "pwm",
		"modulationFrequency": 0.2
	},
	"envelope": {
		"attack": 0.2,
		"decay": 0.4,
		"sustain": 0.5,
		"release": 0.9,
	},
	"volume": -20
});

const plainSynth = new Tone.Synth()
const polySynth = new Tone.PolySynth(4, Tone.Synth);
const polySynthForChords = new Tone.PolySynth(3, Tone.Synth,  {
	volume : 20,
	detune : 1200,
});

// Instruments - Tone. Instruments
const noiseSynth = new Tone.NoiseSynth({
	"envelope": {
		"attack": 0.2,
		"decay": 0.4,
		"sustain": 0.5,
		"release": 0.9,
	},
	"volume": -15

});

const membraneSynth = createMemberaneSynth({
	pitchDecay: 0.5,
	octaves: 10,
	oscillator: {
		type: "sine"
	},
	envelope: {
		attack: 0.1,
		decay: 0.4,
		sustain: 0.1,
		release: 1.4,
		attackCurve: "exponential"
	},
	"volume": -10
})

const membraneSynth2 = createMemberaneSynth({
	pitchDecay: 0.5,
	octaves: 10,
	oscillator: {
		type: "sine"
	},
	envelope: {
		attack: 0.1,
		decay: 0.4,
		sustain: 0.1,
		release: 1.4,
		attackCurve: "exponential"
	},
	"volume": -10
})

export { 
	synth,
	plainSynth, 
	polySynth,
	polySynthForChords, 
	noiseSynth, 
	membraneSynth,
	membraneSynth2 
}
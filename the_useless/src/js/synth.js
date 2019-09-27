/* Synths */
import Tone from "tone"

const createMemberaneSynth = (properties = {}) => new Tone.MembraneSynth(properties);
const createAMSynth = (properties = {}) => new Tone.AMSynth(properties);

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

const plainSynth = new Tone.Synth();
const createPolySynth = ({polypony = 4, voice = Tone.Synth, args}) => new Tone.PolySynth(polypony, voice, args)
const polySynth =  createPolySynth({});
const polySynthForChords = createPolySynth({
	polypony: 3,
	voice: Tone.Synth,
	args: {
		volume : 15,
		detune : 1200,
	}
});
const polySynthForChords1 = createPolySynth({
	polypony: 3,
	voice: Tone.Synth,
	args: {
		volume : 17.5,
		detune : 1200,
	}
});
/* const metalSynth = createMetalSynth({
	frequency: 100,
	envelope: {
		attack: 0.01,
		decay: 1.4,
		release: 0.02
	},
	harmonicity: 7.1,
	modulationIndex: 32,
	resonance: 4000,
	octaves: 1.5
}) */

const AMSynth = createAMSynth();

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
	polySynthForChords1,
	noiseSynth, 
	membraneSynth,
	membraneSynth2,
	AMSynth 
}
/* Synths */
import Tone from "tone"

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

const polySynth = new Tone.PolySynth(4, Tone.Synth);

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

const membraneSynth = new Tone.MembraneSynth({
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

export { synth, polySynth, noiseSynth, membraneSynth }
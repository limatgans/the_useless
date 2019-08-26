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

export { synth, polySynth }
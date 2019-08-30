import Tone from "tone"

// Importing Modules
import { synth } from "./mixer.js"
import { polySynthLoop, memNoiseSynthLoop } from "./loops.js"


const play = () => {

    synth.triggerAttackRelease("C2", 400);
    polySynthLoop.start(10).stop(200);
    memNoiseSynthLoop.start(5).stop(200);

    // Starting Transport
    Tone.Transport.start();

    /* Experimentations Below */

    // Use it for may be as a part of drum kit
    // noiseSynth.triggerAttackRelease('16n');
    
    // const repeatSynth = () => {
    //     console.log('repeatSynth');
    //     polySynth.triggerAttackRelease(['C2', 'E2', 'G2', 'B2'], '16n');
    // }

    // Tone.Transport.scheduleRepeat(repeatSynth, "4n");

    // Tone.Transport.schedule(repeatSynth, 3)
    // Tone.Transport.start();

    //pass in an array of events
    // var part = new Tone.Part(function (time, event) {
    //     //the events will be given to the callback with the time they occur
    //     console.log({event})
    //     polySynth.triggerAttackRelease(event.note, event.dur, time)
    // }, [
    //     { time: 0, note: ['C2', 'E2', 'G2', 'B2'], dur: '4n' },
    //     { time: '1s', note: ['G2', 'B2', 'C2', 'E2'], dur: '16n' },
    //     { time: '2n', note: ['E2', 'G2', 'B2', 'C2'], dur: '8n' },
    //     { time: '1n', note: [ 'B2', 'C2', 'E2', 'G2'], dur: '4n' }
    // ])

    // //start the part at the beginning of the Transport's timeline
    // part.start(0)

    // //loop the part 3 times
    // part.loop = 3
    // part.loopEnd = '1m'
    // Tone.Transport.toggle();

}

export default play
const play = () => {
    
    /* Synths */
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
    synth.toMaster().triggerAttackRelease("C2", 10)
    const polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
    
    const repeatSynth = () => {
        console.log('repeatSynth')
        polySynth.triggerAttackRelease(['C2', 'E2', 'G2', 'B2'], '16n')
    }

    /* Experimentations Below */

    // Tone.Transport.scheduleRepeat(repeatSynth, "4n");

    //create a loop
    // const loop = new Tone.Loop( function (time) {
    //     console.log('Loop', time)
    //     synth.triggerAttackRelease("C1", "8n", time)
    // }, "4n")

    //play the loop between 0-2m on the transport
    // loop.start(0).stop("2m")
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
    // Tone.Transport.start();
    // Tone.Transport.toggle();
}
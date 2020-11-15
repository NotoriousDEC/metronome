import React, { useEffect } from 'react';

import './Bouncer.animation.scss';

export function Bouncer({ beats, beatsPerMinute, activeBeat, progressBeat }) {

    const animationSpeed = 60000 / beatsPerMinute;

    const ballRef = React.createRef();

    const animationCompleted = progressBeat;

    useEffect(() => {

        ballRef.current.onanimationiteration = progressBeat;

    }, [ballRef]);

    useEffect(() => {

        const beat = beats[activeBeat];

        new Audio(beat.sound).play();

        console.log("play sound!")

    }, [activeBeat]);

    return (
        <div className="animation-container">
            <div 
                ref={ballRef}
                className="ball" 
                style={{ animationDuration: `${animationSpeed}ms` }} 
            />
        </div>
    )

}
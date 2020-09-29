import React, { useEffect, createRef } from 'react';

import Beep from '../../beep.mp3';

export default function SoundMaker({ beatsPerMinute }) {

    const beepAudio = new Audio(Beep);
    
    useEffect(() => {

        const milliseconds = (60 / beatsPerMinute) * 1000;

        const playSound = () => {

            console.log(milliseconds);

            //beepAudio.play();

            timeout = setTimeout(playSound, milliseconds);

        }

        let timeout = setTimeout(playSound, milliseconds);

        return () => {
            clearTimeout(timeout);
        }

    }, [beatsPerMinute])


    return null;


}
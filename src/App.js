import React, { useState } from 'react';
import './App.scss';

import { klack, pling } from './audio';
import { Beat } from './classes';
import { BeatsPerMinuteSelect, BeatsPerMinuteSlider } from './components/BeatsPerMinute';
import { Bouncer } from './components/Bouncer';

import Alert from 'react-bootstrap/Alert'

function App() {

  const beats = [
    new Beat(klack),
    new Beat(klack),
    new Beat(klack),
    new Beat(pling)
  ];

  const [activeBeat, setActiveBeat] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [beatsPerMinute, setBeatsPerMinute] = useState(60);

  const progressBeat = () => {

    let newValue = activeBeat + 1;

    if(newValue >= beats.length) {
      newValue = 0;
    }

    setActiveBeat(newValue);

  }

  return (
    <div className="App">
      <Alert variant="success">{beatsPerMinute}</Alert>   
      <Bouncer
        beatsPerMinute={beatsPerMinute}
        beats={beats}
        activeBeat={activeBeat}
        progressBeat={progressBeat}
      />  
      <BeatsPerMinuteSlider 
        beatsPerMinute={beatsPerMinute} 
        setBeatsPerMinute={setBeatsPerMinute}
      />     
    </div>
  );
}

export default App;

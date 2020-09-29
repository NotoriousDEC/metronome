import React, { useState } from 'react';
import './App.scss';

import { BeatsPerMinuteSelect, BeatsPerMinuteSlider } from './components/BeatsPerMinute';

import Alert from 'react-bootstrap/Alert'

function App() {

  const [beatsPerMinute, setBeatsPerMinute] = useState(60);

  return (
    <div className="App">
      <Alert variant="success">{beatsPerMinute}</Alert>     
      <BeatsPerMinuteSlider 
        beatsPerMinute={beatsPerMinute} 
        setBeatsPerMinute={setBeatsPerMinute}
      />
    </div>
  );
}

export default App;

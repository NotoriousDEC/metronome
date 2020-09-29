import React from 'react';
import './App.scss';

import { BeatsPerMinuteSelect } from './components/BeatsPerMinute';

import Alert from 'react-bootstrap/Alert'

function App() {
  return (
    <div className="App">
      <Alert variant="success">This is our new alert!</Alert>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello James!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

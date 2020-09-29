import React from 'react';
import Form from 'react-bootstrap/Form'

export default function BeatsPerMinuteSlider({ beatsPerMinute, setBeatsPerMinute }) {

    return (
        <Form.Control 
            type="range" 
            value={beatsPerMinute} 
            onChange={(event) => { setBeatsPerMinute(event.target.value); }}
            min={1}
            max={400} 
            custom 
        />
    );

}
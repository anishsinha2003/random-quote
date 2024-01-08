import React, { useState, useEffect } from 'react';
import "./App.css";
const App = () => {
  const [audioPlayed, setAudioPlayed] = useState("")

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const drumPad = document.getElementById(key);
    setAudioPlayed(drumPad)
    if (drumPad) {
      drumPad.click();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const clickHandle = () => {
    const audioElement = document.getElementById("Q");
    if (audioElement) {
      audioElement.play();
    }
    };
  return (

    <div id="drum-machine" className="App">
      <div id="display" className="display">
        {/* {displayText} */}
      </div>
      <div className="drum-pad" onClick={clickHandle}>
        Q
        <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
      </div>
      &nbsp;
      <div className="drum-pad" onClick={clickHandle}>
        W
        <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
      </div>
      &nbsp;
      <div className="drum-pad" onClick={clickHandle}>
        E
        <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
      </div>
      &nbsp;
      <div className="drum-pad" onClick={clickHandle}>
        S
        <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
      </div>
      &nbsp;
      <div className="drum-pad" onClick={clickHandle}>
        D
        <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
      </div>
      &nbsp;
      <div className="drum-pad" onClick={clickHandle}>
        Z
        <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
      </div>
      &nbsp;
      <div className="drum-pad" onClick={clickHandle}>
        X
        <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
      </div>
      &nbsp;

      <div className="drum-pad" onClick={clickHandle}>
        C
        <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
      </div>
      <div id="display">
        {audioPlayed}
      </div>
    </div>
  );
};

export default App;


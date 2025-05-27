import React, { useState } from 'react';
import DrumPad from './DrumPad';
import '../App.css';

const audioClips = [
  { key: 'Q', id: 'Heater-1', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
  { key: 'A', id: 'Heater-4', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
  { key: 'S', id: 'Clap', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
  { key: 'D', id: 'Open-HH', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
  { key: 'Z', id: 'Kick-n-Hat', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
  { key: 'X', id: 'Kick', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Closed-HH', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' }
];

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('Ready');

  const handlePlay = (clipId) => {
    setDisplayText(clipId);
  };

  return (
    <div id="drum-machine" className="drum-bg">
      <h1 className="drum-title">Drum Machine</h1>
      <div id="display">{displayText}</div>
      <div className="drum-grid">
        {audioClips.map((clip) => (
          <DrumPad key={clip.key} clip={clip} onPlay={handlePlay} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine; 
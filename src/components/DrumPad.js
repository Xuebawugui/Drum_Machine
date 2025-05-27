import React, { useEffect } from 'react';

const DrumPad = ({ clip, onPlay }) => {
  const playSound = () => {
    const audio = document.getElementById(clip.key);
    audio.currentTime = 0;
    audio.play();
    onPlay(clip.id);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === clip.key) {
        playSound();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [clip.key]);

  return (
    <div
      className="drum-pad"
      id={clip.id}
      onClick={playSound}
    >
      {clip.key}
      <audio className="clip" id={clip.key} src={clip.src}></audio>
    </div>
  );
};

export default DrumPad; 
import React, { useEffect } from 'react';

function Intro({ onFinish }) {
  useEffect(() => {
    setTimeout(() => {
      onFinish(); 
    }, 5000);
  }, [onFinish]);

  return (
    <div className="intro">
      <video src="/intro.mp4" autoPlay muted className="intro-video" />
    </div>
  );
}

export default Intro;

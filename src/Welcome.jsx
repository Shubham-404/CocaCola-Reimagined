import React, { useRef, useEffect } from "react";
import "./styles/Welcome.css";
import Button from "./comps/Button";

const Welcome = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = .7; // Set desired playback speed here
    }
  }, []);

  return (
    <section id="welcome" className="">
      <video
        ref={videoRef}
        className="welcome-bg-video coke-video"
        autoPlay
        loop
        muted
      >
        <source
          src="/CocaCola-Reimagined/videos/soda-video.mp4"
          type="video/mp4"
        />
        Video playback not supported by the browser. Update.
      </video>
      <div className="welcome-content">
        <div className="sub-content">

          <h1 className="welcome-text txt-l">Refresh with a Drink!</h1>
          <h1 className="welcome-text txt-l">🥤</h1>
          <p className="welcome-text">Experience the ultimate taste of happiness.</p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Welcome;

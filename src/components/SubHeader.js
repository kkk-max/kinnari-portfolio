import React, { useEffect, useRef, useState } from "react";
import { FaHeadSideCough } from "react-icons/fa";
import audio from "../assets/audio/sampleAudio.mp3";
export default function SubHeader() {
  let audio = new Audio(require("../assets/audio/kinnariAudio.mp3"));
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();
  const startAudio = () => {
    myRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current.pause();
    changeAudioStatus(false);
  };

  return (
    <div className="sub-header">
      <div className="container">
        <div className="sub-wapper">
          <div className="sub-left ">
            <span className="name_title">Kinnari Gatare</span>
            {/* <span className="name_title">Gatare</span> */}
            <span className="position_title">UX Researcher+Designer <br/>Visual Designer</span>
          </div>
          <div className="sub-right">
            <h3>
              <audio
                ref={myRef}
                src={require("../assets/audio/kinnariIntro.ogg")}
              />
              {audioStatus ? (
                <img
                  className="audio_icon"
                  src={require("../assets/images/speakIcon.png")}
                  height={25}
                  width={25}
                  onClick={pauseAudio}
                />
              ) : (
                // <FaHeadSideCough onClick={pauseAudio} />
                <img
                  className="audio_icon"
                  src={require("../assets/images/speakIcon.png")}
                  height={25}
                  width={25}
                  onClick={startAudio}
                />
              )}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

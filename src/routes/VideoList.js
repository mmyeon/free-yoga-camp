import React, { useState, useRef, useEffect } from "react";
import db from "../db";
import "./VideoList.scss";
import VideoListItem from "../components/VideoListItem";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

const Detail = (props) => {
  const bodyPart = db.find((item) => item.id === props.match.params.id);
  const [display, setDisplay] = useState("none");
  const [isplayed, setIsPlayed] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoUrl) {
      const video = playerRef.current;
      screenfull.request(video);
    }
  }, [videoUrl]);

  useEffect(() => {
    screenfull.on("change", () => {
      if (screenfull.isFullscreen) {
        setDisplay("block");
        setIsPlayed(true);
      } else {
        setIsPlayed(false);
        setDisplay("none");
        setVideoUrl("");
      }
    });

    return () => {
      screenfull.off("change");
    };
  }, []);

  return (
    <div className="videolist-container">
      <div className="text-container">
        <h3 className="title">{bodyPart.title}</h3>
        <div className="detail">{bodyPart.titleDetail}</div>
      </div>
      <div className="video-container">
        {bodyPart.playList.map((item, index) => (
          <VideoListItem key={index} item={item} setVideoUrl={setVideoUrl} />
        ))}
      </div>
      <div className="player-wrapper" style={{ display }} ref={playerRef}>
        {isplayed && (
          <ReactPlayer
            url={videoUrl}
            playing={isplayed}
            controls
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: { start: 1 },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Detail;

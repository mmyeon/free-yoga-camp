import React from "react";
import ReactPlayer from "react-player";

const Videolist = props => {
  console.log(props);
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=TH-Nbk-HUos"
        playing
        controls={true}
      />
    </div>
  );
};

export default Videolist;

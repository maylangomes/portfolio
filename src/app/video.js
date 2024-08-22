// components/VideoPlayer.js
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ReactPlayer url={url} controls={true} width="100%" height="100%" />
    </div>
  );
};

export default VideoPlayer;

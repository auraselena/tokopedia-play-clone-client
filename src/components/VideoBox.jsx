import { useEffect, useState } from "react";
import data from "../db.json";

function VideoBox() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    setVideoData(data.videos);
  }, []);

//   console.log("data", data.videos);

  function showVideo() {
    return videoData.map((video) => (
      <iframe
        key={video.id}
        width="560"
        height="315"
        src={video.thumbnailUrl}
        //   src="https://www.youtube.com/embed/5tjEl7Lr6hk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ));
  }

  return <div>{showVideo()}</div>;
}

export default VideoBox;

import { useState, useEffect } from "react";
import VideoCard from "../VideoCard/VideoCard";
import classes from "./_videosList.module.scss";
import { v4 as uuidv4 } from "uuid";

const axios = require("axios").default;
const VideosList = (props) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    try {
      const res = await axios.get("http://localhost:4000/admin/getVideos");
      setVideos(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={"row " + classes.videosList_body}>
      {videos.map((video) => {
        return (
          <div key={uuidv4()}>
            <VideoCard
              title={video.video_title}
              description={video.video_description}
              url={video.video_url}
            />
          </div>
        );
      })}
    </div>
  );
};
export default VideosList;

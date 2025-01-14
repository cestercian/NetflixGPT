import { useSelector } from "react-redux";
import useFeatureVideo from "../Hooks/useFeatureVideo";

const TrailerVideo = ({ id }) => {
  useFeatureVideo(id);
  const videoKey = useSelector((store) => store.movies.featureVideoKey);

  return (
    <div className="md:w-screen md:h-screen">
      <iframe
        className="w-screen h-screen -mt-52 md:mt-0 "
        src={
          "https://www.youtube.com/embed/" +
          videoKey +
          "?autoplay=1&mute=1&control=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  );
};

export default TrailerVideo;

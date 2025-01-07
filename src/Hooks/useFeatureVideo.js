import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addFeatureVideoKey } from "../utils/movieSlice";
import { useEffect } from "react";

const useFeatureVideo = (id) => {
  const dispatch = useDispatch();
  const fetchVideo = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?",
      OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(movie => movie.type ==="Trailer");
    const featureVideo = filteredData ? filteredData[0] : json.results[0];
    dispatch(addFeatureVideoKey(featureVideo.key));
  };

  useEffect(() => {
    const fetchTrailer = fetchVideo();
    return ()=> fetchTrailer;
  }, []);
};

export default useFeatureVideo;
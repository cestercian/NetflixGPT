import { useSelector } from "react-redux";
import TrailerVideo from "./TrailerVideo";
import TrailerTitle from "./TrailerTitle";

const TrailerComponent = () => {
  const selector = useSelector(store => store?.movies?.nowPlayingMovies);
  if(selector === null) return;
  const featureVideo = selector[0];
  const {title,overview,id} = featureVideo; 
  
  return (
    <div className="relative -z-10">
      <TrailerTitle title={title} overview={overview} />
      <TrailerVideo id={id} />
    </div>
  );
};

export default TrailerComponent;

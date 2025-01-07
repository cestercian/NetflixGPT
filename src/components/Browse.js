import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import TrailerComponent from "./TrailerComponent";


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <TrailerComponent />
    </div>
  );
};

export default Browse;

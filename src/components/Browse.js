import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpComingMovies from "../Hooks/useUpcomingMovies";
import SecondayContainer from "./SecondayContainer";
import TrailerComponent from "./TrailerComponent";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="overflow-x-hidden">
      <TrailerComponent />
      <SecondayContainer/>
    </div>
  );
};

export default Browse;

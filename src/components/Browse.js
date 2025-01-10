import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpComingMovies from "../Hooks/useUpcomingMovies";
import SecondayContainer from "./SecondayContainer";
import TrailerComponent from "./TrailerComponent";
import Gpt from "./Gpt";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  const showGpt = useSelector((store) => store.gpt.gptPageToggle);
  return (
    <div className="overflow-x-hidden">
      {showGpt ? (
        <Gpt />
      ) : (
        <>
          <TrailerComponent />
          <SecondayContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

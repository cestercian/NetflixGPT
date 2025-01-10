import { useSelector } from "react-redux";
import MovieCatergory from "./MovieCatergory";
const SecondayContainer = () => {
  const selector = useSelector((store) => store.movies);
  return (
    <div className="z-10 ">
      <div className="-mt-28 z-20 bg-black">
        <MovieCatergory movies={selector.nowPlayingMovies} title={"Now Playing"} />
        <MovieCatergory movies={selector.popularMovies} title={"Popular"} />
        <MovieCatergory movies={selector.topRated} title={"Top Rated"}/>
        <MovieCatergory movies={selector.upcoming} title={"Upcoming"} />
      </div>
    </div>
  );
};

export default SecondayContainer;

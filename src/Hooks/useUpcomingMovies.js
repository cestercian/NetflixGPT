import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.movies.upcoming);

  const fetchNowPlaying = async () => {
    let data;
    try {
      data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        OPTIONS
      );
    } catch {
      return;
    }
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    if (!upcoming) {
      const unsubscribe = fetchNowPlaying();
      return () => unsubscribe;
    }
  }, []);
};

export default useUpComingMovies;
